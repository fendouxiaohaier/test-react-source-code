import { useRef, useEffect } from 'react';

/** @description HOC 中使用 forwardRef 转发 ref */
const HOCWithForwardRef = (Component) => {
  class WrapComponent extends React.Component {
    render() {
      const { forwardedRef } = this.props;

      return (
        <div>
          <p>WrapComponent</p>
          <Component ref={forwardedRef} />
        </div>
      );
    }
  }

  return React.forwardRef((props, ref) => <WrapComponent forwardedRef={ref} {...props} />);
};

class TestComponent extends React.Component {
  render() {
    return <p>TestComponent</p>;
  }
}

const HOCComponent2 = HOCWithForwardRef(TestComponent);
const RefHOCWithForwardRefDemo = () => {
  const hocComponent2Ref = useRef(null);

  useEffect(() => {
    // hocComponent2Ref 指向的是 HOCComponent2 实例
    console.log(hocComponent2Ref.current);
  }, []);

  return <HOCComponent2 ref={hocComponent2Ref} />;
};

export default RefHOCWithForwardRefDemo;
