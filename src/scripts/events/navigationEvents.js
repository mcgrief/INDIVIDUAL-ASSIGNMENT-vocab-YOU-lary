import {
  getWords, htmlFilter, cssFilter, javascriptFilter
} from '../../api/wordsdata';
import showVocab from '../components/pages/words';
import signOut from '../helpers/auth/signOut';
import addVocabForm from '../components/form/addWord';

const navigationEvents = (uid) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-lang').addEventListener('click', () => {
    getWords(uid).then((wordArray) => showVocab(wordArray));
  });

  document.querySelector('#html').addEventListener('click', () => {
    htmlFilter(uid).then((htmlArray) => showVocab(htmlArray));
  });

  document.querySelector('#css').addEventListener('click', () => {
    cssFilter(uid).then((cssArray) => showVocab(cssArray));
  });

  document.querySelector('#javascript').addEventListener('click', () => {
    javascriptFilter(uid).then((jsArray) => showVocab(jsArray));
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('addWord')) {
      addVocabForm();
      // console.warn('add a fucking form');
    }
  });
};

export default navigationEvents;
