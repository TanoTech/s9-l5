import React, { Component } from 'react';
import axios from 'axios';

class PostComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      rate: 1,
    };
  }

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  handleRateChange = (e) => {
    this.setState({ rate: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const commentData = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.imdbID,
    };

    const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/';
    const authToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg1OGI0NWI5ODkwODAwMTg0ODg3NDkiLCJpYXQiOjE3MDMyNTA3NTcsImV4cCI6MTcwNDQ2MDM1N30.mjmAWkGSn_s6mRwnEUVxgk95uQYjNGsi3kdhffD0n1g';

    axios.post(apiUrl, commentData, {
      headers: {
        'Authorization': authToken,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Risposta dalla richiesta POST:', response.data);
        // Aggiungi eventuali azioni aggiuntive dopo l'invio del commento, come l'aggiornamento dell'interfaccia utente.
      })
      .catch((error) => {
        console.error('Errore durante la richiesta POST:', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Invia un Commento</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="comment">Commento:</label>
            <textarea
              id="comment"
              name="comment"
              value={this.state.comment}
              onChange={this.handleCommentChange}
            />
          </div>
          <div>
            <label htmlFor="rate">Rate:</label>
            <input
              type="number"
              id="rate"
              name="rate"
              value={this.state.rate}
              onChange={this.handleRateChange}
            />
          </div>
          <button type="submit">Invia Commento</button>
        </form>
      </div>
    );
  }
}

export default PostComment;
