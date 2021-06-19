import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import SellerRow from './SellerRow';

//import './CategoryView.css';
const category= require('../Catalog/category.json');
class CategoryPage extends React.PureComponent {
    static propTypes = {
        sellers: PropTypes.array,
        selectedPagesNum:PropTypes.number
      };
    state = {
        sellers:this.props.sellers,
        selectedCategoryId:this.props.selectedCategoryId,
        selectedPagesNum:1,
        choiceSellerId:null,
        sellersViewMode:0,     //0 - вид общего списка, 1 - карточка продавца         
        }
    selectPages= (value) => {
        console.log("выбрана страница "+ value);
        this.setState({selectedPagesNum:value}, console.log(this.state.selectedPagesNum))
    }    
    choiceSellerId =(id) => {
        this.setState({sellersViewMode:1, choiceSellerId:id});
        
    }

    render() {
        console.log(this.props.selectedCategoryId);
        var categoryName=category[this.props.selectedCategoryId].name;
        console.log(categoryName);

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

export default CategoryPage;
//<Switch>  
//        <Route path="/" exact component={StartView}/> 
////        <Route path="/Category-:selectedCategoryId" exact component={CategoryRoot} />
        
//      </Switch>   