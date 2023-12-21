import React from 'react'
import { useParams } from 'react-router-dom';
import { useMovieFetch } from '../../hooks/useMovieFetch';
import Breadcrumb from '../breadcrumbs';
import Spinner from '../spinner';
import MovieInfo from '../movieInfo/Index';
import MovieInfoBar from '../movieInfoBar/Index'
import Actor from '../actor';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../API/config';
import Grid from '../grid';
import NoImage from '../../images/no_image.jpg';




const Movie = () => {
  const {movieId} = useParams();
    useMovieFetch(movieId);
    const {state,loading,error}=useMovieFetch(movieId)


    if(loading) return <Spinner />
    if(error) return <div>Something went wrong...</div>


    return(
        <>
            <Breadcrumb movieTitle={state.original_title} />
            <MovieInfo movie={state} />
            <MovieInfoBar
                time={state.runtime} 
                budget={state.budget} 
                revenue={state.revenue} />

            <Grid header="Actors">
                { state && state.actors && Array.isArray(state.actors) ? state.actors.map(actor=>(
                    <Actor
                     key = {actor.credit_id} 
                     name = {actor.name} 
                     character = {actor.character}
                     imageUrl = {
                         actor.profile_path
                         ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                         : NoImage
                     }
                    />

                )): null}
            </Grid>
        </>
    )
};

export default Movie
 