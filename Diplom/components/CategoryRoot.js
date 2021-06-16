import React from 'react';

import CategoryView from './CategoryView';
import { withDataLoad } from './withDataLoad';

let sp = new URLSearchParams();
    let stringName="";
      //if (this.state.selectedCategory==3){
      stringName="Shchahliak_category4"
    //}
    sp.append("f", "READ", );
    sp.append("n", stringName);
  class CategoryRoot extends React.PureComponent {
   // getInitialState(){
    
   // }
  state = {
    //sellers:this.props.sellers,
    //selectedCategoryId:this.props.selectedCategoryId,
    //category:this.props.category
  }   
  fetchConfig={    
    URL: "https://fe.it-academy.by/AjaxStringStorage2.php",
    method: 'post',    
    body: sp,
  };

  CategoryViewWithData=withDataLoad(this.fetchConfig,"sellers")(CategoryView);

  render() {
    console.log(this.props.selectedCategoryId, this.props.selectedCategoryName);

    
    let CategoryViewWithData=this.CategoryViewWithData;
    return <CategoryViewWithData selectedCategoryId={this.props.selectedCategoryId} selectedCategoryName={this.props.selectedCategoryName}/> ;

  }

}

export default CategoryRoot;