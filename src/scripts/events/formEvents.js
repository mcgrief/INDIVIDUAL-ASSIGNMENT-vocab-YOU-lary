import { createWords } from '../../api/wordsdata';
import showVocab from '../components/pages/words';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.includes('submit-card')) {
      const vocabObj = {
        firebaseKey: '',
        language: document.querySelector('#select-lang').value,
        title: document.querySelector('#vocabTitle').value,
        description: document.querySelector('#description').value,
        uid,
        time: new Date().toLocaleString()
      };
      createWords(vocabObj).then((wordsArray) => showVocab(wordsArray));
    }
  });
};

export default formEvents;
