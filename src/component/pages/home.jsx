import React from 'react'
import Banner from '../banner'
import SearchBar from '../searchbar'
import Grid from '../grid'
import Thumb from '../thumb'
import { useHomeFetch } from '../../hooks/useHomeFetch';
import {IMAGE_BASE_URL,BACKDROP_SIZE} from '../../API/config'

const Home = () => {

  const {state,loading,error,searchTerm,setSearchTerm,setIsLoadingMore} = useHomeFetch();

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

    </>
  )

}

export default Home