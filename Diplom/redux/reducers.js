import { combineReducers } from 'redux';

import itemsReducer from "./itemsReducer";

let combinedReducer=combineReducers({
    // редьюсер itemsReducer отвечает за раздел state под именем items
    order: itemsReducer, 
    // + другие редьюсеры
});

export default combinedReducer;
