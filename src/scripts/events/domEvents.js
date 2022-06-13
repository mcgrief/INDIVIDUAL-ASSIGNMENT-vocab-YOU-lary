import addVocabForm from '../components/form/addWord';
import { deleteWords, getSingleWord } from '../../api/wordsdata';
import showVocab from '../components/pages/words';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey)
        .then((wordObj) => addVocabForm(wordObj));
    }

    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteWords(firebaseKey, uid).then((wordArray) => showVocab(wordArray));
      }
    }

    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((wordObj) => addVocabForm(wordObj));
    }
  });
};

export default domEvents;
