import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <>
        <label>
          Nome:
          <input data-testid="name-input" type="text" id="" name="" />
        </label>
        <br />
        <label>
          Descrição:
          <input data-testid="description-input" type="textarea" id="" name="" />
        </label>
        <br />
        <label>
          Atributo 1:
          <input data-testid="attr1-input" type="number" id="" name="" />
        </label>
        <br />
        <label>
          Atributo 2:
          <input data-testid="attr2-input" type="number" id="" name="" />
        </label>
        <br />
        <label>
          Atributo 3:
          <input data-testid="attr3-input" type="number" id="" name="" />
        </label>
        <br />
        <label>
          Imagem:
          <input data-testid="image-input" type="text" id="" name="" />
        </label>
        <br />
        <label>
          Raridade:
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label>
          Super Trunfo:
          <input data-testid="trunfo-input" type="checkbox" id="" name="" />
        </label>
        <br />
        <button data-testid="save-button">Salvar</button>
      </>
    );
  }
}

export default Input;
