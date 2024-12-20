import moment from "moment";
import React from "react";

export default function SingleCommentCard({ user_name, comment, created_at }) {
    return (
        <div className="single_comment_card">
            <div className="single_comment_card_title">
                <p>{moment(created_at).format("LL")}</p>
                <h6>{user_name}</h6>
                <p>{comment}</p>
            </div>
        </div>
    );
}
