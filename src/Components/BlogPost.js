const BlogPost = (props) => {
    return (
        <article className="blog-post">
            <h2 className="blog-post-title mb-1">{props.detail.title}</h2>
            <p className="blog-post-meta">{new Date().toDateString()} <a href="#">Category</a></p>
            <p>Description</p>
            <p>{props.detail.body}</p>
        </article>
    )
}

export default BlogPost