class CommunicationDemoFather extends React.Component {
  state = {
    fatherToChildMessage: '爸爸来消息了',
    childToFatherMessage: '',
  };

  childRef = React.createRef();

  constructor(props) {
    super(props);
  }

  render() {
    const { fatherToChildMessage } = this.state;

    return (
      <div>
        {/* 父 -> 子 -- 使用 ref 完成组件通信 */}
        <button onClick={() => this.childRef.current?.setFatherToChildMessage(fatherToChildMessage)}>使用ref向子组件发送</button>

        <CommunicationDemoChild ref={this.childRef} />
      </div>
    );
  }
}

// 子组件自己维护状态 不依赖于父组件 props
class CommunicationDemoChild extends React.Component {
  state = {
    fatherToChildMessage: '',
  };

  /** @description 暴露给父组件使用的 API -- 修改父到子的消息 fatherToChildMessage */
  setFatherToChildMessage(message) {
    this.setState((state) => ({ ...state, fatherToChildMessage: message }));
  }

  render() {
    const { fatherToChildMessage } = this.state;

    return (
      <div>
        <h3>子组件</h3>
        <p>父组件对我说：{fatherToChildMessage}</p>
      </div>
    );
  }
}

const Demo6 = () => {
  return (
    <>
      <CommunicationDemoFather/>
    </>
  )
}

export default Demo6;