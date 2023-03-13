import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    console.log(hasTrunfo);
    return (
      <>
        <label>
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label>
          Descrição:
          <input
            data-testid="description-input"
            type="textarea"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label>
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label>
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label>
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label>
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label>
          Raridade:
          <select
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label>
          Super Trunfo:
          { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho </p> : <input
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          /> }
        </label>
        <br />
        <input
          type="button"
          value="Salvar"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
