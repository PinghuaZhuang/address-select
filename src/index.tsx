import { useCallback, useEffect } from 'react';
import { Cascader } from 'antd';
import type { FormInstance } from 'antd/es/form';
import dropRight from 'lodash/dropRight';
import set from 'lodash/set';
// @ts-ignore
import defAddressData from './addressData';

type ID = number | string;

interface AddressData {
  id: ID;
  pid: ID;
  name: string;
  type: 'CITYI' | 'AREA' | 'PROVINCE';
  childNodes: AddressData[];
}

interface AdressSelectProps {
  onChange: (value?: ID) => void;
  onProvinceChange: (value?: ID) => void;
  data: {
    name: string | string[];
  };
  form?: FormInstance;
  addressData?: AddressData[];
}

function isArray(obj: any) {
  return Array.isArray(obj);
}

const defaultGetPopupContainer = (el: HTMLElement) =>
  el.parentElement as HTMLElement;

const AdressSelect = (props: AdressSelectProps) => {
  const {
    onChange: userOnChange,
    onProvinceChange: userOnProvinceChange,
    data,
    form,
    addressData = defAddressData as AddressData[],
  } = props;

  const onProvinceChange = useCallback(
    (value: ID) => {
      const isDeepPath = isArray(data.name);
      const field = isDeepPath
        ? [...(dropRight(data.name) as string[]), 'province']
        : 'province';
      if (userOnProvinceChange) {
        userOnProvinceChange(value);
      }
      if (form) {
        setTimeout(() => {
          form.setFieldsValue(set({}, field, value));
        }, 1);
      }
    },
    [data],
  );

  const onChange = useCallback(
    (values: ID[]) => {
      const isEmpty = !isArray(values) || values == null;
      userOnChange && userOnChange(isEmpty ? undefined : values.join(' '));
      if (!isEmpty && form && data) {
        onProvinceChange && onProvinceChange(values[0]);
      }
    },
    [userOnChange, onProvinceChange],
  );

  return (
    <Cascader
      getPopupContainer={defaultGetPopupContainer}
      options={addressData}
      expandTrigger="hover"
      fieldNames={{
        label: 'name',
        value: 'name',
        children: 'childNodes',
      }}
      placeholder="请选择所在城市"
      {...props}
      onChange={onChange}
    />
  );
};

export default AdressSelect;
