var ProductTable = React.createClass({

  displayName: 'ProductTable',

  marker: function(EO){
    this.props.product({backgroundcolor:orange});   //// В этой строке выдает ошибку
    this.setState({products:productsCode});
  },

  deleteProduct: function (EO){
    console.log (EO.target.name);
    let codeDeleteProduct=EO.target.name;
    let custom=confirm('Вы действительно хотите удалить этот товар из списка?');
    if (custom==true){
      productsCode.splice(this.codeDeleteProduct,1);   // В этой строке выдает ошибку
    }
    this.setState({products:productsCode});
  },
  
  render: function() {
    var productsCode=[];
    
    for ( var a=0; a<this.props.products.length; a++ ) {
      var product=this.props.products[a];
      var productCode=        
        React.DOM.tr({key:product.code,className:'Product', onClick:this.marker},
          React.DOM.td({className:'NameProd'},product.nameProd),
          React.DOM.td({className:'Cost'},product.cost),
          React.DOM.td({className:'Count'},product.count),
          React.DOM.td({className:'Photo'},
            React.DOM.img({src: product.photo})
            ),
          React.DOM.td({className:'Control'},
          React.DOM.input({type: 'button', value: 'Удалить', name:product.code, onClick:this.deleteProduct})
            ),  
          );
      productsCode.push(productCode);
    
  }
    return React.DOM.table({className:'Table'},
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
    }         
});