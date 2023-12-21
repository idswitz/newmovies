import React from 'react'
import Banner from '../banner'
import SearchBar from '../searchbar'
import { useHomeFetch } from '../../hooks/useHomeFetch';
import {IMAGE_BASE_URL,BACKDROP_SIZE, POSTER_SIZE} from '../../API/config'
import Thumb from '../thumb';
import Grid from '../grid';
import Spinner from '../spinner';
// import { useMovieFetch } from '../../hooks/useMovieFetch';

const Home = () => {

  const {state,dispatch} = useHomeFetch();

  if (state.error) return <div>Somthing went wrong!</div>

  return (
    <>
    {!state.searchTerm && state.movies.results[0] ?
    <Banner

      image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.movies.results[0].backdrop_path}`}

      tittle= {state.movies.results[0].original_title}

      text={state.movies.results[0].overview}
      />

      : null
      }

      <SearchBar dispatch={dispatch} />

      <Grid header={state.searchTerm ? 'Search Result' : 'Popular Movies'}>
                {state.movies.results.map(movie => (

                    <Thumb
                     key={movie.id}
                     clickable
                     image={
                         movie.poster_path
                          ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path 
                          : Image
                        
                     }
                     movieId={movie.id}
                     />

                     ))}
            </Grid>

            {/* { loading ? <Spinner/> : '' } */
                state.loading && <Spinner/>
            }
    </>
  )

}

export default Home