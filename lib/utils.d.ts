/**
 * 遍历树状结构数据
 * @param {Array<any>} arr 目标数状结构的数据
 * @param {Function} fn 回调
 * @param {String} childrenField children对应的字段名
 * @example [{ name: 'xxx', children: [{ name: 'childrenName' }] }]
 */
export declare function each<T>(
  arr: T[] | undefined,
  fn: (data: T, parent?: T, level?: number) => void,
  childrenField?: string,
  parent?: T,
  parentLevel?: number,
): void;
export declare function invoke(
  fn?: (...reset: any[]) => void,
  ...rest: any[]
): void | undefined;
export declare function px2width(str: string, font?: string): number;
