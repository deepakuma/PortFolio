import React from 'react';

import Card from '../components/Card';

import snake from '../assets/images/snake.png';
import calculator from '../assets/images/calculator.jpeg';
import chatlist from '../assets/images/chatlist.png';
import chaos from '../assets/images/chaos.jpeg';
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