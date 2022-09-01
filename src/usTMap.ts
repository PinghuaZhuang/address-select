import { useMemo, useCallback, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getLocation, getAdress } from './utils';
import type { LatLng, Address } from './utils';

export default function useTMap(
  onChange: (address: Address & { latLng: LatLng }) => void,
  onError?: (error: any) => void,
): [string, () => void, () => void] {
  const id = useMemo<string>(nanoid, []);
  const mapRef = useRef<{ destroy: () => void } | null>();
  const onChangeRef = useRef(onChange);

  const initMap = useCallback(() => {
    const drawContainer = document.getElementById(id);
    // 已经创建了则返回
    if (mapRef.current) return;

    getLocation()
      .then((iplocation) => {
        const { location } = iplocation;
        const { lat, lng } = location;

        const center = new TMap.LatLng(lat, lng);
        const map = (mapRef.current = new TMap.Map(drawContainer, {
          zoom: 16,
          // pitch: 40,
          center,
        }));

        // 创建信息窗
        const info = new TMap.InfoWindow({
          map,
          position: map.getCenter(),
        }).close();

        map.on('click', (evt: any) => {
          // 获取click事件返回的poi信息
          const poi = evt.poi;
          if (poi) {
            // 拾取到POI
            info.setContent(poi.name).setPosition(poi.latLng).open();
            getAdress(poi.latLng).then((address: any) => {
              if (onChangeRef.current) {
                onChangeRef.current({
                  ...address.address_component,
                  latLng: poi.latLng,
                });
              }
            });
          } else {
            // 没有拾取到POI
            info.close();
          }
        });
      })
      .catch((e) => {
        onError && onError(e);
      });
  }, []);

  const destroy = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.destroy();
      mapRef.current = null;
    }
  }, []);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    return destroy;
  }, []);

  return [id, initMap, destroy];
}
