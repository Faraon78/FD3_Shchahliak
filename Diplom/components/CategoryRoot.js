import React from 'react';

import CategoryView from './CategoryView';
import { withDataLoad } from './withDataLoad';

class CategoryRoot extends React.PureComponent {

  fetchConfig={
    URL: "https://fe.it-academy.by/AjaxStringStorage2.php",
    method: 'post',
    headers: {
        //"Accept": "application/json",
        "Shchahliak_D3_category3":"category3",
     }
    };
  //function restoreInfo() {
   // $.ajax(
    //    {
    //        url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
    //        data : { f : 'READ', n : stringName },
    //        success : readReady, error : errorHandler
    //    }
   //);

  // HOC возвращает каждый раз НОВЫЙ, обёрнутый компонент
  // поэтому оборачивать в HOC лучше не внутри render, чтобы не рендерить каждый раз НОВЫЙ компонент
  CategoryViewWithData=withDataLoad(this.fetchConfig,"sellers")(CategoryView);

  render() {

    let CategoryViewWithData=this.CategoryViewWithData;
    return <CategoryViewWithData /> ;

  }

}

export default CategoryRoot;