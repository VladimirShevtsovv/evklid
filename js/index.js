window.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#header__burger').addEventListener('click', function(){
        document.querySelector('#header__hidden-menu').classList.add('header__hidden-menu-visibility')
    })
    document.querySelector('#header__hidden-cross').addEventListener('click' , function(){
        document.querySelector('#header__hidden-menu').classList.remove('header__hidden-menu-visibility')
    })
    document.querySelector('#header__search-img-visible').addEventListener('click', function(){
        document.querySelector('#header__search-hidden-main').classList.add('header__search-visible-main')
        document.querySelector('#header__search-img-visible').classList.add('header__search-img-hidden')
        document.querySelector('#header__search-img').classList.add('header__search-img__active')
    })

    document.querySelector('#header__hidden-search__cross').addEventListener('click', function(){
        document.querySelector('#header__search-hidden-main').classList.remove('header__search-visible-main')
        document.querySelector('#header__search-img-visible').classList.remove('header__search-img-hidden')
    })


    

    document.querySelectorAll('.section-how-we-working__item').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click',function(event){
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.section-how-we-working__tabs-content').forEach(function(tabsContent){
                tabsContent.classList.remove('tabs-content-active')
            })
            document.querySelectorAll('.section-how-we-working__item').forEach(function(tabsItem){
                tabsItem.classList.remove('section-how-we-working__item-active')
            })
            document.querySelectorAll('.section-how-we-working__img-container').forEach(function(tabsImg){
                tabsImg.classList.remove('section-how-we-working__img-active-container')
            })
            document.querySelector(`[data-target='${path}']`).classList.add('tabs-content-active')
            document.querySelector(`[data-target-item='${path}']`).classList.add('section-how-we-working__item-active')
            document.querySelector(`[data-target-img='${path}']`).classList.add('section-how-we-working__img-active-container')
        })
    })  
});

// $(document).on('click' , '.section-most-asked-questions__item' , function(){
//     var element = $(this).children('.section-most-asked-questions__discription');
//     if(element.css('display')== 'none'){
//         element.slideToggle()
//         console.log(element)
//     }
//     else {
//         element.slideToggle()
//     }
// })

// $(document)
//           .on('click', '#Hide-description, #Hide-description1' ,  function(){
//           var description = $(this).parent().parent().children('div #new-text2');
//           if (description.css('display')== 'block'  ){
//           description.slideToggle()
//           $(this).replaceWith('<span id="Hide-description1" >&#9668;</span>')
//           }
//           else{
//           description.slideToggle()
//           $(this).replaceWith('<span id="Hide-description" >&#9660;</span>')
//           }   
//         });
//      });




