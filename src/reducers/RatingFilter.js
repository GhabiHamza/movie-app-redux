


const ratingFilterReducer =(state=1,action)=>{
    if (action.type==='SET_RATING'){
        return action.minRating
    }
    return state
    
}
export default ratingFilterReducer;