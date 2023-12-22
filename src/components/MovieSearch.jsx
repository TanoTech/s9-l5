import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-bootstrap';
import './MoviesDisplay.css'

class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle: '',
            searchResults: [],
        };
    }

    handleInputChange = (event) => {
        this.setState({ movieTitle: event.target.value });
    };

    handleSearch = async (event) => {
        event.preventDefault();
        const { movieTitle } = this.state;
        const apiKey = '2b8e11c2';
        const apiUrl = `http://www.omdbapi.com/?s=${movieTitle}&apikey=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                if (data.Search) {
                    this.setState({ searchResults: data.Search });
                } else {
                    this.setState({ searchResults: [] });
                }
            } else {
                console.error('Errore nella richiesta API');
            }
        } catch (error) {
            console.error('Errore nella richiesta API', error);
        }
    };

    render() {
        const { movieTitle, searchResults } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <input
                        type="text"
                        value={movieTitle}
                        onChange={this.handleInputChange}
                        placeholder="Search a movie..."
                    />
                    <button type="submit"><FontAwesomeIcon icon={faSearch} className="icons text-white" /></button>
                </form>
                {searchResults.length > 0 && (

                    <Col xs={6} md={4} lg={2}>
                        <div>
                            <h4 className='text-white'>Results</h4>
                        </div>
                        <div className='d-flex movieFlex mb-3'>
                            {searchResults.map((movie, index) => (
                                <img key={index} src={movie.Poster} alt={movie.Title} />
                            ))}
                        </div>
                    </Col>
                )}
            </div>
        );
    }
}

export default MovieSearch;
