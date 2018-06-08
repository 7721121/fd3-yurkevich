var Filter = React.createClass({

    displayName: "Filter",

    propTypes:{
        streets: React.PropTypes.array,
        defstreetsCheckbox: React.PropTypes.string
    },

    getInitialState: function() {
        return {
            filterIt:this.props.defstreetsCheckbox
        };
    },

    checkboxChangeState: function() {
        this.props.streets.filter();
        console.log('rrr - ',filterIt);
    },

    render: function () {

        var streetsList = this.props.streets.map(v =>
            React.DOM.li({ key: v.id, className: null},
                React.DOM.span({ className: 'name' }, v.name)
            )
        );


        return React.DOM.div(null,
            React.DOM.h1(null, 'Filter'),
            React.DOM.label({ className: 'street-filter'},
                React.DOM.input({type:'checkbox',onClick:this.checkboxChangeState}),
                'Filter It!',
            ),
            React.DOM.ul({ className: 'street-list'},streetsList)
        );
    }
})