var IShop = React.createClass({

    displayName: "IShop",

    render: function () {
        
        var goodsListHead = this.props.goodsHead.map(h =>
            React.DOM.tr({ key: h.nameHead, className: null },
                React.DOM.th(null, h.imageHead),
                React.DOM.th(null, h.nameHead),
                React.DOM.th(null, h.countsHead),
                React.DOM.th(null, h.priceHead),
            )
        );      

        var goodsList = this.props.goods.map(v =>
            React.DOM.tr({ key: v.id, className: null},
                React.DOM.td({className: 'img'},
                    React.DOM.img({ className: null, src: v.image, height: 60 }),
                ),
                React.DOM.td({ className: 'name' }, v.name),
                React.DOM.td(null, v.counts + ' шт.'),
                React.DOM.td({ className: 'price' }, v.price + ' BYN'),
            )
        );


        return React.DOM.div(null,
            React.DOM.h1(null, 'iStore'),
            React.DOM.table({ className: 'good-list' },
                React.DOM.thead(null,goodsListHead),
                React.DOM.tbody(null,goodsList),
            )
        );
    }
})