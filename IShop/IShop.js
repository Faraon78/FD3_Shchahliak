var ProductTable = React.createClass({

  displayName: 'ProductTable',

  
  render: function() {
    
    

    var productsCode=[];
    
    for ( var a=0; a<this.props.products.length; a++ ) {
      var product=this.props.products[a];
      var productCode=        
        React.DOM.tr({key:product.code,className:'Product'},
          React.DOM.td({className:'NameProd'},product.nameProd),
          React.DOM.td({className:'Cost'},product.cost),
          React.DOM.td({className:'Count'},product.count),
          React.DOM.td({className:'Photo'},
            React.DOM.img({src: product.photo})
            ),          
        );
      productsCode.push(productCode);
    }
    return React.DOM.div( {className:'ProductTable'}, 
      React.DOM.h1( {className:'Header'}, this.props.shop), 
      React.DOM.table({className:'Table'},
        React.DOM.tbody({className:'TableHead'}, 
          React.DOM.tr(null,
            React.DOM.th({className:'NameProd'}, this.props.tableHead.nameProd),
            React.DOM.th({className:'Cost'}, this.props.tableHead.cost),
            React.DOM.th({className:'Count'}, this.props.tableHead.count),
            React.DOM.th({className:'Photo'}, this.props.tableHead.photo),
          ) 
        ),
        React.DOM.tbody({className:'TableRow'}, productsCode ),
      
      )
    );
  },

});