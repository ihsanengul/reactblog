import axios from "axios";
import { useState, useEffect } from "react";

const UserCard = (props) => {
    const [blog, setBlog] = useState();

    useEffect(() => {
        async function blogListe() {
            try {
                const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setBlog(data.data);
            } catch (error) {
                alert("Hata oluştu");
            }
        }
        blogListe();
    }, []);

    if (!blog) {
        return (
            <p>Yükleniyor...</p>
        );
    }
    else {
        const blogLists = blog.map((data) =>
            <li>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </li>
        );

        return (
            <div>
                <ul>
                    {blogLists}
                </ul>
            </div>
        );
    }
}

export default UserCard;