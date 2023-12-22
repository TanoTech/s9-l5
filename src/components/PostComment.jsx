import React from "react";

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

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.state.rate <1 || this.state.rate > 5) {
      alert('Il rating deve essere un numero tra 1 a 5')
      return;
    }
  
    console.log("IMDB ID:", this.props.imdbID);  
  
    const commentData = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.imdbId,  
    };
  
    console.log("Dati del commento da inviare:", commentData); 
  
    const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/';
    const authToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg1OGI0NWI5ODkwODAwMTg0ODg3NDkiLCJpYXQiOjE3MDMyNTA3NTcsImV4cCI6MTcwNDQ2MDM1N30.mjmAWkGSn_s6mRwnEUVxgk95uQYjNGsi3kdhffD0n1g";  
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': authToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Risposta dalla richiesta POST:', responseData);
    } catch (error) {
      console.error('Errore durante la richiesta POST:', error);
    }
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
