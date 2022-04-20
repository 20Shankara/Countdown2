import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class Trivia extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
    this.handleCorrectClick = this.handleCorrectClick.bind(this);
    this.handleIncorrectClick = this.handleIncorrectClick.bind(this);
  }

  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=10')
    .then(res => res.json())
    .then(json => {
      this.setState ({
        isLoaded: true,
        items: json.results,
      })
    })
  }

  handleCorrectClick = (e) =>{
    e.target.style.color = 'green';
  }

  handleIncorrectClick = (e) =>{
    e.target.style.color = 'red';
  }

  renderQuestions(){
    let { isLoaded, items} = this.state;
    return(
      <div>
            {items.map(item => (
              <p key = {item.correct_answer}>
                <Typography variant = "h5" component = "h2">
                  {item.question}?
                </Typography>
                <p>
                  <Button variant = "outlined" onClick = {this.handleCorrectClick} >{item.correct_answer}</Button>
                  <Button variant = "outlined" onClick = {this.handleIncorrectClick}>{item.incorrect_answers[0]}</Button>
                  <Button variant = "outlined" onClick = {this.handleIncorrectClick}>{item.incorrect_answers[1]}</Button>
                  <Button variant = "outlined" onClick = {this.handleIncorrectClick}>{item.incorrect_answers[2]}</Button>
                </p>

              </p>
            ))}
      </div>
    );
  }
  render() {
    let { isLoaded, items} = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return(
        <div>
          {this.renderQuestions()}
        </div>
      );
    }
  }
}

ReactDOM.render(<Trivia />, document.getElementById("root"));