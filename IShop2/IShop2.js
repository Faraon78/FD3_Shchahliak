var ShopTable = React.createClass({

  displayName: 'ShopTable',
   
  getInitialState: function() {
    return {
      selectedItemCode:0,
    }
  },
  itemMarkered: function(code){
    console.log('показатель selectedItemCode до изменения равен= ' + this.state.selectedItemCode +' функция itemMarkered запущена');
    this.setState({selectedItemCode:code}, console.log('выбрана строка: ' + this.state.selectedItemCode));
    
  },
  render: function() {
    var productsCode=[];
    console.log('показатель selectedItemCode равен=' + this.state.selectedItemCode);
    for ( var a=0; a<this.props.products.length; a++ ) {
      var product=this.props.products[a];
      var productCode=
        React.createElement(ProductRow, {products:this.props.products[a], key:this.props.products[a].code, cbMarker:this.itemMarkered, marker:this.state.selectedItemCode});       
      productsCode.push(productCode);
    }
      
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