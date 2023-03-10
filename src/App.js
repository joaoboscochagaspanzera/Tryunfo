import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const MAXPOINT = 90;
const MAXSUM = 210;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;

    const isFormValid = cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardAttr1.length > 0
      && cardAttr2.length > 0
      && cardAttr3.length > 0
      && (cardAttr1 <= MAXPOINT && cardAttr1 >= 0)
      && (cardAttr2 <= MAXPOINT && cardAttr2 >= 0)
      && (cardAttr3 <= MAXPOINT && cardAttr3 >= 0)
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= MAXSUM;
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ !isFormValid }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </>
    );
  }
}

export default App;
