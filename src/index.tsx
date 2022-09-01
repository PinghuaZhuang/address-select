import { useCallback, useEffect, useState, useMemo } from 'react';
import { Cascader, Button, message } from 'antd';
import type { FormInstance } from 'antd/es/form';
import dropRight from 'lodash/dropRight';
import set from 'lodash/set';
import styles from './style.module.less';
import type { Address } from './utils';
import useTMap from './usTMap';
// @ts-ignore
import defAddressData from './addressData';
// @ts-ignore
import MapIcon from './icon';

type ID = number | string;

interface AddressData {
  id: ID;
  pid: ID;
  name: string;
  type: 'CITYI' | 'AREA' | 'PROVINCE';
  childNodes: AddressData[];
}

interface AdressSelectProps {
  onChange: (value?: ID[]) => void;
  onProvinceChange: (value?: ID) => void;
  onAddressChange?: (value: string) => void;
  data?: {
    name: string | string[];
  };
  form?: FormInstance;
  addressData?: AddressData[];
}

function isArray(obj: any) {
  return Array.isArray(obj);
}

const defaultGetPopupContainer = (el: HTMLElement) =>
  el.parentElement?.parentElement as HTMLElement;

const AdressSelect = (props: AdressSelectProps) => {
  const {
    onChange: userOnChange,
    onProvinceChange: userOnProvinceChange,
    onAddressChange: userOnAddressChange,
    data,
    form,
    addressData = defAddressData as AddressData[],
    ...otherProps
  } = props;
  const [visible, setVisible] = useState(false);
  const field = useMemo(() => {
    if (data == null) return;
    const isDeepPath = isArray(data.name);
    const _field = isDeepPath
      ? [...(dropRight(data.name) as string[]), 'province']
      : 'province';
    return _field;
  }, [data]);

  const onProvinceChange = useCallback(
    (value: ID) => {
      if (userOnProvinceChange) {
        userOnProvinceChange(value);
      }
      if (field == null) return;
      if (form) {
        setTimeout(() => {
          form.setFieldsValue(set({}, field, value));
        }, 1);
      }
    },
    [field, userOnProvinceChange, form],
  );

  const onChange = useCallback(
    (values: ID[]) => {
      const isEmpty = !isArray(values) || values == null;
      userOnChange && userOnChange(isEmpty ? undefined : values);
      if (!isEmpty) {
        onProvinceChange && onProvinceChange(values[0]);
      }
    },
    [userOnChange, onProvinceChange],
  );

  const onAddressChange = useCallback(
    (value: string) => {
      userOnAddressChange && userOnAddressChange(value);
      if (field == null) return;
      if (form) {
        setTimeout(() => {
          form.setFieldsValue(set({}, field, value));
        }, 1);
      }
    },
    [userOnAddressChange, field, form],
  );

  const toggleMap = useCallback(() => {
    setVisible((v) => !v);
  }, []);

  const onTMapChange = useCallback(
    (address: Address) => {
      const values = [
        address.province,
        address.city,
        address.district,
        // address.street_number,
      ];
      onChange(values);
      onAddressChange(address.name);
    },
    [onChange, onAddressChange],
  );

  const [tmapId, initMap] = useTMap(onTMapChange, () => {
    message.error(`地图初始化失败`);
    setVisible(false);
  });

  useEffect(() => {
    if (visible) {
      initMap();
    }
  }, [visible]);

  return (
    <span>
      <div className={styles.container}>
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
          {...otherProps}
          onChange={onChange}
        />
        <span className="ant-input-group-addon">
          <Button onClick={toggleMap} icon={<MapIcon />} />
        </span>
      </div>
      <div
        id={tmapId}
        style={{
          width: '100%',
          marginTop: 20,
          display: visible ? 'block' : 'none',
        }}
      ></div>
    </span>
  );
};

export default AdressSelect;
