import React from 'react';

import Card from '../components/Card';

import snake from '../assets/images/snake.png';
import calculator from '../assets/images/calculator.jpeg';
import chatlist from '../assets/images/chatlist.png';
import chaos from '../assets/images/chaos.jpeg';
import quiz from '../assets/images/quiz.png';
import covid from '../assets/images/covid.jpeg';
import mario from '../assets/images/mario.jpg';
import spin from '../assets/images/spin.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Snake game',
                    subTitle: 'Using Javascript, Html, CSS',
                    imgSrc: snake,
                    link: 'https://deepakuma.github.io/Snake-Game/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Calculator',
                    subTitle: 'Using Javascript, Html, CSS',
                    imgSrc: calculator,
                    link: 'https://deepakuma.github.io/Calculator/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Chatlist',
                    subTitle: 'Using HashMap, LinkedList, Javascript, Html, CSS',
                    imgSrc: chatlist,
                    link: 'https://deepakuma.github.io/ChatList/',
                    selected: false
                },
                {
                    id:3,
                    title: 'Chaos',
                    subTitle: 'Using Javascript',
                    imgSrc:chaos ,
                    link:'https://deepakuma.github.io/Javascript/',
                    selected: false

                },
                {
                    id:4,
                    title: 'Quiz-App',
                    subTitle: 'Using Javascript, Html, CSS',
                    imgSrc:quiz,
                    link:'https://deepakuma.github.io/Quiz-app/',
                    selected: false

                },
                 {
                    id:5,
                    title: 'Interactive-Mario',
                    subTitle: 'Using Javascript, Html, CSS',
                    imgSrc:mario ,
                    link:'https://deepakuma.github.io/interactive-maro/',
                    selected: false
                },
                  {
                    id:6,
                    title: 'Covid-Fighter',
                    subTitle: 'Using Javascript, Html, CSS',
                    imgSrc:covid ,
                    link:'https://deepakuma.github.io/covid-fighter/',
                    selected: false
                },
                {
                    id:7,
                    title: 'Spin-Win',
                    subTitle: 'Using Javascript, Html, CSS',
                    imgSrc:spin ,
                    link:'https://deepakuma.github.io/Spin/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
