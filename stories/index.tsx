import React from "react";
import { storiesOf } from "@storybook/react";

import Player from "../src";

const url =
  "https://qncdn.miaopai.com/stream/Yxz6L2SApvDcE19wF6yxGhdbhR6ynJtCAJSjVQ___16_0_1522675670.mp4?ssig=0be11c10685ce65e7e507a171e2b448c&time_stamp=1522811457149";

storiesOf("Player", module).add("with text", () => (
  <Player
    sources={[{ src: url, start: 0, end: 10 }]}
    canvasId="myWebGl-player"
    size={{ width: 800, height: 480 }}
    // autoPlay
  />
));
