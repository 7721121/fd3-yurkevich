import React from 'react';
import PropTypes from 'prop-types';

import './styles/FilterAndSort.css';

class FilterAndSort extends React.Component {

  static propTypes = {
    streets: PropTypes.array,
    defaultLabelText: PropTypes.string
  };

  state = {
    streetsForSort: this.props.streets,
    labelText: this.props.deflabeltext,
    isSorted: false,
    filterValue: ''
  };

  processStreets = () => {
    this.setState({streetsForSort: this.props.streets});

    var filterValueLower = this.state.filterValue.toLowerCase();
    var filteredStreetsArr = this.props.streets.slice();
    var filteredStreets = filteredStreetsArr.filter(function(item) {
      var streetName = item.name.toLowerCase();
      return streetName.includes(filterValueLower);
    });

    if(this.state.filterValue != ''){
      this.setState({streetsForSort: filteredStreets});
    }

    if(this.state.isSorted == true){
      var sortedStreetsArr = filteredStreets;
      var sortedStreets = sortedStreetsArr.sort(function(a,b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      this.setState({streetsForSort: sortedStreets});
    }
  }

  filterStreets = (e) => {
    var typingValue = e.target.value;
    if (typingValue != ''){
      this.setState( {filterValue: typingValue},this.processStreets)
    }else{
      this.setState( {filterValue: '',},this.processStreets)
    }
  }

  toggleCheckbox = (e) => {
    console.log(e.target.checked);
    if (e.target.checked==true){
      this.setState( {isSorted: true, labelText: 'Отсортировано A-Я ↓'},this.processStreets)
    }else{
      this.setState( {isSorted: false, labelText: this.props.deflabeltext},this.processStreets)
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
          <input type="checkbox" id="sort" onChange={this.toggleCheckbox} />
          <label htmlFor="sort">{this.state.labelText}</label>
        </div>
        <ul className='street-list'>{streetsList}</ul>
      </div>
    );
  }
}

export default FilterAndSort;
