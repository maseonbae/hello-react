import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    // 생성자
    super(props);

    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 렌더링 되기 전에 호출
    console.log("getDerivedStateFromProps");

    if (nextProps.color !== prevState.color) {
      return {
        color: nextProps.color
      };
    }
    return null;
  }

  componentDidMount() {
    // 렌더링 완료 후 호출
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 리렌더링 하기 직전에 호출
    console.log("shouldComponentUpdate", nextProps, nextState);

    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    // 언마운트 하기 전 호출
    console.log("componentWillUnmount");
  }

  getSnapshotBeforeUpdate(prepProps, prevState) {
    // 실제 DOM 변화 전 호출
    console.log("getSnapshotBeforeUpdate");
    if (prepProps.color !== this.props.color) {
      return this.myRef.style.color;
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 직전 색상: ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={ref => this.myRef = ref}>{this.state.number}</h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
}

export default LifeCycleSample;