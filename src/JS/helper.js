import { API_URL } from "./config.js";

export const fetchPro = async function(fetchType, query){
    if(fetchType === 'region')  return await fetch(`${API_URL}region/${query}`)
    return await fetch(`${API_URL}name/${query}`);
}

export const defineId = function(){
    const id = window.location.hash.slice(1).split("%20%20");
    return id;
}