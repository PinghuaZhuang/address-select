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

/**
 * 返回当前位置信息
 * @return {}
 */
export function getLocation(): IPLocation {
  const ipLocation = new TMap.service.IPLocation();
  return ipLocation.locate({});
}
