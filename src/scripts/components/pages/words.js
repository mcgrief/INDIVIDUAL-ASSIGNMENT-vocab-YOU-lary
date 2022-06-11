import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const showVocab = (array) => {
  clearDom();

  //  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';
  //  renderToDOM('#add-button', btnString);
  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
      <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
      <div class="card-word">${item.title}</div>
      <div class="card-body">
        <h5 class="card-lang">${item.definition}</h5>
        <hr><p class="card-def">${item.language}</p>
        <hr><i id="delete-card-btn--${item.firebaseKey}" class="btn btn-dark fas fa-trash-alt"></i>
      </div>
      `;
    });
    renderToDom('#main-container', domString);
  }
};
export default showVocab;
