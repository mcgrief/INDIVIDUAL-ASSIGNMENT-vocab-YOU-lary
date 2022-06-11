import renderToDom from '../../helpers/renderToDom';

const addVocabForm = (word = {}) => {
  const domString = `
<form>
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
    <option value="html-tag">HTML</option>
    <option value="css-tag">CSS</option>
    <option value="js-tag">JavaScript</option>
  </select>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

  renderToDom('#form-containter', domString);
};

export default addVocabForm;
