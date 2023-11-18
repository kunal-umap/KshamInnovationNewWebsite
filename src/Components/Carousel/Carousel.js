import React from 'react';
import './Carousel.css';
import { items } from './Data';
import { ReactComponent as ArrowLeft } from '../../assets/Sgvs/chevron-left-solid.svg';
import { ReactComponent as ArrowRight } from '../../assets/Sgvs/chevron-right-solid.svg';
import { ReactComponent as Circle } from '../../assets/Sgvs/circle-solid.svg';
const inactiveColour = 'hsla(221, 0%, 88%, 0.81)';
const activeColour = 'hsla(45, 94%, 60%, 1)';

class Carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            leftCard: 0,
            activeIndex: 0,
            rightCard: 0,
            arrayLength: 0
        };
        this.getLength = this.getLength.bind(this);
        this.activatePreviousSlide = this.activatePreviousSlide.bind(this);
        this.activateNextSlide = this.activateNextSlide.bind(this);
    }
    componentDidMount() { // gets index of active card from imported data and sets state
        let length = this.getLength();
        for (var i = 0; i < length; i++) {
            if (items[i].status === 'active') {
                this.setState({
                    leftCard: i - 1,
                    activeIndex: i,
                    rightCard: i + 1,
                    arrayLength: length
                });
            }
        }
    }
    getLength() { // calculating length of imported array
        let length = 0;
        // eslint-disable-next-line 
        for (var i in items) {
            length++;
        }
        return length;
    }
    activatePreviousSlide() {
        let leftIndex = 0;
        if (this.state.leftCard - 1 === -1) { // checking for out of bounds
            leftIndex = this.state.arrayLength - 1; // set left to last index
        }
        else {
            leftIndex = this.state.leftCard - 1; // moving back by one card
        }
        this.setState({
            rightCard: this.state.activeIndex,
            activeIndex: this.state.leftCard,
            leftCard: leftIndex
        })
    }
    activateNextSlide() {
        let rightIndex = 0;
        if (this.state.rightCard + 1 === this.state.arrayLength) { // checking for out of bounds
            rightIndex = 0; // set rightCard to beginning of array
        }
        else {
            rightIndex = this.state.rightCard + 1; // moving forward by one card
        }
        this.setState({
            leftCard: this.state.activeIndex,
            activeIndex: this.state.rightCard,
            rightCard: rightIndex
        })
    }
    render() {
        var trackerArray = [];
        for (var i = 0; i < this.state.arrayLength; i++) {
            if (i === this.state.activeIndex) {
                trackerArray.push(<div className='circle'> <Circle fill={activeColour} /> </div>);
            }
            else {
                trackerArray.push(<div className='circle'> <Circle fill={inactiveColour} /> </div>);
            }

        }
        return (
            <div className="carousel-container">
                <div className="cards">
                    <div className="card leftCard">
                        <div className="text">
                            <h3 className="name">{items[this.state.leftCard].name} </h3>
                            <p className="testimony">{items[this.state.leftCard].quote}</p>
                        </div>
                    </div>
                    <div className="card active">
                        <span>
                            <div className="text">
                                <h3 className="name">{items[this.state.activeIndex].name}</h3>
                                <p className="testimony">{items[this.state.activeIndex].quote}</p>
                            </div>
                            <div className="arrow-container">
                                <ArrowLeft className="arrow arrow-left" fill="hsla(45, 94%, 60%, 1)" onClick={this.activatePreviousSlide.bind(this)}></ArrowLeft>
                                <ArrowRight className="arrow arrow-right" fill="hsla(45, 94%, 60%, 1)" onClick={this.activateNextSlide.bind(this)}></ArrowRight>
                            </div>
                        </span>
                    </div>
                    <div className="card rightCard">
                        <div className="text">
                            <h3 className="name">{items[this.state.rightCard].name}</h3>
                            <p className="testimony">{items[this.state.rightCard].quote}</p>
                        </div>
                    </div>
                </div>
                <div className="tracker">
                    {trackerArray}
                </div>
            </div>
        )
    }
}

export default Carousel;