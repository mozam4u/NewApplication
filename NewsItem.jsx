import React from "react";
import noimage from "./noimage.jpg"
export default function NewsItem(props) {
    return (
        <>
            <div className="card mb-3" style={{border:'5px solid #edece8'}}>
                <span className="badge bg-dark text-light p-3 mb-1" style={{fontSize:'16px'}}>{props.source}</span>
                <img src={(props.image) ? props.image : noimage} className="card-img-top" style={{ width: '100%', height: "150px" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "100px" }}>{(props.title) ? (props.title.slice(0, 50) + "...") : ""}</h5>
                    <hr />
                    <span className="badge bg-light text-dark p-1 w-100">News By:-{(props.author) ? (props.author.slice(0,20)) : ("Unknown")}</span>
                    <span className="badge bg-light text-dark p-1 w-100">Date:-{new Date(props.date).toGMTString()}</span>
                    <hr />
                    <p className="card-text" style={{ height: "200px" }}>{(props.description) ? (props.description.slice(0, 200) + "...") : ("")}</p>
                    <a href={props.newsUrl} className="btn btn-primary w-100">Read Full News</a>
                </div>
            </div>
        </>
    )
}