import {useState,useEffect} from 'react';
import endpoints from '../API/endpoints';

//Helpers
// import {isPersistedState} from '../helpers';


export const useMovieFetch = movieId =>{
    const [state,setState] = useState({});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                setLoading(true);

                const movie = await endpoints.fetchMovie(movieId);
                console.log(movie,movieId,'kkkkk')
                const credits = await endpoints.fetchCredits(movieId);
                
                const directors = credits.crew.filter(
                    member=> member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);

            }catch(err){
                setError(true);
                // console.log(err.messages);
            }
        }

        // const sessionState = isPersistedState(movieId);
        // if(sessionState){
        //     setState(sessionState);
        //     setLoading(false);
        //     return;
        // }
        fetchData();
    },[movieId]);

    return {state,loading,error}

    // useEffect(()=>{
    //     sessionStorage.setItem(movieId,JSON.stringify(state));
    // },[movieId,state]);

    // return {state,loading,error};
}