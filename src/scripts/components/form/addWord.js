import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const addVocabForm = (word = {}) => {
  clearDom();
  const domString = `
<form id="${word.firebaseKey ? `update-card--${word.firebaseKey}` : 'submit-card'}">
  <div class="mb-3">
    <label for="vocabTitle" class="form-label">Title</label>
    <input type="text" class="form-control" id="vocabTitle">
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="description">
  </div>
  <label for="vocabLang">Language/Tech</label>
  <select class="form-select" id="vocabLang">
    <option selected>${word.language || 'Select Language'}</option>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="javascript">JavaScript</option>
  </select>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

  renderToDom('#form-container', domString);
};

export default addVocabForm;
