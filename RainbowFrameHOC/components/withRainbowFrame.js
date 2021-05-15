import React from 'react';
import RainbowFrame from './RainbowFrame';

function withRainbowFrame(Component){
  return props => (
    <RainbowFrame colors={props.colors}>
      <Component {...props} />
    </RainbowFrame>
    );
}

export { withRainbowFrame };
