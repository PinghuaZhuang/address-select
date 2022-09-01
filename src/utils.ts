interface IPLocation {
  ad_info: {
    adcode: number;
    city: string;
    district: string;
    nation: string;
    province: string;
  };
  location: {
    height: number;
    lat: number;
    lng: number;
  };
}

export interface Address {
  city: string;
  district: string;
  nation: string;
  province: string;
  street: string;
  street_number: string;
}

export interface LatLng {
  lat: number;
  lng: number;
}

/**
 * 返回当前位置信息
 * @return {}
 */
export function getLocation(): Promise<IPLocation> {
  const ipLocation = new TMap.service.IPLocation();
  return ipLocation
    .locate({
      sig: 'WqUSZmCQpS2EwGNoHGdFInnsAdB0jOPS',
    })
    .then((response: any) => response.result);
}

export function getAdress(latLng: LatLng) {
  const location = new TMap.LatLng(latLng.lat, latLng.lng);
  const geocoder = new TMap.service.Geocoder();
  return geocoder
    .getAddress({ location: location })
    .then((response: any) => response.result);
}
