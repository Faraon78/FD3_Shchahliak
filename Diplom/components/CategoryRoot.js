import React from 'react';
import { Route } from 'react-router-dom';

import CategoryView from './CategoryView';
import { withDataLoad } from './withDataLoad';

let sp3 = new URLSearchParams();
    sp3.append("f", "READ", );
    sp3.append("n", "Shchahliak_category3");
  class CategoryRoot extends React.Component {
    state={
      pageNum:parseInt(this.props.match.params.pageNum)
    }
  
    fetchConfig={     
      URL: "https://fe.it-academy.by/AjaxStringStorage2.php",
      method: 'post',    
      body: sp3,
    
  };
  
  CategoryViewWithData=withDataLoad(this.fetchConfig,"sellers")(CategoryView);

  render() {
    console.log(this.props.match.params);
    let categoryId=parseInt(this.props.match.params.selectedCategoryId);
    
    let pageNum=parseInt(this.props.match.params.pageNum);

    console.log(categoryId, pageNum);

    
    let CategoryViewWithData=this.CategoryViewWithData;
    return (
      
    <div>
      <CategoryViewWithData selectedCategoryId={categoryId} pageNum={this.state.pageNum}/> ;
        
    </div>
    )
  }

}

export default CategoryRoot;