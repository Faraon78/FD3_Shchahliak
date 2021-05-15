import React from 'react';
import PropTypes from 'prop-types';

import './MyBlock.css';

import RainbowFrame from './RainbowFrame';
import DoubleButton from './DoubleButton';
import { withRainbowFrame } from './withRainbowFrame';

class MyBlock extends React.Component {
  cbPressed=(id)=>{
    console.log('Нажали кнопку с ключом '+id)
  }

  render() {
    let DoubleButtonWitRF=withRainbowFrame(DoubleButton);
    
    return (
      <div className='MyBlock'>
        <DoubleButton caption1={this.props.caption1} className = 'button' caption2={this.props.caption2} cbPressed={this.cbPressed}>
          <span className = 'childBut'>Привет! Эту надпись я получил в props</span>
        </DoubleButton>
        
        <RainbowFrame colors={this.props.colors} className= 'frame'>
        <DoubleButton caption1={this.props.caption1} className = 'button' caption2={this.props.caption2} cbPressed={this.cbPressed}>
          <span className = 'childBut'>Привет! Здесь компоненты просто вложены</span>
        </DoubleButton>
        </RainbowFrame>
        <br/>
        <DoubleButtonWitRF caption1={this.props.caption1} className = 'button' caption2={this.props.caption2} colors={this.props.colors} cbPressed={this.cbPressed}>
          <span className = 'childBut'>Привет! Здесь компонент обернут в HOC</span>
        </DoubleButtonWitRF>
        
      </div>
    )
    ;

  }

}

export default MyBlock;
//<DoubleButtonWitRF caption1={this.props.caption1} className = 'button' caption2={this.props.caption2} cbPressed={this.cbPressed}>
//<span className = 'childBut'>Привет! Эту надпись я получил в props</span>
//</DoubleButtonWitRF>