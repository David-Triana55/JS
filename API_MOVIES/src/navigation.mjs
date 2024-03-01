import { getCategoriesPreview } from "./main.mjs";
import { getTrendingMovies} from "./main.mjs";

import {  headerSection, trendingPreviewSection, categoriesPreviewSection, genericSection, movieDetailSection,searchForm , trendingMoviesPreviewList, categoriesPreviewList, movieDetailCategoriesList, relatedMoviesContainer,headerTitle, arrowBtn, headerCategoryTitle, searchFormInput, searchFormBtn, trendingBtn, movieDetailTitle,movieDetailDescription, movieDetailScore }  from "./node.mjs";

searchFormBtn.addEventListener("click", () => {
    location.hash = "#search="
})


trendingBtn.addEventListener("click", () => {
    location.hash = "#trends"
});

arrowBtn.addEventListener("click", () => {
    location.hash = "#home"
});

window.addEventListener('DOMContentLoaded', navigator, false); 
window.addEventListener('hashchange', navigator, false);

function navigator(){
    console.log({location});

    if(location.hash.startsWith('#trends')){
        trendsPage()
    } else if(location.hash.startsWith('#search=')){
        searchPage()
    } else if(location.hash.startsWith('#movie=')){
        movieDetailsPage()
    } else if (location.hash.startsWith('#category=')){
        categoriesPage()
    } else {
        homePage()
    }
}


function homePage(){

    headerSection.classList.remove('header-container--long')
    headerSection.style.backgroundColor = ''
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
    getTrendingMovies()
}

function categoriesPage(){
    console.log('categories!!!');

    headerSection.classList.remove('header-container--long')
    headerSection.style.backgroundColor = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

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

}

function searchPage(){
    console.log('search!!!');

    headerSection.classList.remove('header-container--long')
    headerSection.style.backgroundColor = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')


}

function trendsPage(){
    console.log('trends!!!');

    headerSection.classList.remove('header-container--long')
    headerSection.style.backgroundColor = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

}