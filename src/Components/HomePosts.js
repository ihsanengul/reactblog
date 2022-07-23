import BlogPost from "./BlogPost"

import axios from "axios";
import { useState, useEffect } from "react";

const HomePosts = () => {
    const [blog, setBlog] = useState();

    useEffect(() => {
        async function blogs() {
            try {
                const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
                setBlog(data.data.slice(0, 5))
            } catch (error) {
                alert(error);
            }
        }
        blogs()
    }, [])

    if (!blog) {
        return (
            <p>Loading...</p>
        )
    }
    else {
        const blogList = blog.map((detail, index) => {
            return <BlogPost key={index} detail={detail} />
        });

        return (blogList)
    }
}

export default HomePosts