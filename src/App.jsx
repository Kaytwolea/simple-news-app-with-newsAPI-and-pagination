import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "./newsCard";
import Pagination from "./pagination";

function App() {

  const baseUrl = 'https://newsapi.org/v2/everything?q=apple&from=2022-10-23&to=2022-10-23&sortBy=popularity&apiKey=d675f0ebf0e24ee2bfe1c7002334af3c'
  const [news, setNews] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [newsperPage, setNewsperPage] = useState(9);
 

  useEffect(() => {
    axios.get(baseUrl)
    .then((res)=> {
      console.log(res.data.articles);
      setNews(res.data.articles)
    })
  }, []);


  const indexOfLastNews = currentPage * newsperPage;
  const indexOfFirstNews = indexOfLastNews - newsperPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers)
  }

  return (
    <div>
      <div className="w-full items-center flex justify-center bg-blue-200 h-16 shadow-sm shadow-blue-300">
        <h1 className="text-2xl text-black font-semibold text-center">
          Flick AppleNews
        </h1>
      </div>
      <div className="w-5/6 mx-auto h-auto mt-6 grid lg:grid-cols-3 gap-6">

        {
          currentNews.map(updates => <NewsCard 
            key={updates.source}
            image={updates.urlToImage}
            title={updates.title}
            author={updates.author}
            date={updates.publishedAt}
            description={updates.description}
          />)
        }
      </div>
      <div>
        <Pagination 
            newsperPage={newsperPage}
            totalNews={news.length}
            paginate={paginate} 
        />
      </div>
      
    </div>
  );
}

export default App;
