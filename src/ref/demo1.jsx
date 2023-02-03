import { useEffect, createRef, useRef } from 'react';

const Demo1 = () => {
  const ref = createRef();
  const ref2 = useRef();
  const ref3 = useRef(123);

  useEffect(() => {

    console.log(ref2.current);
    console.log(ref3.current);
    console.log(ref.current);
  }, []);

  return <div ref={ref}>Demo1</div>
}

export default Demo1;
