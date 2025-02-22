import View from "./view.js";

class ResultView extends View{
    _parentEelement = document.querySelector('.result_contianer');
    _data;

    _generateMarkup(data){
        this._data = data
        return this._data.map(data => this._generateMarkupChian(data)).join('');
    }
    
    _generateMarkupChian(data){
        return `
            <li class="col-lg-3 col-md-6 d-md-flex justify-content-md-center">
                <a class="btn_detials card country text-decoration-none" href="#${data.region}  ${data.name}">
                    <img src="${data.flag}" class="card-img-top country_img img-thumbnail" alt="Country img">
                    <div class="card-body country_data">
                        <h3 class="card-title country_name py-1">${data.name}</h3>
                        <p class="card-text country_text"><span class="fw-bolder">Population:</span> ${Math.ceil(data.population/1000000)}M</p>
                        <p class="card-text country_text"><span class="fw-bolder">Region:</span> ${data.region}</p>
                        <p class="card-text country_text"><span class="fw-bolder">Capital:</span> ${data.capital}</p>
                    </div>
                </a>
            </li>
        `
    }

    
}

export default new ResultView();