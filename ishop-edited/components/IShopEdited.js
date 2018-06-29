import React from 'react';
import PropTypes from 'prop-types';

import './styles/IShopEdited.css';

class IShopEdited extends React.Component {

  static propTypes = {
    goodsHead: PropTypes.array,
    goods: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        count: PropTypes.number,
        price: PropTypes.number
      })
    )
  };

  state = {
    goodID: null,
    openCard: false
  };

  hightlightRow = (e) => {
    let target = e.target;
    let targetRow = target.closest('tr');
    let targetTable = target.closest('.goods-table-list');

  
    if(targetRow.classList.contains('active')){
      targetRow.classList.remove('active');
      let targetRowID = targetRow.setAttribute('data-id','');
      this.setState({openCard: false, goodID: null });
    }else{
      let selectedRows = targetTable.querySelectorAll('.active');
      if(selectedRows.length!=0){
        selectedRows.forEach(row => {
          if (row.classList.contains('active')) {
            row.classList.remove('active');
          }
        });
      }
      targetRow.classList.add('active');
      let targetRowID = targetRow.getAttribute('data-id');
      this.setState({openCard: !this.state.activetRow, goodID: targetRowID });
    }
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
      <tr key={v.id} data-id={v.id}>
        <td className="img"><img src={v.image} height="60" /></td>
        <td className="name">{v.name}</td>
        <td>{v.counts}</td>
        <td className="price">{v.price + ' BYN'}</td>
      </tr>
    );
    const activeCard = this.props.goods.map(item =>
      <div key={item.id}>
        <div className="goods-card-title">{item.name}</div>
        <div className="goods-card-descr">
          <div className="goods-card-image"><img src={item.image} alt={item.name} /></div>
          <div><b>{'В наличии: '}</b>{item.counts + 'шт.'}</div>
          <div><h1 className="right">{'Цена: ' + item.price + ' BYN'}</h1></div>
          <button className="btn btn-edit right">Редактировать</button>
        </div>
      </div>
    );

    return (
      <div>
        <h1>iShop</h1>
        <div className="goods-table-wr">
        <div className={"goods-table"+((this.state.goodID!=null) ? " open" : "")}>
          <table className="goods-table-list" onClick={this.hightlightRow}>
            <thead>{goodsListHead}</thead>
            <tbody>{goodsList}</tbody>
          </table>
        </div>

        <div className={"goods-card"+((this.state.goodID!=null) ? " show" : "")}>
            {activeCard[this.state.goodID-1]}
        </div>
        </div>
      </div>
    );
  }
}

export default IShopEdited;
