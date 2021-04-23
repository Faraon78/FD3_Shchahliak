var FilterWord = React.createClass({

  displayName: 'FilterWord',

  propTypes: {
    words: React.PropTypes.array.isRequired,  
    sorted: React.PropTypes.bool,
    filtered: React.PropTypes.string,
    rezult: React.PropTypes.array,
  },  

  getInitialState: function() {
    return{
      sorted:false,
      filtered:"",
      rezult:this.props.words,     
    }
  }, 
   
  edittext : function(EO){    
    this.setState( { filtered:EO.target.value}, this.processlines);
  },

  clear: function(){
      this.setState({filtered:'', sorted:false}, this.processlines);
      console.log(this.state.sorted, this.state.filtered )
  },

  processlines: function(){
    console.log("запустился Processlines, sorted:"+this.state.sorted, "filtered:"+this.state.filtered);
    let rez=this.props.words.slice(); 
      if ( this.state.filtered){
         rez=rez.filter( line => line.indexOf(this.state.filtered)!=-1 );
      }
      if ( this.state.sorted){
        rez=rez.sort()
      };
      console.log("rez:"+ rez);  
    this.setState( { rezult:rez } ) 
  },
  checkboxclicked: function(EO){
    
    this.setState({sorted:EO.target.checked}, this.processlines)
    
  },

    render: function() {
     
      var screenrez=[];   
      
      for ( var a=0; a<this.state.rezult.length; a++ ) {
        var screenline=React.DOM.option({key:a}, this.state.rezult[a]);
        screenrez.push(screenline);
      }
      

    return React.DOM.div( null,
        React.DOM.div({className:'FilterBlock'},
      
        React.DOM.input( {type:'checkbox', onClick:this.checkboxclicked, checked:this.state.sorted}),  
        React.DOM.input( {type:'text', className:'FilterString', onChange:this.edittext, value:this.state.filtered}),
        React.DOM.input({type:'button',className:'Button', value:'сброс', onClick:this.clear} ),      
        ),
        React.DOM.div( null, 
        React.DOM.select({className:'FilterWord',size:7}, screenrez),//
        ),  
    )
    }
});