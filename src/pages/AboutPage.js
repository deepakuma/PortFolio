 
import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Deepa Kumari. I'm a front-end web developer with experience in HTML, CSS, JAVASCRIPT, PHP, MYSQL and React.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with React, Express JS, and PHP</p>

            <p>My latest project, This portfolio, is a cookbook for developers.  it out </p>

    
            </Content>
        </div>
    );

}

export default AboutPage;