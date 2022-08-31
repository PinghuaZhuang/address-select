/// <reference types="react" />
import TreeModel, { Data as TreeData } from './TreeModel';
export interface Column {
  title?: string;
}
export interface PermissionTableProps {
  value?: Data['id'][];
  dataSource: Data[];
  columns?: Column[];
  loading?: boolean;
  defaultSelectedKeys?: Data['id'][];
  onChange?: (selectedKeys: Data['id'][]) => void;
}
export declare type PermissionTableTitleProps = Required<
  Pick<PermissionTableProps, 'columns'>
>;
export interface Data extends TreeData {
  parent: Data;
  expand?: boolean;
}
export interface MenuListProps {
  columns: Column[];
  list: TreeModel[];
  onChange?: PermissionTableProps['onChange'];
}
export interface RowProps {
  data: TreeModel;
}
export interface ExpandColDeepProps {
  data: TreeModel | null;
  list: TreeModel[];
  firstCenterCol?: boolean;
  expand?: boolean;
  setExpand?: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare type Map<T> = {
  [P: string]: T;
};
