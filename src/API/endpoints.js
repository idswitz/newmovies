import {SEARCH_BASE_URL,POPULAR_BASE_URL, API_URL, API_KEY} from '../API/config'

const endpoints ={
    fetchMovies:async(searchterm,page)=>{
    if (searchterm){
        const response =await fetch(`${SEARCH_BASE_URL} ${searchterm}&page=${page}`)
        const result =await response.json();
        return result
    }else{
        console.log('here',SEARCH_BASE_URL)
        const response = await fetch(`${POPULAR_BASE_URL}&page=${page}`);
        const result= await response.json();
        return result;
    }
    
},
  fetchMovie: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async movieId => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
}

export default endpoints;


