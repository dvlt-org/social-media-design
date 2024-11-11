import React, { useState } from "react";
import "./components.css";

function Post() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            name: "утп нфчырш игкпукдф",
            authorImg: "https://i.pinimg.com/736x/c8/86/d0/c886d006cc92dac3b6eeeec977c90e1d.jpg",
            contentImg: "https://avatars.mds.yandex.net/i?id=3a3bf87f92a6811d167e9d27ae7c41a7c983dd65-10805126-images-thumbs&n=13",
            likes: 1,
            comments: [
                { text: "eng zo'r burger ekan" },
                { text: "qayerda qilishadi" }
            ]
        },
        {
            id: 2,
            name: "утп зшырпфт игкпукдфк",
            authorImg: "https://i.pinimg.com/736x/c8/86/d0/c886d006cc92dac3b6eeeec977c90e1d.jpg",
            contentImg: "https://avatars.mds.yandex.net/i?id=a9276de22fbb4bb9e7435dd1c16ccbda6bbf4b60-9289753-images-thumbs&n=13",
            likes: 1,
            comments: [
                { text: "menimcha bundan zo'r burger yemaganman!" },
                { text: "chunmadim kim maqtavooti bu isqirt burgerlani" }
            ]
        },
        {
            id: 3,
            name: "утп ящк игкпукдфк",
            authorImg: "https://i.pinimg.com/736x/c8/86/d0/c886d006cc92dac3b6eeeec977c90e1d.jpg",
            contentImg: "https://avatars.mds.yandex.net/i?id=eef7a10b12276305654ef5ef03af6fefdc243433-4518735-images-thumbs&n=13",
            likes: 1,
            comments: [
                { text: "chidasa bo'ladi" },
                { text: "o'lgan odamni tiriltiradigan darajada shirin ekan rahmat 🪓🪓" }
            ]
        }
    ]);

    const clickLikes = (postId) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === postId ? { ...post, likes: post.likes + 1 } : post
            )
        );
    };

    return (
        <>
            {posts.map(item => (
                <div className="post" key={item.id}>
                    <div className="post-header">
                        <img src={item.authorImg} alt="" />
                        <p>post title</p>
                    </div>
                    <div className="post-image">
                        <img src={item.contentImg} alt="" />
                    </div>
                    <div className="post-media">
                        <div className="post-media__like">
                            <i
                                className="fa-regular fa-heart"
                                onClick={() => clickLikes(item.id)}
                            ></i>
                            <p>{item.likes}</p>
                        </div>
                        <i className="fa-regular fa-comment"></i>
                        <i className="fa-regular fa-bookmark"></i>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Post;
