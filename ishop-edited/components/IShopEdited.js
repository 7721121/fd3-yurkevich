import React from 'react';
import PropTypes from 'prop-types';

import './styles/IShopEdited.css';

class IShopEdited extends React.Component {

  static propTypes:{
    goodsHead: PropTypes.array,
    goods: PropTypes.array,
/*    goods: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        count: PropTypes.number,
        price: PropTypes.number
      })*/
  }

  state = {
    activetRow: false,
    class: ''
  };

  hightlightRow = (e) => {
    console.log(e.target);
      //e.preventDefault();
      this.setState({activetRow: !this.state.activetRow, class: 'active'});
  }

  render() {

  const goodsListHead = this.props.goodsHead.map(h =>
    <tr key={h.nameHead}>
      <th>{h.imageHead}</th>
      <th>{h.nameHead}</th>
      <th>{h.countsHead}</th>
      <th>{h.priceHead}</th>
    </tr>
  );

  const goodsList = this.props.goods.map(v =>
    <tr key={v.id} onClick={this.hightlightRow} className={this.state.class}>
      <td className="img"><img src={v.image} height="60" /></td>
      <td className="name">{v.name}</td>
      <td>{v.counts}</td>
      <td className="price">{v.price + ' BYN'}</td>
    </tr>
  );

    return (
      <div className="goodsTable">
        <h1>iShop</h1>
        <table className="good-list">
          <thead>{goodsListHead}</thead>
          <tbody>{goodsList}</tbody>
        </table>
      </div>
    );
  }
}

export default IShopEdited;
