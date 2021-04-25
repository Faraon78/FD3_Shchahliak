var ShopTable = React.createClass({

  displayName: 'ShopTable',
  propTypes: {
    selectedItemCode: React.PropTypes.number,
    
  },
   
  getInitialState: function() {
    return {
      selectedItemCode:null,
      items:this.props.products,
    }
  },
  itemMarkered: function(code){
    this.setState({selectedItemCode:code});
  },  

  itemDelete: function(code){
    var filteredItems=this.state.items.filter(el => el.code!=code);
    this.setState({items:filteredItems});
    
  },
  render: function(){
    var productsCode=[];
    var productCode;
                
    for ( var a=0; a<this.state.items.length; a++ ){ 
      //var product=this.state.items[a];
        if (this.state.items[a].code==this.state.selectedItemCode){ 
            productCode=React.createElement(ProductRow, 
            {products:this.state.items[a], key:this.state.items[a].code, cbMarker:this.itemMarkered, cbDelete:this.itemDelete,
            color:'orange'}), 
            productsCode.push(productCode);
            } 
         
          else {productCode=React.createElement(ProductRow, {products:this.state.items[a], key:this.state.items[a].code, 
              cbMarker:this.itemMarkered, cbDelete:this.itemDelete});  
          productsCode.push(productCode);
          }
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