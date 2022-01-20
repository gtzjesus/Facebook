import React from 'react';
import Story from './Story';
import '../css/StoryReel.css'

function StoryReel() {
    return (
        <div className='story__reel'>
            <Story
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6KIrhCIXDYbfObaAoOfUYJqURjihF53y07g&usqp=CAU'
                profileSrc='https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png'
                title='Brianna'
            />
            <Story
                image='https://cookwithrenu.com/wp-content/uploads/2020/08/North-Indian-Vegetarian-lunch-Thali_Featured-Image.jpg'
                profileSrc='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                title='Ryan'
            />
            <Story
                image='https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/09/26/family-caribbean-vacations-sea-cancun.jpg.rend.hgtvcom.616.462.suffix/1491581269755.jpeg'
                profileSrc='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                title='Troy'
            />
            <Story
                image='https://static.toiimg.com/thumb/msid-86368129,width-1200,height-900,resizemode-4/.jpg'
                profileSrc='https://www.verywellmind.com/thmb/JmTki9UferU_g6jfS76TuZ-mrP4=/1412x1412/smart/filters:no_upscale()/happy-relaxed-man-wearing-glasses-ee2f1576532643e0845952e209bad8ee.jpg'
                title='Richard'
            />
            <Story
                image='https://visit-el-paso-production.s3.amazonaws.com/places/images/000/002/423/optimized/ajs.jpg?1617809032'
                profileSrc='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXN8ZW58MHx8MHx8&w=1000&q=80'
                title='Miriam'
            />
            <Story
                image='https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfog-twistedcyclone-1400x600-1.jpg'
                profileSrc='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d3871cff1176b0008977f70%2FFaceApp-CEO-Yaroslav-Goncharov-with-the-Hollywood-filter-on%2F960x0.jpg%3Ffit%3Dscale'
                title='Jacob'
            />
        </div>
    );
};

export default StoryReel;
