import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Body from "./BlogBody"

function BlogApp() {
  return (
    <div className="blog">
        <Header />
        <Body />
        <Footer />
    </div>
  )
}

export default BlogApp