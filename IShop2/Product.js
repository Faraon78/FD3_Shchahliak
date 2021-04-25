var ProductRow = React.createClass({

  displayName: 'ProductRow',
  propTypes: {
    nameProd: React.PropTypes.string,  
    cost: React.PropTypes.number,
    count: React.PropTypes.number,
    rezult: React.PropTypes.array,
  },
    
  itemclicked: function(EO){   
   this.props.cbMarker(this.props.products.code)   
  },
 
  deleteProduct: function (EO){
    let custom=confirm('Вы действительно хотите удалить этот товар из списка?');
    if (custom==true){
      this.props.cbDelete(this.props.products.code)
    }
  },
  
  render: function() {
    
    return  React.DOM.tr({key:this.props.products.code,className:'Product', onClick:this.itemclicked, style:{backgroundColor:this.props.color}, },
                React.DOM.td({className:'NameProd'},this.props.products.nameProd),
                React.DOM.td({className:'Cost'},this.props.products.cost),
                React.DOM.td({className:'Count'},this.props.products.count),
                React.DOM.td({className:'Photo'},
                  React.DOM.img({src: this.props.products.photo})
                ),
                React.DOM.td({className:'Control'},
                React.DOM.input({type: 'button', value: 'Удалить', name:this.props.products.code, onClick:this.deleteProduct}) 
                ), 
          )
                 
        }
             
});