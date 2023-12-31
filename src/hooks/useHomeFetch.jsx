import { useState, useEffect, useReducer } from "react";


//Helpers
// import {isPersistedState} from '../helpers';
import endpoints from "../API/endpoints";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

const reducerState = {
    searchTerm: '',
    movies: initialState,
    loading: false,
    error: false,
    loadingMore: false,

}

export const action_types = {
    movies_loading: 'MOVIES/LOADING',
    movies_successful: 'MOVIES/SUCCESSFUL',
    movies_error: 'MOVIES/ERROR',
    movies_reset: 'MOVIES/RESET',
    movies_searchTerm: 'MOVIES/SEARCH'
}

const moviesReducer = (state = reducerState, action) => {
    const { type, payload } = action;

    if (type === action_types.movies_loading) {
        return {
            ...state, loading: true, error: false
        }
    } else if (type === action_types.movies_successful) {
        return {
            ...state, loading: false, movies: payload
        }
    } else if (type === action_types.movies_error) {
        return {
            ...state, error: true, loading: false
        }
    } else if (type === action_types.reset) {
        return {
            ...state, movies: initialState
        }
    }else if (type === action_types.movies_searchTerm){
        return {
            ...state, searchTerm:payload
        }
    }else{
        return state
    }

}

export const useHomeFetch = () => {
    // const [searchTerm,setSearchTerm] = useState('');
    // const [state, setState] = useState(initialState);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    // const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [state, dispatch] = useReducer(moviesReducer, reducerState)

    const fetchMovies = async (page, searchTerm = '') => {
        try {
            dispatch({ type: action_types.movies_loading });
            // setError(false);
            // setLoading(true);


            const movies = await endpoints.fetchMovies(searchTerm, page);

            const newMovies = {
                ...state.movies,
                results: page > 1 ? [...state.movies.results, ...movies.results] : [...movies.results]
            }

            dispatch({ type: action_types.movies_successful, payload: newMovies })

            // setState(prev => ({
            //     ...movies,
            //     results:
            //     page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            //}));
        } catch (err) {
            console.log(err)
            dispatch({ type: action_types.movies_error });
        }
        // setLoading(false);

    }

    //Initial render and search

    useEffect(() => {
        // if(!searchTerm){
        //     const sessionState = isPersistedState('homeState');

        //     if(sessionState){
        //         setState(sessionState);
        //         return;
        //     }
        // }
        dispatch({ type: action_types.movies_reset })
        fetchMovies(1, state.searchTerm);
    }, [state.searchTerm]);

    //Laod More
    useEffect(() => {
        if (!state.isLoadingMore) return;
        fetchMovies(state.movies.page + 1, state.searchTerm);
        // setIsLoadingMore(false);
    }, [state.isLoadingMore, state.searchTerm, state.movies.page]);

    //write to sessionStorage
    // useEffect(()=>{
    //     if(!searchTerm) sessionStorage.setItem('homeState',JSON.stringify(state))
    // },[searchTerm,state]);

    return { state, dispatch };
}