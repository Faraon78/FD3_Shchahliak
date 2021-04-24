var ProductRow = React.createClass({

  displayName: 'ProductRow',
  propTypes: {
    nameProd: React.PropTypes.string,  
    cost: React.PropTypes.number,
    count: React.PropTypes.number,
    rezult: React.PropTypes.array,
  },
  getInitialState: function() {
    return {
      color:'',
      itemselect:this.props.marker,

    }
  },
  
  itemclicked: function(EO){
   console.log('запущена функция itemclicked, выбрана строка' + this.props.products.code ); 
   this.setState({color:'orange'}, this.props.cbMarker(this.props.products.code),this.letmarkered,
   console.log('окончена функция itemclicked, выбрана строка' + this.props.products.code + 'marker= '+ this.state.itemselect + 'color= ' + this.state.color  )); 
  },

  letmarkered: function(){
      console.log('функция letmarkered запущена, marker= '+this.props.marker);
      if(this.state.itemselect==this.props.products.code){
        this.setState({color:'orange'})}
      else {this.setState({color:''})};  
      
  },

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
    
    return  React.DOM.tr({key:this.props.products.code,className:'Product', onClick:this.itemclicked, style:{backgroundColor:this.state.color},},
                React.DOM.td({className:'NameProd'},this.props.products.nameProd),
                React.DOM.td({className:'Cost'},this.props.products.cost),
                React.DOM.td({className:'Count'},this.props.products.count),
                React.DOM.td({className:'Photo'},
                  React.DOM.img({src: this.props.products.photo})
                ),
                React.DOM.td({className:'Control'},
                React.DOM.input({type: 'button', value: 'Удалить', name:this.props.products.code}) //, onClick:this.deleteProduct
                ), 
          )
                 
        }
             
});