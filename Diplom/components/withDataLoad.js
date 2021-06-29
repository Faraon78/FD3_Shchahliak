import React from 'react';
import isoFetch from 'isomorphic-fetch';

let withDataLoad = (categoryId, propName) => Component => {

    class ComponentWithDataLoad extends React.Component {
      componentDidUpdate(){
        this.updateProps(); 
      }
        
        componentDidMount() {
               
          this.loadData();
         
        }
      
        state = {
          dataReady: false, // готовы ли данные
          combinedProps: null, // исходные пропсы, переданные HOC-у, плюс пропс propName с загруженными данными
          selectedCategoryId:categoryId 
        };        
      
        fetchError = (errorMessage) => {
          console.error('error');
        };
      
        fetchSuccess = (loadedData) => {
          
          this.setState({
            dataReady:true,
            combinedProps:{...this.props,[propName]:loadedData},
            loadedData:loadedData            
          }, 
         );
        };
        updateProps =() =>{
         // console.log("Запустили updateProps");
          if(this.state.selectedCategoryId != this.props.selectedCategoryId ){
            this.setState({
              dataReady:false,
              combinedProps:null,
              selectedCategoryId:this.props.selectedCategoryId  
            }, 
            this.loadData()
            );
            
            
          }
        }


        loadData = () => {           //Функция загрузки данных
          //console.log("запустили функцию loadData");
          
          let sp = new URLSearchParams();
          sp.append("f", "READ", ); 
          if (this.props.selectedCategoryId==1){
          sp.append("n", "Shchahliak_category1");
          }
          if (this.props.selectedCategoryId==2){
          sp.append("n", "Shchahliak_category2");
       }
        if (this.props.selectedCategoryId==3){
        sp.append("n", "Shchahliak_category3");
        }
        if (this.props.selectedCategoryId==4){
        sp.append("n", "Shchahliak_category_4");
        }
        if (this.props.selectedCategoryId==5){
        sp.append("n", "Shchahliak_category_5");
        }
      let fetchConfig={     
        URL: "https://fe.it-academy.by/AjaxStringStorage2.php",
        method: 'post',    
        body: sp,
      
        }
          isoFetch("https://fe.it-academy.by/AjaxStringStorage2.php", fetchConfig)
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
          //console.log("Запустился рендер withDataLoad");
          //console.log(this.state.selectedCategoryId,this.props.selectedCategoryId );
          
         
          if ( !this.state.dataReady )
            return <div>загрузка данных...</div>;
           
          return <Component {...this.state.combinedProps} pageNum={this.props.pageNum} itemId={this.props.itemId}/> ;
          
        }
          
      }

      return ComponentWithDataLoad;
      

}

export { withDataLoad };
