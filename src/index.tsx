import { useCallback, useEffect, useState } from 'react';
import { Cascader, Button } from 'antd';
import type { FormInstance } from 'antd/es/form';
import dropRight from 'lodash/dropRight';
import set from 'lodash/set';
import { getLocation } from './utils';
import useTMap from './usTMap';
// @ts-ignore
import MapIcon from './icon';
// @ts-ignore
import defAddressData from './addressData';
import styles from './style.module.less';
import classNames from 'classnames';

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
  data?: {
    name: string | string[];
  };
  form?: FormInstance;
  addressData?: AddressData[];
  className?: string;
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
    className,
    ...otherProps
  } = props;
  const [tmapId, initMap, destroy] = useTMap(() => console);
  const [visible, setVisible] = useState(false);

  const onProvinceChange = useCallback(
    (value: ID) => {
      if (userOnProvinceChange) {
        userOnProvinceChange(value);
      }
      if (data == null) return;
      const isDeepPath = isArray(data.name);
      const field = isDeepPath
        ? [...(dropRight(data.name) as string[]), 'province']
        : 'province';
      if (form) {
        setTimeout(() => {
          form.setFieldsValue(set({}, field, value));
        }, 1);
      }
    },
    [data, userOnProvinceChange],
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

  const toggleMap = useCallback(() => {
    console.log(1);
    setVisible((v) => !v);
  }, []);

  useEffect(() => {
    if (visible) {
      initMap();
    }
  }, [visible]);

  return (
    <div>
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
          // suffixIcon={<span onClick={toggleMap}><MapIcon /></span>}
          {...otherProps}
          className={classNames(styles, className)}
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
    </div>
  );
};

export default AdressSelect;
