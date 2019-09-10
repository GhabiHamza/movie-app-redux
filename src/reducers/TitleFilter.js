
const titleFilterReducer=(state='',action)=>{
    if (action.type==='SET_TITLE_FILTER'){
        return action.titleFilter
    }
    return state

}
export default titleFilterReducer;