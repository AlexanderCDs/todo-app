/** 
 * @author: alexandercddev
 * @description: 
 * @date: 06/Octubre/2021
**/ 

const toDoReducer = ( state = [], action) => {
    switch (action?.type) {
        case 'add': 
            return [ ...state, action.payload]; 
        case 'delete': 
            return state.filter( item => item.id !== action.payload);
        case 'toggle':
            return state.map( item => (
                ( item.id === action.payload )
                ? {...item, done: !item.done}
                : item
            ));
        case 'toggle-old':
            return state.map( item => {
                if(item.id === action.payload) {
                    return {
                        ...item,
                        done: !item.done
                    }
                } else {
                return item;

                }
            });
        default:
            return  state;
    }
}

export {
    toDoReducer
}
