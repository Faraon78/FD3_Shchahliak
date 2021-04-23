var ProductRow = React.createClass({

  displayName: 'ProductRow',
  propTypes: {
    nameProd: React.PropTypes.string,  
    cost: React.PropTypes.number,
    count: React.PropTypes.number,
    rezult: React.PropTypes.array,
  },

  //marker: function(EO){
  //  this.props.product({backgroundcolor:orange});   //// В этой строке выдает ошибку
  //  this.setState({products:productsCode});
  //},

  //deleteProduct: function (EO){
  //  console.log (EO.target.name);
  //  let codeDeleteProduct=EO.target.name;
  //  let custom=confirm('Вы действительно хотите удалить этот товар из списка?');
  //  if (custom==true){
  //    productsCode.splice(this.codeDeleteProduct,1);   // В этой строке выдает ошибку
  //  }
  //  this.setState({products:productsCode});
  //},
  
  render: function() {
      return 
          React.DOM.tr({key:item.code,className:'Product'},// , onClick:this.marker
              React.DOM.td({className:'NameProd'},item.nameProd),
              React.DOM.td(({className:'Cost'},item.cost),
              React.DOM.td({className:'Count'},item.count),
              React.DOM.td({className:'Photo'},
                React.DOM.img({src: item.photo})
                ),
              React.DOM.td({className:'Control'},
                React.DOM.input({type: 'button', value: 'Удалить', name:item.code}) //, onClick:this.deleteProduct
                ), 
          )
          )        
        }
             
});