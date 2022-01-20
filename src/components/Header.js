import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../css/Header.css';
import { StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@mui/icons-material';
import { useStateValue } from '../StateProvider';

function Header() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className='header'>
            <div className='header__left'>
                <img
                    src='https://media.wired.com/photos/5954a23cce3e5e760d52d91a/master/w_2560%2Cc_limit/facebook_2015_logo.jpg'
                    alt=''
                />
                <div className='header__input'>
                    <SearchIcon opacity="0.5" />
                    <input placeholder='Search Facebook' type='text' />
                </div>
            </div>

            <div className='header__center'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <FlagIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <SubscriptionsOutlined fontSize='large' />
                </div>
                <div className='header__option'>
                    <StorefrontOutlined fontSize='large' />
                </div>
                <div className='header__option'>
                    <SupervisedUserCircle fontSize='large' />
                </div>
            </div>

            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL} alt='Profile' sx={{ height: '25px', width: '25px' }} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon sx={{ height: '20px', width: '20px' }} />
                </IconButton>
                <IconButton>
                    <ForumIcon sx={{ height: '20px', width: '20px' }} />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon sx={{ height: '20px', width: '20px' }} />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon sx={{ height: '20px', width: '20px' }} />
                </IconButton>
            </div>
        </div>
    );
};

export default Header;
