import React from 'react';
import '../css/Widgets.css';

function Widgets() {
    return (
        <div className='widgets'>
            <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjesus.gutierrez.37625843%2Fposts%2F4591467397606953&show_text=true&width=500"
                width="350"
                height="100%"
                style={{ border:"none", overflow:"hidden" }}
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
             ></iframe>

            {/* <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjesus.gutierrez.37625843%2Fposts%2F4652573821496310&show_text=true&width=500"
                width="350"
                height="100%"
                style={{ border:"none", overflow:"hidden" }}
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
             ></iframe> */}
        </div>
    );
};

export default Widgets;
