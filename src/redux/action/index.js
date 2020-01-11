import { ADD_ITEM, DELETE_ITEM,EDIT_TODO} from './actionType'

export const addItem = payload=>{
    return { type:ADD_ITEM, payload}
}
export const deleteItem = payload=>{
    return { type:DELETE_ITEM, payload}
}
export const editItem = (id,editeTitle)=>{
    return{type:EDIT_TODO, id,editeTitle}
}