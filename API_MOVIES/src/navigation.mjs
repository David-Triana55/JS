import { getCategoriesPreview, getRelatedMoviesId, getTrendingMoviesPreview } from "./main.mjs";
import {getMoviesByCategory} from "./main.mjs";
import { getMoviesBySearch} from "./main.mjs";
import { getTrendingMovies} from "./main.mjs";
import { getMovieById} from "./main.mjs";

import {  headerSection, trendingPreviewSection, categoriesPreviewSection, genericSection, movieDetailSection,searchForm , trendingMoviesPreviewList, categoriesPreviewList, movieDetailCategoriesList, relatedMoviesContainer,headerTitle, arrowBtn, headerCategoryTitle, searchFormInput, searchFormBtn, trendingBtn, movieDetailTitle,movieDetailDescription, movieDetailScore }  from "./node.mjs";

searchFormBtn.addEventListener("click", () => {
    location.hash = "#search=" + searchFormInput.value

})

trendingBtn.addEventListener("click", () => {
    location.hash = "#trends"
});

arrowBtn.addEventListener("click", () => {
    // location.hash = "#home"
    history.back(); // mirar el historial y volver a la pagina anterior
});

window.addEventListener('DOMContentLoaded', navigator, false); // carfar el contenido de dom
window.addEventListener('hashchange', navigator, false);

function navigator(){
    console.log({location});

    if(location.hash.startsWith('#trends')){
        trendsPage()
    } else if(location.hash.startsWith('#search=')){
        searchPage()
    } else if(location.hash.startsWith('#movie=')){
        movieDetailsPage()
    } else if (location.hash.startsWith('#category=')){ // location empieza con movie=
        categoriesPage()
    } else {
        homePage()
    }

    document.body.scrollTop = 0  // que el contenido se abra y permanezca arriba
    document.documentElement.scrollTop = 0
}

function homePage(){

    headerSection.style.backgroundColor = ' '
    headerSection.style.backgroundImage = ''
    headerSection.classList.remove('header-container--long')
    arrowBtn.classList.add('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')

    getCategoriesPreview()
    getTrendingMoviesPreview()
}

function categoriesPage(){
    console.log('categories!!!');

    headerSection.classList.remove('header-container--long')
    headerSection.style.backgroundColor = ''
    headerSection.style.backgroundImage = ''

    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    
    const [_, category] = location.hash.split("=")
    const [CategoryId, categoryName] = category.split("-")
    const [name, complenet] = categoryName.split("%20")
    console.log(name, complenet);

    if(complenet === undefined){
        headerCategoryTitle.innerHTML = name
    } else {
        headerCategoryTitle.innerHTML = name + " " + complenet
    }

    getMoviesByCategory(CategoryId)
}

function movieDetailsPage(){
    console.log('Movie!!!');

    headerSection.classList.add('header-container--long')
    // headerSection.style.backgroundColor = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.add('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')

    const [_ ,id] = location.hash.split('%')

    const [a,movieId] = id.split('20')
    console.log(movieId);
    getMovieById(movieId)
    getRelatedMoviesId(movieId)
}

function searchPage(){
    console.log('search!!!');

    headerSection.classList.remove('header-container--long')
    headerSection.style.backgroundColor = ''
    headerSection.style.backgroundImage = ''

    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    const [_, query] = location.hash.split("=")

    console.log(query);

    getMoviesBySearch(query)

}

function trendsPage(){
    console.log('trends!!!');

    headerSection.classList.remove('header-container--long')
    headerSection.style.backgroundColor = ''
    headerSection.style.backgroundImage = ''

    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    headerCategoryTitle.innerHTML = 'Tendencias'
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    getTrendingMovies()
}