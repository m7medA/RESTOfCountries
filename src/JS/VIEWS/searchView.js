import View from "./view.js";

class SearchView extends View{
    _parentElement = document.querySelector('#search_form');

    getQuery(){
        return this._parentElement.querySelector('.search__field').value;
    }

    _clearInput(){
        this._parentElement.querySelector('.search__field').value = '';
    }

    addHandlerSearch(handler){
        this._parentElement.addEventListener('submit',function(e) {
            e.preventDefault();
            handler();
            this._clearInput();
        }.bind(this));
    }
}

export default new SearchView();