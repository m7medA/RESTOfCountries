import View from "./view.js";

class CountryDetials extends View{
    _parentEelement = document.querySelector('.show_country_data');
    _data;

    _generateMarkup(data){
        return `
            <div class="country_img_detials col-lg-5 col-md-12 p-0 d-flex flex-column justify-content-center">
                <img src="${data.flag}" class="country_img img-fluid img-thumbnail" alt="Country img">
            </div>
            <div class="detials col-lg-7 col-md-12 row m-0 p-lg-5">
                <h1 class="px-0 py-2 m-0">${data.name}</h1>
                <div class="left_col col-sm-12 col-md-6 py-4 px-0">
                    <p><span class="fw-bolder pe-2">Native Name:</span> ${data.nativeName}</p>
                    <p><span class="fw-bolder pe-2">Population:</span> ${Math.ceil(data.population/1000000)}M</p>
                    <p><span class="fw-bolder pe-2">Region:</span> ${data.region}</p>
                    <p><span class="fw-bolder pe-2">Sub Region:</span> ${data.subregion}</p>
                    <p><span class="fw-bolder pe-2">Capital:</span> ${data.capital}</p>
                </div>
                <div class="right_col col-sm-12 col-md-6 py-4 px-0">
                    <p><span class="fw-bolder pe-2">Top level Domain:</span> ${data.topLevelDomain}</p>
                    <p><span class="fw-bolder pe-2">Currencies:</span> ${data.currencies}</p>
                    <p><span class="fw-bolder pe-2">Languages:</span> ${data.language}</p>
                </div>
            </div>
        `
    }
}

export default new CountryDetials();