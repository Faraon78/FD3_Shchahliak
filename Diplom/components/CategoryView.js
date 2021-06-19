import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import SellerRow from './SellerRow';
import CategoryPage from './CategoryPage';

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
        sellersViewMode:0,     //0 - вид общего списка, 1 - карточка продавца         
        }
      
    choiceSellerId =(id) => {
        this.setState({sellersViewMode:1, choiceSellerId:id});
        
    }

    render() {
        
        console.log(this.props.selectedCategoryId, this.props.pageNum);
        var categoryName=category[this.props.selectedCategoryId].name;
        //console.log(categoryName);

        var categoryLength=this.state.sellers.length;
        var pages=Math.ceil(categoryLength/10);

        console.log(categoryLength, pages);

        var pagesCount=[];
        for(let p=1; p<=pages;p++){
            
            var count=<NavLink to={`/category-${this.props.selectedCategoryId}-${p}`}
                         className="pages"  activeClassName="ActivePageLink"  key={p}>   
                <li value={p}   id={p}>  {p}  </li>
                </NavLink>;
            console.log(p);
            pagesCount.push(count)
            
        };
        console.log(pagesCount);
        console.log(this.state.pageNum);

        var itemPageStart=(this.state.pageNum-1)*10;
        var itemPageEnd=(this.state.pageNum*10);

        console.log(itemPageStart, itemPageEnd);

        var itemSeller=this.state.sellers.slice(itemPageStart,itemPageEnd);
        //console.log(itemSeller);
        
        var itemSellerPage=itemSeller.map(v =>
            
            <SellerRow seller={v} key={v.id} id={v.id} name={v.name} info1={v.info1} info2={v.info2} 
            price={v.price} long={v.long} pict={v.pict} category={v.category} cbChoiceSellerId={this.choiceSellerId}
            />
            );  
                            
        return (
            <div>
                <h1>{categoryName}</h1>
                
                {(this.state.sellersViewMode==0) &&
                <div>
                    <ul className="PagesCount">стр. {  pagesCount  }</ul>
                    
                    <table className='Table'>         
                        <tbody className='TableRow'>{itemSellerPage}</tbody>      
                    </table>
                
                </div>} 
                {(this.state.sellersViewMode==1) && <SellerCard className="SellerCard" item={this.state.sellers.id}/>}
                  
            </div>
            
        )

}

}

export default CategoryView;
//<Switch>  
//<Route path="/" exact component={StartView}/> 
//<Route path="/Category-:selectedCategoryId" exact component={CategoryPage} render={ props => <div>zzz</div> }/>

//</Switch>  onClick={this.selectPages}