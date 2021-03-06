import React from "react";

const ArticleDetail = props =>
    <div className="text-center">
        <h3>Article Title: {props.headline}</h3>
        <h3>Article URL: {props.url}</h3>
        <h3>Article Date; {props.date}</h3>
    </div>;

export default ArticleDetail;
