import React from 'react';
import Movie from './movie';

class Movies extends React.Component {

    render() {
        return (

            this.props.movieData.map((item, index) => {
                return (

                    <Movie movieRes={item}  key={index}/>
                )
            })
            

        )
    }

}

export default Movies;