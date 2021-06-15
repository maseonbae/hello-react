import React, {Component} from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    const style = {
      position: "relative",
      overflow: "auto",
      width: 300,
      height: 300,
      border: "1px solid black"
    };

    const innerStyle = {
      width: "100%",
      height: 650,
      background: "linear-gradient(white, black)"
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref; }}
      >
        <div style={innerStyle}/>
      </div>
    );
  }
}

export default ScrollBox;