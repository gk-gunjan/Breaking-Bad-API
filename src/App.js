import React,{useState,useEffect} from 'react';
import Header from "./components/ui/Header";
import "./App.css";
import Axios from "axios";
import CharacterGrid from './components/character/CharacterGrid';
import Serch from "./components/ui/Serch";

const App = () => {

    const [items,setItems] =useState([]);
    const [isLoading ,setIsLoading] =useState(true);
    const [query ,setQuery] =useState('');

    useEffect(() => {
        const fetchItems=async() =>{
            const {data} =await Axios(
                `https://www.breakingbadapi.com/api/characters?name=${query}`
                )   
                
            setItems(data)
            setIsLoading(false)
        }
        fetchItems();
        }
    , [query])

    return (
        <div className="container">
            <Header />
            <Serch getQuery={(q) =>setQuery(q)} />
            <CharacterGrid  isLoading={isLoading} items={items}/>
        </div>
    );
}
export default App;
