import React from 'react';
import PropTypes from 'prop-types';

import './styles/FilterAndSort.css';

class FilterAndSort extends React.Component {

  static propTypes = {
    streets: PropTypes.array,
    defsorted: PropTypes.bool,
  };

  state = {
    isSorted: this.props.defsorted
  }

  checkboxChangeState = () => {
      this.setState( {isSorted: !this.state.isSorted} );
  }

  render() {

  if (this.state.isSorted){
    alert('sdsf');
  }else{
    var streetsList=this.props.streets.map( v =>
        <li key={v.code}>{v.name}</li>
    );
  }


    return (
      <div className='FilterAndSort'>
        <h1>Filter</h1>
        <h2>Central District Streets</h2>
        <label>
          <input type="checkbox" onChange={this.checkboxChangeState} />
          Sort It!
        </label>
        <ul className='street-list'>{streetsList}</ul>
      </div>
    )
    ;

  }

}

export default FilterAndSort;
