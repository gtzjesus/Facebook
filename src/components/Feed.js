import React, { useEffect } from 'react';
import '../css/Feed.css';
import StoryReel from '../feed/StoryReel.js';
import MessageSender from '../message/MessageSender.js';
import Post from '../post/Post.js';
import db from '../firebase';
import { useState } from 'react';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ));
    }, []);

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    );
};

export default Feed;
