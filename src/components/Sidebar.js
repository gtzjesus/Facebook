import React from 'react';
import SidebarRow from '../sidebar/SidebarRow.js'
import '../css/Sidebar.css';
import { Chat, EmojiFlags, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useStateValue } from '../StateProvider';

function Sidebar() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className='sidebar'> 
            <SidebarRow
                src={user.photoURL}
                title={user.displayName}
             />
            <SidebarRow
                Icon={People}
                title="Friends"
            />
            <SidebarRow
                Icon={EmojiFlags}
                title="Pages"
            />
            <SidebarRow
                Icon={Chat}
                title="Messenger"
            />
            <SidebarRow
                Icon={Storefront}
                title="Marketplace"
            />
            <SidebarRow
                Icon={VideoLibrary}
                title="Videos"
            />
            <SidebarRow
                Icon={ExpandMore}
                title="See more"
            />
        </div>
    );
};

export default Sidebar;
