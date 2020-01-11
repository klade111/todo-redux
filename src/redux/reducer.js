import { ADD_ITEM, DELETE_ITEM,EDIT_TODO } from '../redux/action/actionType'
const initstate = { items: [{ id: 1, title: 'task1'}, { id: 2, title: 'task2'}] }


const Reducer = (state = initstate, action) => {
    console.log('action', action)
    switch (action.type) {
        case ADD_ITEM: 
            return { ...state, items: [...state.items, action.payload] };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(e => e.id !== action.payload)};
         case EDIT_TODO:
             return{...state,
                items: state.items.map(e =>
                  e.id === action.id
                    ? { ...e, title: action.editeTitle }
                    : e
                )} 
                     
        default: return state

    }
}
export default Reducer
