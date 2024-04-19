document.addEventListener("DOMContentLoaded", function () {
  const categorySelect = document.getElementById("category");
  const getNewsButton = document.getElementById("getNewsButton");
  const newsList = document.getElementById("newsList");

  getNewsButton.addEventListener("click", function () {
    const category = categorySelect.value;
    fetchNews(category);
  });

  function fetchNews(category) {
   
    const apiKey = "cee61ef84a6f4b7491781d52b342e8ef";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=US&category=${category}&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const articles = data.articles;
        displayNews(articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function displayNews(articles) {
    newsList.innerHTML = "";
    articles.forEach((article) => {
      const articleElement = document.createElement("div");
      articleElement.classList.add("article");

      if (article.urlToImage) {
        const articleImage = document.createElement("img");
        articleImage.src = article.urlToImage;
        articleElement.appendChild(articleImage);
      }

      const articleTitle = document.createElement("h2");
      articleTitle.textContent = article.title;
      articleElement.appendChild(articleTitle);

      const articleDescription = document.createElement("p");
      articleDescription.textContent = article.description;
      articleElement.appendChild(articleDescription);

      const articleDetails = document.createElement("div");
      articleDetails.classList.add("article-details");

      const articleLink = document.createElement("a");
      articleLink.href = article.url;
      articleLink.target = "_blank";
      articleLink.textContent = "Read Full Article";
      articleDetails.appendChild(articleLink);

      const publishedDate = document.createElement("span");
      const publishedTimestamp = new Date(article.publishedAt);
      publishedDate.textContent = `Published on ${publishedTimestamp.toLocaleDateString()}`;
      publishedDate.classList.add("published-date");
      articleDetails.appendChild(publishedDate);

      articleElement.appendChild(articleDetails);

      newsList.appendChild(articleElement);
    });
  }
});
