export default class View{
    _data;

    render(data){
        this._data = data;
        const markup = this._generateMarkup(this._data);
        this._parentEelement.innerHTML = '';
        this._parentEelement.insertAdjacentHTML('afterbegin',markup);
    }

    addHandlerDropdown(handler){
        const event = ['hashchange','load']; 
        event.forEach(ev => window.addEventListener(ev,handler));
    }

    renderSpinner(){
        const markup =  `
            <div class="spinner d-flex justify-content-center align-items-center position-absolute">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `
        this._clear();
        this._parentEelement.insertAdjacentHTML('afterbegin',markup);
    }

    renderError(message = 'No Country found for your query. Please try again!'){
        const markup =  `
            <div class="error d-flex gap-3">
                <span><i class="fa-solid fa-triangle-exclamation"></i></span>
                <p>${message}</p>
            </div>
        `
        this._clear();
        this._parentEelement.insertAdjacentHTML('afterbegin',markup);
    }

    _clear(){
        this._parentEelement.innerHTML = '';
    }
}