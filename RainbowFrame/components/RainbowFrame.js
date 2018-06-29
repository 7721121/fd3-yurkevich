import React from 'react';
import PropTypes from 'prop-types';

import './styles/RainbowFrame.css';
import RainbowFrameColor from './RainbowFrameColor';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        hex: PropTypes.string.isRequired
      })
    ),
      colorFun: PropTypes.func,
      funInner: PropTypes.func
  };

     getRandomInt = (min,max) => {
        return Math.floor(Math.random() * (max - min)) + max;
    }


    mood = (colorsCount) => {
        let colors=this.props.colors;

        console.log( 'цветов: ' + colorsCount );
        for ( var i=1; i<=colorsCount; i++ ) {
            var n=getRandomInt(0,9);
            var colorName=colors[n];
            console.log( colorName );
        }
    }


    colorFun = (parentDiv, k, n) => {
        if (n > 0) {
                childDiv = document.createElement('DIV');
            parentDiv.appendChild(childDiv);
            appendDiv(childDiv, k, n - 1);
        }
    }

  render() {

  var colorsList=this.props.colors.map( item =>

      <div key={item.hex} className={"rainbow color-" + item.hex} colorFun={this.colorFun} >
        </div>

/*

 function write(n) {
 if(n >= 0) {
 console.log(n);
 write(n - 1);
 }
 }

        <RainbowFrameColor key={item.hex} className={"rainbow color-" + item.hex} colFunc={this.colorFunc} colorHex={item.hex}/>
*/
 /* workMode={this.state.workMode}*/
);


    return (
      <div>
        <h1>RainbowFrame</h1>
        {colorsList}
        <RainbowFrameColor  colFunc={this.colorFunc} />




      </div>
    );
  }
}

export default RainbowFrame;