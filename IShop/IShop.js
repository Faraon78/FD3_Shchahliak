var ProductTable = React.createClass({

  displayName: 'ProductTable',

  getDefaultProps: function() {
    return { question: "Вопрос ни о чём" }
  },

  render: function() {
    var productsCode=[];
    
    for ( var a=0; a<this.props.products.length; a++ ) {
      var product=this.props.products[a];
      var productCode=        
        React.DOM.tbody({key:product.code,className:'Product'},
          React.DOM.td({className:'NameProd'},product.nameProd),
          React.DOM.td({className:'Cost'},product.cost),
          React.DOM.td({className:'Count'},product.count),
          React.DOM.td({className:'Photo'},
            //React.DOM.img(null, style.src=product.photo)
            ),
          
        );
      productsCode.push(productCode);
    }
    return React.DOM.div( {className:'ProductTable'}, 
      React.DOM.h1( {className:'Header'}, 'Список товаров'), 
      React.DOM.table( {className:'Table'}, productsCode ),
      
    );
  },

});