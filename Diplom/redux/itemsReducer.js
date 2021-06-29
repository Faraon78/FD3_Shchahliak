import { array, object } from 'prop-types';
import { ITEM_ORDER_ADD, ITEM_ORDER_DELETE } from './itemsAC';

const initState={
  // массив выбранных услуг, каждая услуга - хэш с данными
  order: [],
}

function itemsReducer(state=initState,action) {
  switch (action.type) {

    case ITEM_ORDER_ADD: {
      // добавляет услугу в массив
      
      //console.log('action:',action);
      //console.log('state до обработки редьюсером:',state);
      //console.log(state.order, state.order.length, action.item.itemId);
      //console.log(state.order instanceof Array);
      let newState;
      let repeat = state.order.find(item => item.itemId == action.item.itemId);
      //console.log("repeat:"+ repeat);
      if(!repeat){     
        newState={...state,
          order:[...state.order,action.item]       
        };
              
      //console.log('state после обработки редьюсером:',newState);
      //console.log(newState.order instanceof Array, newState.order.length, newState.order);
      return newState;
      }
      else return state;
    }
    
    case  ITEM_ORDER_DELETE: {
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let index=state.order.findIndex((item) => item.itemId ==action.itemId );
      console.log(action.itemId,index);
      let newState={...state,
        order:[...state.order.slice(0,index),...state.order.slice(index+1) ]
         
        
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default itemsReducer;
