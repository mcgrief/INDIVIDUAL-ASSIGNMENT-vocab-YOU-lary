import {
  getWords, htmlFilter, cssFilter, javascriptFilter
} from '../../api/wordsdata';
import showVocab from '../components/pages/words';
import signOut from '../helpers/auth/signOut';

const navigationEvents = () => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-lang').addEventListener('click', () => {
    getWords().then((wordArray) => showVocab(wordArray));
  });
};

document.querySelector('#html-tag').addEventListener('click', () => {
  htmlFilter().then((htmlArray) => showVocab(htmlArray));
});

document.querySelector('#css-tag').addEventListener('click', () => {
  cssFilter().then((cssArray) => showVocab(cssArray));
});

document.querySelector('#js-tag').addEventListener('click', () => {
  javascriptFilter().then((jsArray) => showVocab(jsArray));
});

export default navigationEvents;
