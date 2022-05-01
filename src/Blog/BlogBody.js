import React from 'react'
import './BlogBody.css'
import photo from './photo.png'

function BlogBody() {
  return (
    <div className="blogbody">
        <div className="blog-heading">
            <h1>Blog</h1>
        </div>
        <div className="blogbody-content">
            <div className="blog-post">
                <div className="blog-post-img">
                    <img src={photo}/>
                </div>
                <div className="blog-post-info">
                    <div className="blog-post-info-date">
                        February 22, 2022
                    </div>
                    <div className="blog-post-info-name">
                        Keith W. Crawford
                    </div>
                    <div className="blog-post-info-info">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
            <div className="blog-post">
                <div className="blog-post-img">
                    <img src={photo} />
                </div>
                <div className="blog-post-info">
                    <div className="blog-post-info-date">
                        February 22, 2022
                    </div>
                    <div className="blog-post-info-name">
                        Keith W. Crawford
                    </div>
                    <div className="blog-post-info-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogBody