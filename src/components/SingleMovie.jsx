import React from "react";
import axios from "axios";
import { Col, Modal } from 'react-bootstrap';
import GetComment from './GetComment'
import PostComment from "./PostComment";

class SingleMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedMovie: null
        };
    }

    openModal = (movie) => {
        this.setState({ showModal: true, selectedMovie: movie });
    };

    closeModal = () => {
        this.setState({ showModal: false, selectedMovie: null });
    };

    componentDidMount() {
        const { movieTitles } = this.props;
        const apiKey = '2b8e11c2';

        const movieFetch = movieTitles.map(movieTitle => {
            const apiUrl = `http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;
            return axios.get(apiUrl);
        });

        Promise.all(movieFetch)
            .then(res => {
                const movieDataArray = res.map(res => res.data);
                this.setState({ movieData: movieDataArray });
            })
            .catch(error => {
                console.error("Errore nella richiesta API:", error);
            });

    }

    render() {
        const { movieData, showModal, selectedMovie } = this.state;

        return (
            <React.Fragment>
                {movieData ? (
                    movieData.map((movie, index) => (
                        <Col xs={6} md={4} lg={2} key={index}>
                            <img className='img-fluid' src={movie.Poster} alt={movie.Title} onClick={() => this.openModal(movie)}/>
                        </Col>
                    ))
                ) : (
                    <p>Caricamento in corso...</p>
                )}

                <Modal show={showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedMovie?.Title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PostComment data={SingleMovie} />
                    </Modal.Body>
                </Modal>


            </React.Fragment>
        );
    }
}

export default SingleMovie;
