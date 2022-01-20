import React from 'react';
import { Avatar } from '@mui/material';
import '../css/SidebarRow.css';

function SidebarRow({ src, Icon, title}) {
    return (
        <div className='sidebar__row'>
            {src && <Avatar sx={{ height: '25px', width: '25px' }} src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
};

export default SidebarRow;
