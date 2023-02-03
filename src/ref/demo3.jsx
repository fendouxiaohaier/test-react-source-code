import { useEffect } from 'react';
import { useRef } from 'react';

const Demo3 = () => {
  const ref = useRef();

  useEffect(() => {
    console.log(ref);
  }, []);

  return <div ref={ref}>ref 属性传递函数获取 DOM 元素</div>;
};

export default Demo3;
