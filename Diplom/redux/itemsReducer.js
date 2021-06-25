import { ITEM_ORDER_ADD, ITEM_ORDER_DELETE } from './itemsAC';

const initState={
  // массив выбранных услуг, каждая услуга - хэш с данными
  order: [],
}

function itemsReducer(state=initState,action) {
  switch (action.type) {

    case ITEM_ORDER_ADD: {
      // добавляет услугу в массив
      
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      console.log(action.item.itemId);
      let newState;
      let index = state.order.findindex((item) => item.id==action.item.itemId);
      if(index==-1){     
        newState={...state,
          order:[...state.order.concat(action.item)]       
        };
      }
      
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }
    
    case  ITEM_ORDER_DELETE: {
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let index=state.order.findindex((i) => i.id==itemId);
      let newState={...state,
        order:{...state.order.splice(index,1)
         
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default itemsReducer;
