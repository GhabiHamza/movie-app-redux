import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';

class MovieRating extends Component{
    state = {minRating: 1}

    onStarClick = (nextValue, prevValue, name) => {
        this.setState({ minRating: nextValue });
        this.props.handleRating({...this.state, minRating: nextValue})
    }

    render(){
        return (<div className='rating'>
            <h6>Minimum MovieRating
                    </h6>
            <StarRatingComponent name="rate1"
                starCount={5}
                value={this.state.minRating}
                onStarClick={this.onStarClick}
            />

    
        </div>
        );
    }
    }

const mapStateToProps = state => {
    return {
        rating: state.ratingFilterReducer
    }
}
const mapDispatchToProps = dispatch => {
    return{
        handleRating: minRating => {
            dispatch({
                type: 'SET_RATING',
                minRating
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieRating)



