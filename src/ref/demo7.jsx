import { forwardRef, useImperativeHandle, useState, useRef } from 'react';

const Father = () => {
  const [fatherToChildMessage] = useState('爸爸来消息了');

  const childRef = useRef(null);

  return (
    <div >
      <h3>父组件</h3>
      <div >
        {/* 父 -> 子 -- 使用 ref 完成组件通信 */}
        <button onClick={() => childRef.current?.setFatherToChildMessage(fatherToChildMessage)}>发送</button>
      </div>

      <Child ref={childRef} />
    </div>
  );
};

const Child = forwardRef((props, ref) => {
  // 子组件自己维护状态 不依赖于父组件 props
  const [fatherToChildMessage, setFatherToChildMessage] = useState('');

  // 定义暴露给外界的 API
  useImperativeHandle(ref, () => ({ setFatherToChildMessage }));

  return (
    <div>
      <h3>子组件</h3>
      <p>父组件对我说：{fatherToChildMessage}</p>
    </div>
  );
});

export default Father;
