import { createContext } from "react";
import endpoints from "../API/endpoints";
import { useReducer } from "react";
import { useEffect } from "react";

export const action_types = {
    movies_loading: 'MOVIES/LOADING',
    movies_successful: 'MOVIES/SUCCESSFUL',
    movies_error: 'MOVIES/ERROR',
    movies_reset: 'MOVIES/RESET',
    movies_searchTerm: 'MOVIES/SEARCH'
}

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

export const MoviesContext = createContext({state:reducerState,dispatc: ()=>{}})

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



 export const MoviesProvider = ({children}) =>{

    const [state, dispatch] = useReducer(moviesReducer, reducerState)

    const fetchMovies = async (page, searchTerm = '') => {
        try {
            dispatch({ type: action_types.movies_loading });
            
            const movies = await endpoints.fetchMovies(searchTerm, page);

            const newMovies = {
                ...state.movies,
                results: page > 1 ? [...state.movies.results, ...movies.results] : [...movies.results]
            }

            dispatch({ type: action_types.movies_successful, payload: newMovies })

        } catch (err) {
            console.log(err)
            dispatch({ type: action_types.movies_error });
        }
    }

    useEffect(() => {
        dispatch({ type: action_types.movies_reset })
        fetchMovies(1, state.searchTerm);
    }, [state.searchTerm]);

    useEffect(() => {
        if (!state.isLoadingMore) return;
        fetchMovies(state.movies.page + 1, state.searchTerm);
    }, [state.isLoadingMore, state.searchTerm, state.movies.page]);

    return (
        <MoviesContext.Provider value = {{state,dispatch}}>
            {children}
        </MoviesContext.Provider>
    )

}







