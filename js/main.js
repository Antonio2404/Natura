// $(function () {
// //поиск
//     $('.searchingButton').click(function(){
//         $('.showMenuSearching').toggleClass('show-menu')
//     })

// //меню 
//     $('.menuButton').click(function(){
//         $('.showMenuButton').toggleClass('show-menu')
//     })

    
// })

document.addEventListener("DOMContentLoaded", () => {
    const searchingButton = document.querySelector('.searchingButton');
    const showMenuSearching = document.querySelector('.showMenuSearching');

    searchingButton.addEventListener('click', function () {
        showMenuSearching.classList.toggle('show-menu');
    })
});
