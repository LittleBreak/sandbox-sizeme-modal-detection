import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "antd";
import sizeMe from "react-sizeme";
import "antd/dist/antd.css";
import "./styles.css";

class Content extends React.Component {
  render() {
    console.log(this.props.size);
    return <div>test</div>;
  }
}
const Wrapper = sizeMe({
  monitorWidth: true,
  monitorHeight: true
  // refreshRate: REFRESH_RATE,
  // refreshMode: 'throttle',
  // FIXME: 没有placeholder的话，居中的弹层计算不准确
  // noPlaceholder: true,
})(Content);

class App extends React.Component {
  state = {
    visible: false
  };
  toggle = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.toggle}>open modal</button>
        <Modal
          visible={this.state.visible}
          onCancel={this.toggle}
          title="title"
        >
          <Wrapper />
        </Modal>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
