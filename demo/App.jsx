import { useState, useEffect, useCallback } from 'react';
import { Modal, Divider } from 'antd';
import AddressSelect from '../src';

const App = () => {
  const [city, setCity] = useState();
  const [province, setProvince] = useState();

  return (
    <Modal visible title="Permission-Table Demo" footer={null} width="1100px">
      <div
        style={{
          minHeight: `60vh`,
        }}
      >
        <AddressSelect onChange={setCity} onProvinceChange={setProvince} />
        <Divider />
        <strong>省份:</strong> {province}
        <br />
        <strong>城市:</strong> {city && city.join(' / ')}
      </div>
    </Modal>
  );
};

export default App;
