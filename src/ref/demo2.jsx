class RefDemo2 extends React.Component {
  refDemo2DOM = null;

  componentDidMount() {
    console.log(this.refDemo2DOM);
  }

  render() {
    return (
      <>
        <div ref={(el) => (this.refDemo2DOM = el)}>ref 属性传递函数获取 DOM 元素</div>
      </>
    );
  }
}

export default RefDemo2;
