import React from 'react';
import PropTypes from 'prop-types';

import './styles/FilterAndSort.css';

class FilterAndSort extends React.Component {

  static propTypes = {
    streets: PropTypes.array,
    defsorted: PropTypes.bool,
  };

  state = {
    isSorted: this.props.defsorted,
    streetsForSort: this.props.streets
  }

  checkboxChangeState = () => {

      this.setState( {isSorted: !this.state.isSorted} );

      if (this.state.isSorted === false){
        var sortedStreets = this.state.streetsForSort.slice(0);
        sortedStreets.sort(function(a,b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        this.setState( {streetsForSort: sortedStreets} );

      }else{
        this.setState( {streetsForSort: this.props.streets} );
      }
  }

  render() {

  var streetsList = this.state.streetsForSort.map( v =>
      <li key={v.id}>{v.name}</li>
  );
    return (
      <div className='FilterAndSort'>
        <h1>Filter</h1>
        <h2>Central District Streets</h2>
        <div className="checkbox-block">
          <input type="checkbox" id="sort" onChange={this.checkboxChangeState} />
          <label htmlFor="sort">Sort It!</label>
        </div>
        <ul className='street-list'>{streetsList}</ul>
      </div>
    );
  }
}

export default FilterAndSort;
