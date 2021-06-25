import React from 'react';
import { Route } from 'react-router-dom';

import CategoryView from './CategoryView';
import { withDataLoad } from './withDataLoad';

    class CategoryRoot extends React.PureComponent {
    
      

  
  CategoryViewWithData=withDataLoad(this.props.match.params.selectedCategoryId, "sellers")(CategoryView);
  
  render() {
    console.log("Запустили рендер CategoryRoot");
    console.log("this.props.match.params.pageNum= "+this.props.match.params.pageNum, "this.props.match.params.itemId=" +this.props.match.params.itemId);
    
    let categoryId=parseInt(this.props.match.params.selectedCategoryId);
    
    let pageNum=parseInt(this.props.match.params.pageNum);
    if (!pageNum){
      pageNum=null
    }
    let itemId=parseInt(this.props.match.params.itemId);
    if (!itemId){
      itemId=null
    }
    console.log("pageNum= " +pageNum, " itemId= " + itemId);
    let CategoryViewWithData=this.CategoryViewWithData;
   
    return (
      
    <div>
      <CategoryViewWithData selectedCategoryId={categoryId} 
      pageNum={pageNum} itemId={itemId}/> ;
        
    </div>
    )
  }

}

export default CategoryRoot;