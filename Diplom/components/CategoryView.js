import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import SellerRow from './SellerRow';
import SellerCard from './SellerCard';

import './CategoryView.css';
const category= require('../Catalog/category.json');
class CategoryView extends React.Component {
    static propTypes = {
        sellers: PropTypes.array,
        selectedPagesNum:PropTypes.number
      };
    state = {
        sellers:this.props.sellers,        
        pageNum:this.props.pageNum,
        choiceSellerId:null,
              
        }
      
    choiceSellerId =(id) => {
        console.log("запустили callBack ")
        this.setState({choiceSellerId:id});
        
    }

    render() {
        //console.log("Запустили рендер CategoryView");
        
        //console.log(this.props.itemId, this.props.pageNum);
        var categoryName=category[this.props.selectedCategoryId].name;

        if(this.props.pageNum){
            var categoryLength=this.state.sellers.length;
            var pages=Math.ceil(categoryLength/10);
        
            var pagesCount=[];
            for(let p=1; p<=pages;p++){
            
                var count=<NavLink to={`/category-${this.props.selectedCategoryId}-page${p}`}
                         className="pages"  activeClassName="ActivePageLink"  key={p}>   
                    <li value={p}   id={p}>  {p}  </li>
                    </NavLink>;
            
                pagesCount.push(count)
            
            }   ;
        
            var itemPageStart=(this.props.pageNum-1)*10;
            var itemPageEnd=(this.props.pageNum*10);

           // console.log(itemPageStart, itemPageEnd);

            var itemSeller=this.state.sellers.slice(itemPageStart,itemPageEnd);
               
            var itemSellerPage=itemSeller.map(v =>
            
            <SellerRow seller={v} key={v.id} id={v.id} name={v.name} info1={v.info1} info2={v.info2} selectedCategoryId={this.props.selectedCategoryId} 
            price={parseInt(v.price)} long={v.long} pict={v.pict} category={v.category} cbChoiceSellerId={this.choiceSellerId}
            />
            ) 
        }    
        if(this.props.itemId){
            var item=this.state.sellers.find((i) => i.id==this.props.itemId);
            //console.log(item)  
            //console.log(this.props.itemId);
        }
                            
        return (
            <div>
                <h1>{categoryName}</h1>
                
                {(this.props.pageNum) &&
                <div>
                    <ul className="PagesCount">стр. {  pagesCount  }</ul>
                    
                    <table className='Table'>         
                        <tbody className='TableRow'>{itemSellerPage}</tbody>      
                    </table>
                
                </div>} 
                {(this.props.itemId) && <SellerCard item={item} key={item.id} id={item.id} name={item.name} info1={item.info1} info2={item.info2}
                price={parseInt(item.price)} long={item.long} pict={item.pict} adrs={item.adrs} url={item.url}/>}
                  
            </div>
            
        )

}

}

export default CategoryView;
