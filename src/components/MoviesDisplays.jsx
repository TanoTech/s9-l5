import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faTh } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import SingleMovie from "./SingleMovie";
import './MoviesDisplay.css'

class MoviesDisplay extends React.Component {
    render() {
        return (
            <Container fluid>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <h2 className="mb-4 text-white">TV Shows</h2>
                        <div className="dropdown ml-4 mt-1">
                            <DropdownButton title="Genres" variant="secondary" size="sm" className="rounded-0" id="dropdownMenuButton" style={{ backgroundColor: "#221f1f" }}>
                                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                                <Dropdown.Item href="#">Drama</Dropdown.Item>
                                <Dropdown.Item href="#">Thriller</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faThLarge} className="icons text-white" />
                        <FontAwesomeIcon icon={faTh} className="icons text-white" />
                    </div>
                </div>
                <h4 className="text-white">⚔️J. R. R. Tolkien Saga⚔️</h4>
                <Row className='movieFlex'>
                    <SingleMovie movieTitles={['Lord', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Hobbit: An Unexpected Journey', 'The Hobbit: The Battle of the Five Armies', 'The Hobbit: The Desolation of Smaug']} />
                </Row>
                <h4 className="text-white">🤣Comedy🤣 </h4>
                <Row className='movieFlex'>
                    <SingleMovie  movieTitles={['Ricomincio da tre' ,'Totò, Peppino e la... malafemmina','Ricky Gervais: Humanity', 'Dave Chappelle: The Closer', 'The Fresh Prince of Bel-Air', 'American: The Bill Hicks Story']} />
                </Row>
                <h4 className="text-white">🛸 Lost in Space 🛸</h4>
                <Row className='movieFlex'>
                    <SingleMovie  movieTitles={['Alien', 'Aliens', 'Alien 3', 'Alien: Resurrection', 'Prometheus', 'Alien: Covenant']} />
                </Row>
            </Container>
        );
    }
}

export default MoviesDisplay;
