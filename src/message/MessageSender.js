import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import '../css/MessageSender.css';
import { InsertEmoticon, PhotoLibrary } from '@mui/icons-material';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase/compat/app';
import db from '../firebase';

function MessageSender() {

    const[input, setInput] = useState('');
    const[imageUrl, setImageUrl] = useState('');
    const [{user}, dispatch] = useStateValue();

    // Stops the Refresh Behavior for React
    const handleSubmit = (e) => {
        e.preventDefault();
        // Some Clever DB stuff
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.
            serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });
        // Reset the values
        setInput("");
        setImageUrl("");
        
    };

    return (
        <div className='message__sender'>
            <div className='message__sender__top'>
                <Avatar sx={{ height: '30px', width: '30px' }} src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)} 
                        className='message__sender__input'
                        placeholder={`What's on your mind, ${user.displayName}?`}
                    />
                    {/* <input
                        value={setImageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        onpaste="return true"
                        placeholder='image URL (Optional)'
                        
                    /> */}
                    <button onClick={handleSubmit}
                            type='submit'>
                            Submit
                    </button>
                </form>
            </div>
            <div className='message__sender__bottom'>
                <div className='message__sender__option'>
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className='message__sender__option'>
                    <PhotoLibrary style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='message__sender__option'>
                    <InsertEmoticon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
};

export default MessageSender;
