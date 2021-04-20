var FilterWord = React.createClass({

  displayName: 'FilterWord',

  propTypes: {
    words: React.PropTypes.array.isRequired,  
    sorted: React.PropTypes.bool,
    filtered: React.PropTypes.string,
    lines: React.PropTypes.array,
  },  

  getInitialState: function() {
    return{
      sorted:false,
      filtered:"",
      lines:[],
    }
  },

  checkboxclicked: function(EO){
    this.setState({sorted:EO.target.checked}, processlines)
  },
   
  edittext : function(EO){
    this.setState( { filtered:EO.target.value} );
  },

  processlines: function(){
    let res=this.props.words.slice(); 
      if ( this.state.filtered){
         res=res.filter( line => line.indexOf(this.state.filtered)!=-1 );
      }
      if ( this.state.sorted=="true"){
        res.sort();
      }
    this.setState( { lines:this.res} ) 
  },

    render: function() {
    return React.DOM.div( 
      React.DOM.div({className:'FilterString'}, 
        React.DOM.input( {type:'checkbox', onclick:this.checkboxclicked}), 
        React.DOM.input( {type:'text', onchange:this.edittext}),
        React.DOM.input({type:'button',defaultValue:'сброс'} ),      
      ),
      React.DOM.select({className:'FilerWord'}, 
        React.DOM.option({lines:this.state.lines}),
      ), 
    )
    }
});