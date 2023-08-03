import React from 'react'
import Banner from '../banner'
import SearchBar from '../searchbar'
// import Grid from '../grid'
// import Thumb from '../thumb'
import { useHomeFetch } from '../../hooks/useHomeFetch';
import {IMAGE_BASE_URL,BACKDROP_SIZE, POSTER_SIZE} from '../../API/config'
import Thumb from '../thumb';
import Grid from '../grid';

const Home = () => {

  const {state,error,searchTerm,setSearchTerm} = useHomeFetch();

  if (error) return <div>Somthing went wrong!</div>

  return (
    <>
    {!searchTerm && state.results[0] ?
    <Banner

      image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}

      tittle= {state.results[0].original_title}

      text={state.results[0].overview}
      />

      : null
      }

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {state.results.map(movie => (

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
    </>
  )

}

export default Home