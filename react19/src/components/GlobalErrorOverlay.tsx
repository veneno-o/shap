// GlobalErrorOverlay.tsx
import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import toast from 'react-hot-toast';

const GlobalErrorOverlay: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const listener = (e: CustomEvent) => {
      setErrors(e.detail.messages);
      setVisible(true);
    };

    window.addEventListener('globalErrors', listener as EventListener);
    return () => {
      window.removeEventListener('globalErrors', listener as EventListener);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setErrors([]);
  };

  return (
    <>
    <Button onClick={() => {
      toast.error('This is a test error toast!');
    }}>Show Modal</Button>
    <Modal
      title="系统遇到多个错误"
      open={visible}
      footer={[
        <Button key="close" onClick={handleClose}>
          我知道了
        </Button>,
        <Button
          key="refresh"
          type="primary"
          onClick={() => window.location.reload()}
        >
          刷新页面
        </Button>
      ]}
      onCancel={handleClose}
    >
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {errors.length > 3 ? (
          <p>共遇到 {errors.length} 个关键错误，部分错误如下：</p>
        ) : null}

        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          {errors?.slice(0, 3)?.map((msg, i) => (
            <li key={i} style={{ color: '#ff4d4f', marginBottom: '8px' }}>
              {msg}
            </li>
          ))}
        </ul>
      </div>
    </Modal></>
  );
};

export default GlobalErrorOverlay;
