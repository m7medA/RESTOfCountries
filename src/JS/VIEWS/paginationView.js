import View from "./view.js";

class PaginationView extends View{
    _parentEelement = document.querySelector('.pagination');
    _data;

    addHandlerClick(handler){
        this._parentEelement.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn--inline');
            if(!btn) return;

            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }

    _generateMarkup(){
        const currentPage = this._data.page;
        const numPages = Math.ceil(this._data.result.length / this._data.resultPerPage);

        // page 1 and there are other pages
        if(currentPage === 1 && numPages > 1){
            return `
                <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next btn float-end gap-2 rounded-pill p-2">
                    <span>Page ${currentPage + 1}</span>
                    <span><i class="fa-solid fa-arrow-right"></i></span>
                </button>
            `;
        }
        
        // last page
        if(currentPage === numPages && numPages > 1){
            return `
                <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev btn gap-2 rounded-pill p-2">
                    <span><i class="fa-solid fa-arrow-left"></i></span>
                    <span>Page ${currentPage - 1}</span>
                </button>
            `;
        }
        
        // other page
        if(currentPage < numPages){
            return `
                <button data-goto="${currentPage - 1}" class="btn--inline  btn float-end gap-2 rounded-pill p-2">
                    <span><i class="fa-solid fa-arrow-left"></i></span>
                    <span>Page ${currentPage - 1}</span>
                </button>
                <button data-goto="${currentPage + 1}" class="btn--inline  btn float-start gap-2 rounded-pill p-2">
                <span>Page ${currentPage + 1}</span>    
                <span><i class="fa-solid fa-arrow-right"></i></span>
                </button>
            `;
        }
        
        // page 1, and there are no other pages
        return '';
    }
}

export default new PaginationView();