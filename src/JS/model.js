import { API_URL, RESULTPERPAGE } from "./config.js";
import { fetchPro } from "./helper.js";

export const state = {
    country: {},
    search: {
        query: "",
        result: [],
        page: 1,
        resultPerPage: RESULTPERPAGE,
    },
}

const CreateCountryObject = function(data){
    const [country] = data;
    return {
        flag: country.flag,
        name: country.name,
        population: country.population,
        region: country.region,
        capital: country.capital,
        nativeName: country.nativeName,
        subregion: country.subregion,
        topLevelDomain: country.topLevelDomain[0],
        currencies: country.currencies[0].code,
        language: country.languages[0].name,
    }
}

export const loadResult = async function(query, fetchType=''){
    try{
        state.search.query = query;
        const res = await fetchPro(fetchType, query);
        if(!res.ok) throw new Error("Sorry some Problem in server");
        const data = await res.json();
        state.search.result = data.map(data => {
            return {
                flag: data.flag,
                name: data.name,
                population: data.population,
                region: data.region,
                capital: data.capital,
            }
        });
        state.search.page = 1;
    }catch(err){
        throw err;
    }
}

export const getSearchResultPage = function(page = state.search.page){
    state.search.page = page;
    const start = (page - 1) * state.search.resultPerPage;
    const end = page * state.search.resultPerPage;

    return state.search.result.slice(start,end);
}

export const loadCountry = async function(id, fetchType=''){
    const res = await fetchPro(fetchType, id);
    if(!res.ok) throw new Error("Sorry some Problem in server");
    const data = await res.json();
    state.country = CreateCountryObject(data);
}