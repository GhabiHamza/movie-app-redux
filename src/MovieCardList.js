import React from 'react';
import MovieCard from './MovieCard';
import Logo6 from './image-plus.png';
import {connect} from 'react-redux';





const MovieCardList = ({movies,onAddMovie,rating, value})=>{
    return(
    
        <div className='card-list'>
            <div className="row">
       
        {movies.filter( el=> el.rating >= rating && el.title.toLowerCase().includes(value.toLowerCase().trim()))
        
            .map((el,index)=><MovieCard key={index} Y={el} id={index}/>)}
        </div>
        
        

        <div >
        
        <img src={Logo6} className='prompt-button' onClick={onAddMovie}
                
            type="button" alt="image-prompt"/>
      </div>
      </div>)
        
    
}
const mapStateToProps= state =>{
    return {
        movies:state.movieListReducer,
        rating: state.ratingFilterReducer.minRating,
        value:state.titleFilterReducer
    }
}
 const mapDispatchToProps=dispatch=>{
    return{
        onAddMovie:()=>{
            dispatch({
            type:'ADDMOVIES',
            movie:{
                id:Math.random(),
                title: prompt('movie title: '),
                image: prompt('movie image: '),
                rating: Number(prompt('movie rating: '))
            }})
        }
    }
}
const MovieCardListReducer=connect (mapStateToProps,mapDispatchToProps)(MovieCardList)
export default MovieCardListReducer;

