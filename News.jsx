import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import LoadingBar from "./LoadingBar";
import "./style.css"
export default function News(props) {
    const [articals, setarticals] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResult, settotalResult] = useState(0)
    const [progress, setprogress] = useState(0)
    var fetchMoreData = async () => {
       setloading(true)
        let rawdata = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c90a61c1aeab49bdb5d1fbe5746b47d2&page=${page}&pageSize=${props.pageSize}`)
        let data = await rawdata.json()
        setpage(page + 1)
        setarticals(articals.concat(data.articles))
        settotalResult(data.totalResult)
        setloading(false)
    }
    var update = async () => {
        setloading(true)
        setprogress(50)
        let rawdata = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c90a61c1aeab49bdb5d1fbe5746b47d2&page=${page}&pageSize=${props.pageSize}`)
        let data = await rawdata.json()
        setprogress(100)
        setarticals(data.articles)
        settotalResult(data.totalResult)
        setloading(false)
    }
    useEffect(() => {
        update()
    },[props.category])
    return (
        <>
            <div className="conatainer">
                <h1 className="bg-dark text-light text-center mt-5 mb-3 p-3">
                    MySite | Top News</h1>
                {loading && <LoadingBar progress={progress} />}
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articals.length}
                    next={fetchMoreData}
                    hasMore={articals.length !== totalResult}
                    loader={loading && <Spinner />}
                >
                    <div className="row">
                        {articals.map((item, index) => {
                            return (
                                <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12" key={index}>
                                    <NewsItem
                                        title={item.title}
                                        description={item.description}
                                        image={item.urlToImage}
                                        newsUrl={item.url}
                                        author={item.author}
                                        date={item.publishedAt}
                                        source={item.source.name}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}
//c90a61c1aeab49bdb5d1fbe5746b47d2