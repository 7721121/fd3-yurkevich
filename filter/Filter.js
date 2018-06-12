var Filter = React.createClass({

    displayName: "Filter",

    propTypes:{
        streets: React.PropTypes.array,
        defChecked: React.PropTypes.bool
    },

    getInitialState: function() {
        return {
            filterIt: false,
            sorted: this.props.streets,
           // checked: false
        };
    },

/*    checkboxChangeState: function(item) {
        console.log('checked - '+item);
        this.setState( {checked:item} );
    },*/

    handleChange: function(event) {
        var checked = event.target.checked;
        console.log('checked ',checked);
        if (checked === true){
            this.setState({filterIt: true});
           // console.log('filter ',this.state.filterIt);
            this.state.sorted = this.props.streets.sort();

            console.log('filter ',this.state.filterIt);
            console.log('filter ',this.state.sorted);
        }

    },

    render: function () {
/*        var streetsList = this.props.streets.map(v =>
            React.DOM.li({ key: v.id, className: null},
                React.DOM.span({ className: 'name' }, v.name)
            )
    );*/
        var streetsList = this.props.streets.map(v =>
            React.DOM.li({ key: v.id, className: null},
                React.DOM.span({ className: 'name' }, v.name)
            )
    );



        return React.DOM.div(null,
            React.DOM.h1(null, 'Filter'),
            React.DOM.label({ className: 'street-filter'},
                React.DOM.input({type:'checkbox',onClick:this.handleChange}),
                'Filter It!',
            ),
            React.DOM.ul({ className: 'street-list'},streetsList)
        );
    }
})