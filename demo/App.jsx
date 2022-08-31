import { useState, useEffect, useCallback } from 'react';
import { Modal } from 'antd';
import AddressSelect from '../src';

const App = () => {
  const onChange = useCallback((value) => {
    console.log('onChange', value);
  }, []);

  return (
    <Modal visible title="Permission-Table Demo" footer={null} width="1100px">
      <div
        style={{
          minHeight: `60vh`,
        }}
      >
        <AddressSelect onChange={onChange} />
      </div>
    </Modal>
  );
};

export default App;
