import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/buttons/logoutButton';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import addVocabForm from '../components/form/addWord';
import { getWords } from '../../api/wordsdata';
import showVocab from '../components/pages/words';

const startApp = (user) => {
  domBuilder();
  navBar();
  addVocabForm();
  logoutButton();
  domEvents(user.id);
  formEvents(user.id);
  navigationEvents(user.id);
  getWords(user.id).then((wordsArray) => showVocab(wordsArray));
};

export default startApp;
