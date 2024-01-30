import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles , setArticles] = useState([])
    const [loading , setLoading] = useState(true)
    const [page , setPage] = useState(1)
    const [totalResults , settotalResults] = useState(0)

    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey={your_Api_key}&page=${page + 1}&pageSize=${props.pageSize}`
            setLoading(true);
            let data = await fetch(url)
            let parsedData = await data.json()
            setArticles(articles.concat(parsedData.articles));
            settotalResults(parsedData.totalResults);
            setLoading(false);
    };

    const capitalized = (category) =>{

        return category.charAt(0).toUpperCase() + category.slice(1);

    }

    const updateNews = async () =>{
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey={your_Api_key}&pageSize=${props.pageSize}`
        setLoading(true);
        let data = await fetch(url)
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        
        document.title = `NewsApp - ${capitalized(props.category)}`
        updateNews();
        
      },[]);

        let {mode} = props;
        return (
        <>
            
                <h2 style={{'textAlign': 'center' , 'margin' : '30px 0px',marginTop : '90px'}} className={`text-${mode==='light'?'dark':'light'} `}>Daily News - Top {capitalized(props.category)} Headlines</h2>
                {/* {loading && <Spin/>} */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles !== totalResults}
                    loader={loading && <Spin/>}
                >
                            {/* <div className='row'>
                                {!loading && articles?.map((element) =>{
                                    return <div className="col-md-4" key={element.url}>
                                        <NewsItem mode={mode} title={element.title ? element.title.slice(0,45) : " "} description={element.description ? element.description.slice(0,50) : " "} imageUrl={element.urlToImage} newsUrl = {element.url} publishedAt = {element.publishedAt} author = {element.author} source = {element.source.name}/>
                                    </div>
                                })}
                            </div> */}
                        <div className='container my-3'>
                            <div className='row'>
                                {articles?.map((element) =>{
                                    return <div className="col-md-4" key={element.url}>
                                        <NewsItem mode={mode} title={element.title ? element.title.slice(0,45) : " "} description={element.description ? element.description.slice(0,50) : " "} imageUrl={element.urlToImage} newsUrl = {element.url} publishedAt = {element.publishedAt} author = {element.author} source = {element.source.name}/>
                                    </div>
                                })}
                            </div>
                        </div>

                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={page<=1} onClick={handlePrevButton} className='btn btn-sm btn-dark'> &larr;Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults/15)} onClick={handleNextButton} className='btn btn-sm btn-dark'>Next &rarr;</button>
                </div> */}
            
        </>
        )
    }


News.defaultProps = {

    country : 'in',
    category : 'general',
    pageSize : 9,
    setProgress : 10
}

News.propTypes = {

    country : PropTypes.string,
    category : PropTypes.string,
    pageSize : PropTypes.number,
    setProgress : PropTypes.number
}

export default News