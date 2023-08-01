import {SEARCH_BASE_URL,POPULAR_BASE_URL} from '../API/config'

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
    
}
}

export default endpoints;


