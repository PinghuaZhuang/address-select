/// <reference types="react" />
import { CheckboxProps } from 'antd/es/checkbox';
import TreeModel from '../../TreeModel';
declare const EasyCheckbox: (
  props: CheckboxProps & {
    expand?: boolean | undefined;
    onExpand?: ((expand: boolean) => void) | undefined;
    /**
     * 设置为叶子节点. 为 false 时会强制将其作为父节点
     */
    isLeaf?: boolean | undefined;
    data: TreeModel;
    firstCenterCol?: boolean | undefined;
  },
) => JSX.Element;
export default EasyCheckbox;
