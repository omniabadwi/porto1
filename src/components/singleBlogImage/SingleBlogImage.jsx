import React from 'react'

export default function SingleBlogImage({image}) {
  return (
      <div className="single_blog_image">
          <div className="blog_card_image_overlay"></div>
          <img src={image ? `https://test-api.napoliaeg.com/storage/${image.image_path}${image.name}` : ""} alt="" />
      </div>
  );
}
