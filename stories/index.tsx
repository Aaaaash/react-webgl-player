import React from "react";
import { storiesOf } from "@storybook/react";

import Player from "../src";

const url =
  "https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/video/49908875-9691-422a-ac80-bd3de781753f/ba30c36b-703a-49fc-a545-a32071dac274.mp4?=1522890603";

class App extends React.Component {
  state = {
    play: false
  };
  render() {
    const { play } = this.state;
    return (
      <div>
        <Player
          sources={url}
          canvasId="myWebGl-player"
          size={{ width: 800, height: 480 }}
          autoPlay
          onrender={(val: number) => {
            // console.log(val);
          }}
          play={play}
          ondurationchange={duration => {
            console.log(duration);
          }}
          onPlaying={(currentTime: number) => {
            console.log(currentTime);
          }}
        />
        <button onClick={() => this.setState({ play: !play })}>
          {play ? "pause" : "play"}
        </button>
      </div>
    );
  }
}
storiesOf("Player", module).add("with text", () => <App />);
