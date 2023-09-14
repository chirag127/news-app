

import { newsService } from "../services/news-service.js";

async function prepareNews(){
    const allNews = await newsService.readNews();
    allNews.forEach(news=>printNews(news));
    console.log('All News are ', allNews);
}

function printNews(news){
    const newsId = document.querySelector('#news'); // get id
    const colDiv = document.createElement('div'); //<div></div>
    colDiv.className = 'col-4'; // <div class ='col-4>
    const cardDiv = document.createElement('div');  // <div class="card" style="width: 18rem;">
    cardDiv.className='card';
    cardDiv.style.width='18rem';
    colDiv.appendChild(cardDiv);
    // <img src="..." class="card-img-top" alt="...">
// Check if image is missing, and set a default image source
  const img = document.createElement('img');
  img.src = news.image || 'https://www.financialexpress.com/wp-content/uploads/2023/09/Breaking-News-5.jpg?w=1024'; // Replace 'path_to_default_image.jpg' with your default image path
  img.className = 'card-img-top';
  cardDiv.appendChild(img);
    //<div class="card-body">
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardDiv.appendChild(cardBody);
    //<h5 class="card-title">Card title</h5>
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = news.title;
    cardBody.appendChild(h5);
    // <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    const pTag = document.createElement('p');
    pTag.innerText  = news.desc;
    pTag.className = 'card-text';
    cardBody.appendChild(pTag);
    // <a href="#" class="btn btn-primary">Go somewhere</a>
    const aTag = document.createElement('a');
    aTag.href = news.url;
    aTag.className = 'btn btn-primary';
    aTag.innerText = 'Read more';
    cardBody.appendChild(aTag);

    newsId.appendChild(colDiv);

// Create "Read Later" button
const readLaterButton = document.createElement('button');
readLaterButton.className = 'btn btn-secondary';
readLaterButton.innerText = 'Read Later';
cardBody.appendChild(readLaterButton);

// Create a badge for the "Read Later" count
const readLaterBadge = document.createElement('span');
readLaterBadge.className = 'badge bg-primary';
readLaterBadge.innerText = '0'; // Initialize with 0, and you can update this count dynamically
readLaterButton.appendChild(readLaterBadge);


}

prepareNews();