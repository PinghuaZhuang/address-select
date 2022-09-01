import { useState } from 'react';
import { Modal, Divider } from 'antd';
import AddressSelect from '../src';

const App = () => {
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const [address, setAddress] = useState();

  return (
    <Modal visible title="Address-Select Demo" footer={null} width="1100px">
      <div
        style={{
          minHeight: `60vh`,
        }}
      >
        <strong>省份:</strong> {province}
        <br />
        <strong>城市:</strong> {city && city.join(' / ')}
        <br />
        <strong>详细地址:</strong> {address}
        <Divider />
        <span>Tip: 点击图标开启/关闭地图</span>
        <br />
        <AddressSelect
          value={city}
          onChange={setCity}
          onProvinceChange={setProvince}
          onAddressChange={setAddress}
        />
      </div>
    </Modal>
  );
};

export default App;
