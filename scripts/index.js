// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";

let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();


let search = async() =>{
    let query = document.querySelector("#search_input").value
    

    let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=twitter`)

        let data = await res.json();

        console.log(data);
}
document.querySelector("#search_input").addEventListener("click",search)





let result = document.querySelector("#results");

let append = (data,result) =>{

   
data.forEach(function(el){

    for(let i=0; i<data[i].length; i++){

        let news_div = document.querySelector("div")
        news_div.setAttribute("class","news")
    
        let image = document.querySelector("img")
        image.src = el.articles[i].urlToImage;
    
        let title = document.querySelector("h3")
    
        let des = document.querySelector("p")
    
        news_div.append(image,title,des)
    
        result.append(news_div);


    }
  

    
});
       



    
    


}






// let anch = async() =>{

//     let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)
//     let data = await res.json();
//     console.log(data)
// }

// document.querySelector("#search_input").addEventListener("click",anch)


