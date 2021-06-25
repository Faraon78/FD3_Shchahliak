const ITEM_ORDER_ADD='ITEM_ORDER_ADD';
const ITEM_ORDER_DELETE='ITEM_ORDER_DELETE';

const itemOrder_add=function(itemId, itemName, itemPrice, itemPict) {
  return {
    type: ITEM_ORDER_ADD,
    item:{itemId:itemId, itemName:itemName, itemPrice:itemName, itemPict:itemPict}   
  };
}

const itemOrder_delete=function(itemId) {
  return {
    type: ITEM_ORDER_DELETE,
    itemId:itemId,
  };
}

export {
  itemOrder_add,ITEM_ORDER_ADD,
  itemOrder_delete,ITEM_ORDER_DELETE,
}
