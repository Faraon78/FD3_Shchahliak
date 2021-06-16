import React from 'react';
import PropTypes from 'prop-types';
import SellerRow from './SellerRow';

import './CategoryView.css';

class CategoryView extends React.PureComponent {
    static propTypes = {
        sellers: PropTypes.array,
        selectedPagesNum:PropTypes.number
      };
    state = {
        sellers:this.props.sellers,
        selectedCategoryId:this.props.selectedCategoryId,
        selectedCategoryName:this.props.selectedCategoryName,
        selectedPagesNum:1,
        }
    selectPages= (value) => {
        console.log("выбрана страница "+ value);
        this.setState({selectedPagesNum:value}, console.log(this.state.selectedPagesNum))
    }    

    render() {
        var categoryLength=this.state.sellers.length;
        var pages=Math.ceil(categoryLength/10);
        console.log(categoryLength, pages);
        var pagesCount=[];
        for(let p=1; p<=pages;p++){
            var count=<li value={p} onClick={this.selectPages} key={p} id={p}><a className="pages" >  {p}  </a></li>;
            pagesCount.push(count);
        }
        console.log(pagesCount);
        var itemPageStart=this.state.selectedPagesNum-1;
        var itemPageEnd=(this.state.selectedPagesNum*10)-1;
        console.log(itemPageStart, itemPageEnd);
        var itemSeller=this.state.sellers.slice(itemPageStart,itemPageEnd);
        var itemSellerPage=itemSeller.map(v =>
            //console.log(v)
            <SellerRow seller={v} key={v.id} id={v.id} name={v.name} info1={v.info1} info2={v.info2} 
            price={v.price} long={v.long} pict={v.pict} category={v.category}
            />
            );  
            //color={
            //  (v.id==this.state.selectedItemId) && ('#f5ab16')}       
                    
            //  cbMarker={(!this.state.disRow)&& this.itemMarkered} // коллбэки работают только если не идет редактирование строки
            
             
                
        return (
            <div>
                <h1>{this.props.selectedCategoryName}</h1>
                <ul className="PagesCount">стр. {  pagesCount  }</ul>
                <table className='Table'>         
                    <tbody className='TableRow'>{itemSellerPage}</tbody>      
                </table> 
            </div>
            
        )

}

}

export default CategoryView;