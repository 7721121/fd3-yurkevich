import React from 'react';
import PropTypes from 'prop-types';

import './styles/RainbowFrame.css';

class RainbowFrameColor extends React.Component {

    static propTypes = {
        colorFunc: PropTypes.func
    };



    render() {
        return (
            <div >
                 {this.props.children}
            </div>
    );
    }

};

export default RainbowFrameColor;