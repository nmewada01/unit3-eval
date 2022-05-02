// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";

let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();

//https://masai-mock-api.herokuapp.com/news?q=

let searching = async() =>{
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)
    let data = await res.json();
    console.log(data)
}

document.querySelector("#results").addEventListener("click",searching)


let append = (data) =>{
    let result = document.querySelector("#results");
    

    let news_div = document.querySelector("div")
    news_div.setAttribute("class","news")

    let image = document.querySelector("img")

    let title = document.querySelector("h3")

    let des = document.querySelector("p")

    news_div.append(image,title,des)

    result.append(news_div);
}
result.addEventListener("click",append)