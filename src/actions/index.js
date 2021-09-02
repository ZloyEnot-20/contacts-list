export const deleteUser = (data)=>{
    return{
        type: 'DELETE_USER',
        payload: data
    }
}
export const addUser = (data)=>{
    return{
        type: 'ADD_USER',
        payload: data
    }
}
export const editUser = (data)=>{
    return{
        type: 'EDIT_USER',
        payload: data
    }
}
export const searchByName = (data)=>{
    return{
        type: 'SEARCH_BY_NAME',
        payload: data
    }
}