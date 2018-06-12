import React from 'react';
import PropTypes from 'prop-types';

import './styles/FilterAndSort.css';

class FilterAndSort extends React.Component {

  static propTypes = {
    streets: PropTypes.array,
    defaultSorted: PropTypes.bool,
    defaultLabelText: PropTypes.string,
  };

  state = {
    isSorted: this.props.defsorted,
    streetsForSort: this.props.streets,
    labelText: this.props.deflabeltext,
    filterValue: ''
  }

  filterStreets = (e) => {
    var typingValue = e.target.value.toLowerCase();
    var filteredStreetsArr = this.state.streetsForSort.slice(0);
    var filteredStreets = filteredStreetsArr.filter(function(item) {
      var streetName = item.name.toLowerCase();
      return streetName.includes(typingValue);
    });
    this.setState( {filterValue: typingValue, streetsForSort: filteredStreets});
  }

  checkboxChangeState = () => {

      this.setState( {isSorted: !this.state.isSorted} );

      if (this.state.isSorted === false){
        var sortedStreets = this.state.streetsForSort.slice(0);
        sortedStreets.sort(function(a,b) {
          var x = a.name.toLowerCase();
          var y = b.name.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        this.setState( {streetsForSort: sortedStreets, labelText: 'Sorted'});

      }else{
        this.setState( {streetsForSort: this.props.streets, labelText: this.props.deflabeltext} );
      }
  }

  render() {

    var streetsList = this.state.streetsForSort.map( v =>
        <li key={v.id}>{v.name}</li>
    );

    return (
      <div className='FilterAndSort'>
        <h1>Filter And Sort</h1>
        <h2>Central District Streets</h2>
        <input type="search"  placeholder="Введите улицу" defaultValue={this.state.filterValue} onChange={this.filterStreets} />
        <div className="checkbox-block">
          <input type="checkbox" id="sort" onChange={this.checkboxChangeState} />
          <label htmlFor="sort">{this.state.labelText}</label>
        </div>
        <ul className='street-list'>{streetsList}</ul>
      </div>
    );
  }
}

export default FilterAndSort;
