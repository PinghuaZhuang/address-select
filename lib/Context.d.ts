import React from 'react';
import TreeModel, { Diff } from './TreeModel';
import { PermissionTableProps } from './type';
export declare type ContextType = Pick<PermissionTableProps, 'columns'> & {
  dataSource: TreeModel[];
  maxLevel: number;
  onChange: () => void;
  dispatchMap: {
    [P: string]: {
      checked?: React.Dispatch<React.SetStateAction<boolean>>;
      indeterminate?: React.Dispatch<React.SetStateAction<boolean>>;
      expand?: React.Dispatch<React.SetStateAction<boolean>>;
    };
  };
  dispatchWithDiff: (diff: Diff) => void;
  authWidth: number;
};
declare const Context: React.Context<ContextType>;
export interface ContextProvider {
  children?: React.ReactNode;
}
export declare const Provider: React.Provider<ContextType>;
export default Context;
