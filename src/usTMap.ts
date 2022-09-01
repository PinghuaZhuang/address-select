import { useMemo, useCallback, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';

export default function useTMap(
  onChange: (value) => void,
): [string, () => void, () => void] {
  const id = useMemo<string>(nanoid, []);
  const mapRef = useRef<{ destroy: () => void }>();
  const onChangeRef = useRef(onChange);

  const initMap = useCallback(() => {
    const drawContainer = document.getElementById(id);
    // 已经创建了则返回
    if (mapRef.current) return;

    const center = new TMap.LatLng(39.953416, 116.380945);
    const map = (mapRef.current = new TMap.Map(drawContainer, {
      zoom: 13,
      pitch: 40,
      center: center,
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
      } else {
        // 没有拾取到POI
        info.close();
      }
    });
  }, []);

  const destroy = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.destroy();
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
