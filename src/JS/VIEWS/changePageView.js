class changePage{
    contentChange(){
        const content = document.querySelector('.content');
        const contentDetials = document.querySelector('.content_details');
        const AllbtnDetials = document.querySelectorAll('.btn_detials');
        AllbtnDetials.forEach(btnDetials => {
            btnDetials.addEventListener('click', function(){
                contentDetials.classList.toggle('hidden');
                content.classList.toggle('hidden');
            });
        });
    }
    homeContent(){
        const content = document.querySelector('.content');
        const contentDetials = document.querySelector('.content_details');
        const btnBack = document.querySelector('.btn_back');
        btnBack.addEventListener('click', function(e){
            e.preventDefault();
            contentDetials.classList.add('hidden');
            content.classList.remove('hidden');
        });
    }
}

export default new changePage()