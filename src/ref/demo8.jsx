import React from 'react';

class RefDemo8 extends React.Component {
  state = {
    counter: 0,
  };

  el = null;

  constructor(props) {
    super(props);
    this.setElRef = this.setElRef.bind(this)
  }

  setElRef(el) {
    this.el = el
    console.log('this.el -- ', this.el)
  }

  render() {
    return (
      <div>
        <div
          ref={(el) => {
            this.el = el;
            debugger;
            console.log('this.el -- ', this.el);
          }}
          // ref={this.setElRef}
        >
          ref element
        </div>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>add</button>
      </div>
    );
  }
}

export default RefDemo8;
