#React-WebGL-Player
React player component based on webgl.

## run example
```bash
npm install
npm run storybook
```

## usage
```javascript
import Player from 'react-webgl-player';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Player
          sources="xx.mp4"
          size={{ width: 1280, height: 720 }}
        />
      </div>
    );
  }
}
```
