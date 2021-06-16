import React from 'react';
import isoFetch from 'isomorphic-fetch';

let withDataLoad = (fetchConfig,propName) => Component => {

    class ComponentWithDataLoad extends React.PureComponent {

        componentDidMount() {
          this.loadData();
        }
      
        state = {
          dataReady: false, // готовы ли данные
          combinedProps: null, // исходные пропсы, переданные HOC-у, плюс пропс propName с загруженными данными
        };
      
        fetchError = (errorMessage) => {
          console.error('error');
        };
      
        fetchSuccess = (loadedData) => {
          //console.log(loadedData);
          this.setState({
            dataReady:true,
            combinedProps:{...this.props,[propName]:loadedData},
          });
        };
      
        loadData = () => {
      
          isoFetch(fetchConfig.URL, fetchConfig)
              .then( response => {
                  if (!response.ok) {
                      throw new Error("fetch error " + response.status);
                  }
                  else{
                    return response.json();
                    
                  }
              })
              .then( data => {
                  this.fetchSuccess(JSON.parse(data.result));
                  
              })
              .catch( error => {
                  this.fetchError(error.message);
              })
          ;
      
        };
      
        render() {
          console.log(this.state.combinedProps, this.state.dataReady);
          if ( !this.state.dataReady )
            return <div>загрузка данных...</div>;
      
          return <Component {...this.state.combinedProps} /> ;
          
        }
      
      }

      return ComponentWithDataLoad;
      

}

export { withDataLoad };
