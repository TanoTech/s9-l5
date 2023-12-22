import React from 'react';
import axios from 'axios';

class GetComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get("https://striveschool-api.herokuapp.com/api/movies/comment/", {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg1OGI0NWI5ODkwODAwMTg0ODg3NDkiLCJpYXQiOjE3MDMyNTA3NTcsImV4cCI6MTcwNDQ2MDM1N30.mjmAWkGSn_s6mRwnEUVxgk95uQYjNGsi3kdhffD0n1g"
                }
            });
            this.setState({ comments: response.data });
        } catch (error) {
            console.error("Errore durante il fetch dei commenti:", error);
            this.setState({ error });
        }
    }

    render() {
        const {comments} = this.state;

        return (
            <div>
                <h2>Commenti:</h2>
                {<p>Si è verificato un errore durante il caricamento dei commenti.</p>}
                <ul>
                    {comments.map(comment => (
                        <li key={comment._id}>{comment.author}: {comment.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default GetComment;
