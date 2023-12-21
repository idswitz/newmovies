import React, {useState,useEffect,useRef} from "react";

//import
import searchIcon from '../../images/search-icon.svg';

//styles
import {Wrapper,Content} from './SearchBar.styles';
import { action_types } from  '../../hooks/useHomeFetch'


const SearchBar = ({dispatch, searchTerm}) => {
    // const [state,setState] = useState('');
    const initial = useRef(true);


    useEffect(()=>{
        if(initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(()=>{
            dispatch({type: action_types.movies_searchTerm, searchTerm})
        },500)

        return () => clearTimeout(timer);
    },[action_types.movies_searchTerm]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input
                type="text" 
                placeholder="Search Movie"
                onChange={(event)=>dispatch({type:action_types.movies_searchTerm,payload:event.currentTarget.value})}
                value={searchTerm}
                
                />
            </Content>
        </Wrapper>
    );

   
}


export default SearchBar;