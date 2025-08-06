
const accessKey = "BLYrF96i-HqX0oFMl3kJngdZr3AnzJ7WHbJ1iybKtvQ";

const searchForm = document.querySelector("#form-search");
const searchBox = document.querySelector("#search-box");
const searchResults = document.querySelector("#search-results");
const Showmore = document.querySelector("#show-more-btn");

let key ="";
let page = 1;
async function searchImage(){
    key = searchBox.value
    //Api call
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${key}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page=== 1){
        searchResults.innerHTML = ""
    }

    const results = data.results
    console.log(results);
    
    results.map((result)=>{
        const Image = document.createElement("img");
        Image.src = result.urls.small;
        const ImagLink = document.createElement("a")
        ImagLink.href = result.links.html;
        ImagLink.target = "_blank"
        ImagLink.appendChild(Image)
        searchResults.appendChild(ImagLink);
    })
   Showmore.style.display = "block"

}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImage();

})
Showmore.addEventListener("click",()=>{
    page++;
    searchImage()
})