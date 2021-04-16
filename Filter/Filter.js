var FilterWord = React.createClass({

  displayName: 'FilterWord',

  propTypes: {
    filterMode: React.PropTypes.string.isRequired,  //start - изначальный список слов, filterString - отфильтрованный список, sort - отсортированный список
  },  
  getInitialState: function() {
    return{
      filterMode:start,
      sortLines:false
    }
  }
    
    filterLines: function(){
      let lines=this.props.words.slice(); // делаем плоскую копию всех слов, т.к. возможно будем сортировать массив
      if ( this.state.filterMode=="filterString")
        lines=lines.filter( line => line.indexOf(this.state.filterString)!=-1 );
      if ( this.state.filterMode=='sort')
        lines.sort();
      this.setState( { lines:lines } );
    },

    render: function() {
    return React.DOM.div( 
      React.DOM.div({className:'FilterString'}, 
        React.DOM.input( {type:'checkbox'}), 
        React.DOM.input( {type:'text'}, onChange:this.filterLines),
        React.DOM.input({type:'button',defaultValue:'сброс'} ),      
      ),
      React.DOM.select({className:'FilerWord'},
        React.DOM.options(null, lines)),
    )
  }

});