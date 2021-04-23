var ShopTable = React.createClass({

  displayName: 'ShopTable',

  
  render: function() {
    var productsCode=[];
    
    for ( var a=0; a<this.props.products.length; a++ ) {
      var product=this.props.products[a];
      var productCode=
        React.createElement(ProductRow, {item:product, key:product.code});       
        console.log(productCode);  
      productsCode.push(productCode);
    }
      console.log(productsCode);

    return React.DOM.div( {className:'ShopTable'}, 
      React.DOM.h1( {className:'Header'}, this.props.shop), 
      React.DOM.table({className:'Table'},
        React.DOM.tbody({className:'TableHead'}, 
          React.DOM.tr(null,
            React.DOM.th({className:'NameProd'}, this.props.tableHead.nameProd),
            React.DOM.th({className:'Cost'}, this.props.tableHead.cost),
            React.DOM.th({className:'Count'}, this.props.tableHead.count),
            React.DOM.th({className:'Photo'}, this.props.tableHead.photo),
            React.DOM.th({className:'Control'}, this.props.tableHead.control),
          ) 
        ),        
        React.DOM.tbody({className:'TableRow'}, productsCode ),
      ) 
    )
  }

});