import moment from "moment";
import React from "react";

export default function SingleBlogsContent({ title, article, created_at }) {
    return (
        <div className="single_blog_content">
            <h2>{title}</h2>
            <p>{moment(created_at).format("LL")}</p>
            <p>{article}</p>
        </div>
    );
}
