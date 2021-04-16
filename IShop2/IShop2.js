var ShopTable = React.createClass({

  displayName: 'ShopTable',

  
  render: function() {
        
    return React.DOM.div( {className:'ShopTable'}, 
      React.DOM.h1( {className:'Header'}, this.props.shop), 
      React.createElement(ProductTable, {products:productArr, tableHead:productHead},
           
      )
    );
  },

});