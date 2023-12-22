import React from 'react';
import axios from 'axios';

class PostComment extends React.Component {
    state = {
        newComment: {
            comment: "",
            rate: 0,
            elementId: this.props.data.imdbID, 
        },
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            newComment: {
                ...prevState.newComment,
                [name]: value
            }
        }));
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("https://striveschool-api.herokuapp.com/api/comments/", this.state.newComment, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg1OGI0NWI5ODkwODAwMTg0ODg3NDkiLCJpYXQiOjE3MDMyNTA3NTcsImV4cCI6MTcwNDQ2MDM1N30.mjmAWkGSn_s6mRwnEUVxgk95uQYjNGsi3kdhffD0n1g",
                }
            });
            console.log(response.data);
           
        } catch (error) {
            console.error("Errore durante l'invio del commento:", error);
            
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="comment">Commento:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={this.state.newComment.comment}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="rate">Valutazione:</label>
                    <input
                        type="number"
                        id="rate"
                        name="rate"
                        value={this.state.newComment.rate}
                        onChange={this.handleInputChange}
                        min="1"
                        max="5"
                    />
                </div>
                <button type="submit">Invia Commento</button>
            </form>
        );
    }
}

export default PostComment;
