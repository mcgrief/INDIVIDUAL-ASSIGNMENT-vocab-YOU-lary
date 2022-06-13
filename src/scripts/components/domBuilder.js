import renderToDom from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container"></div>
    <div id="addWord"></div>
    <div id="form-container"></div>
    <div id="view"></div>
  `;

  renderToDom('#app', domString);
};

export default domBuilder;
