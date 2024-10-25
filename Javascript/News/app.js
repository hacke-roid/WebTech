let article_html = document.getElementById("article_html");
let inputValue = document.getElementsByTagName('input')
console.log(inputValue)
let submitButton = document.getElementById('submit_btn');
console.log(submitButton)



const fetchingNews = async () => {
  let apiKey = "ab43bb7025694404ae1466facd3855c7";

  let response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  );
  console.log(response);

  let data = await response.json();
  console.log(data.articles);
  let articles = data.articles;

  articles.map((article) => {
    article_html.innerHTML += `
            <div class="news_article">
                <div class="img_container">
                    <img src=${article.urlToImage}></img>
                </div>
                <span>${article.title}</span>
                <p>${article.description}</p>
                <a href=${article.url}>Read More</a>
            </div>
        `;
    return article_html;
  });
};

fetchingNews();

const articleSearch = async(searchInput) =>{
    let apiKey = "ab43bb7025694404ae1466facd3855c7";
    // let searchInput = document.getElementById("search_input").value;
    let searchUrl = `https://newsapi.org/v2/everything?q=${searchInput}&from=2024-9-24&sortBy=popularity&apiKey=${apiKey}`;
    let response = await fetch(searchUrl);
    let data = await response.json();
    console.log(data)
    let articles = data.articles;
    console.log(articles)

    article_html.innerHTML = "";

    articles.map((article) => {
        article_html.innerHTML += `
            <div class="news_article">
                <div class="img_container">
                    <img src=${article.urlToImage}></img>
                </div>
                <span>${article.title}</span>
                <p>${article.description}</p>
                <a href=${article.url}>Read More</a>
            </div>
        `;
    });
}

// articleSearch()


submitButton.addEventListener("click", ()=>{
    let searchInput = inputValue[0].value;
    console.log(searchInput)
    articleSearch(searchInput);
});