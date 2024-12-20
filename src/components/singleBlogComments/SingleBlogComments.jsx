import React from 'react'
import SingleCommentCard from '../singleCommentCard/SingleCommentCard'

export default function SingleBlogComments({ blog_comments }) {
    return (
        <div className="single_blog_comments">
            <h5>Comments</h5>
            {blog_comments?.map((comment) => (
              <SingleCommentCard key={comment.id} user_name={comment.name} comment={comment.comment} created_at={ comment.created_at} />
            ))}
        </div>
    );
}
