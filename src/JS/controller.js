import { defineId } from "./helper.js";
import * as model from "./model.js";
import SearchView from "./VIEWS/searchView.js";
import ResultView from "./VIEWS/resultView.js";
import PaginationView from "./VIEWS/paginationView.js";
import ToggleTheme from "./VIEWS/toggleTheme.js";
import CountryDetials from "./VIEWS/countryDetialsView.js";
import ChangePageView from "./VIEWS/changePageView.js";
import paginationView from "./VIEWS/paginationView.js";

const controllSearchResult = async function(){
    try{
        ResultView.renderSpinner();

        const query = SearchView.getQuery();
        if(!query) return;

        await model.loadResult(query);

        ResultView.render(model.getSearchResultPage());
        ChangePageView.contentChange();

        PaginationView.render(model.state.search);
        
        window.location.hash = '';
    }catch(err){
        ResultView.renderError();
    }
}

const controllSearchRegion = async function(){
    try{
        const idRegion = defineId()[0];
        if(!idRegion) return;

        ResultView.renderSpinner();

        await model.loadResult(idRegion, 'region');

        ResultView.render(model.getSearchResultPage());
        ChangePageView.contentChange();

        PaginationView.render(model.state.search);

        
    }catch(err){
        ResultView.renderError(err);
    }
}

const controllPagination = async function(goToPage){
    try{
        ResultView.render(model.getSearchResultPage(goToPage));
    
        PaginationView.render(model.state.search);
        ChangePageView.contentChange();
    }catch(err){
        paginationView.renderError(err);
    }
}

const controllLoadCountry = async function() {
    try{
        const id = defineId()[1];
        if(!id) return;

        await model.loadCountry(id);

        CountryDetials.renderSpinner();

        CountryDetials.render(model.state.country);

        ChangePageView.homeContent();

    }catch(err){
        CountryDetials.renderError();
    }
}

const init = function(){
    SearchView.addHandlerSearch(controllSearchResult);
    SearchView.addHandlerDropdown(controllSearchRegion);
    CountryDetials.addHandlerDropdown(controllLoadCountry);
    PaginationView.addHandlerClick(controllPagination);
    ToggleTheme.toggle();
}

init();