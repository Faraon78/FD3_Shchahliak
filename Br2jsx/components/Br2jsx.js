import React from 'react';
import PropTypes from 'prop-types';
import './Br2jsx.css';

class Br2jsx extends React.Component {  
  
  render() {

    let words = this.props.text.split(/<br\s*\/?>/);  
    console.log(words);
    let parts =[];
    words.forEach(
      (word, i)=>{
        if(i>0){
      parts.push(<br key={i}/>)
    };
      parts.push(word)
  });
    console.log(parts);
      return (
        parts
      )  
  }
}

export default Br2jsx;
