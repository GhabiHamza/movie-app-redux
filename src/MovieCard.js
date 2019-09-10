import React from 'react';
import {connect} from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';





const MovieCard = ({Y,id,onDelete=()=>{},onEdit=()=>{},movie={}}) =>{
    return(
        
            <Card className='col-lg-4 card1'>
                
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={Y.rating}
            />
            <button className='movie-delete' onClick={()=>onDelete(id)}>X</button>
            <button className='movie-edit' onClick={()=>onEdit(movie)}>Edit</button>

                <CardImg top height="152px" src={Y.image} alt="Card image cap" />
                <CardBody>
                <CardTitle>{Y.title}</CardTitle>
                </CardBody>
            </Card>
        
    )
}
    const mapDispatchToProps=dispatch=>{
        return {
            onDelete:(id)=>{
                dispatch({
                    type:'DELETEMOVIES',
                    id

                })
            },

            onEdit:(movie)=>{
                dispatch({
                    type:'EDITMOVIES',
                    id:movie.id,
                    movie:{
                        id:movie.id,
                title: prompt('movie title: ',movie.title),
                image: prompt('movie image: ',movie.image),
                rating: Number(prompt('movie rating: ',movie.rating))
                    }
                })
            }
        }
    }
               


    const MovieCardContainer = connect(null,mapDispatchToProps)(MovieCard)


export default MovieCardContainer;