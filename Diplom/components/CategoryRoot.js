import React from 'react';

import CategoryView from './CategoryView';
import { withDataLoad } from './withDataLoad';

class CategoryRoot extends React.Component {
  
    
    fetchConfig={
      URL: "https://fe.it-academy.by/AjaxStringStorage2.php",
      method: 'post',
      data: {f: "READ", n: "Shchahliak_D3_category3"}
  };
  
  CategoryViewWithData=withDataLoad(this.fetchConfig,"sellers")(CategoryView);

  render() {

    let CategoryViewWithData=this.CategoryViewWithData;
    return <CategoryViewWithData /> ;

  }

}

export default CategoryRoot;