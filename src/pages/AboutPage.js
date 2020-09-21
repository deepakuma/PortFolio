 
import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Deepa Kumari. I'm a front-end web developer with experience in HTML, CSS, JAVASCRIPT.</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with React, SQL and PHP</p>

            </Content>
        </div>
    );

}

export default AboutPage;