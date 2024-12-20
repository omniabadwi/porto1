// import React from "react";
// import SingleBlogImage from "../../components/singleBlogImage/SingleBlogImage";
// import SingleBlogsContent from "../../components/singleBlogsContent/SingleBlogsContent";
// import SingleBlogComments from "../../components/singleBlogComments/SingleBlogComments";
// import AddComment from "../../components/addComment/AddComment";
// import { getSingleBlogs } from "../../api/FetchAPI";
// import { useParams } from "react-router-dom";
// // import Loader from "../../components/loader/Loader";

// export default function SingleBlogPage() {
//     const { id } = useParams();

//     const { data, isFetching } = getSingleBlogs(id);    
    
//     // if (isFetching) return <Loader/>
//         return (
//             <div className="single_blog py px">
//                 <SingleBlogImage image={data?.data?.data?.image} />
//                 <SingleBlogsContent title={data?.data?.data?.title} article={data?.data?.data?.article} created_at={data?.data?.data?.created_at} />
//                 <SingleBlogComments blog_comments={data?.data?.data?.blog_comments} />

//                 <AddComment blog_id={data?.data?.data?.id} />
//             </div>
//         );
// }
