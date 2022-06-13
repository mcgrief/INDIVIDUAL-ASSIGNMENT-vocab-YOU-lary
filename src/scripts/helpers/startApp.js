import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/buttons/logoutButton';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { getWords } from '../../api/wordsdata';
import showVocab from '../components/pages/words';

const startApp = (user) => {
  domBuilder();
  logoutButton();
  domEvents(user.uid);
  navBar();
  navigationEvents(user.uid);
  formEvents(user.uid);
  getWords(user.uid).then((wordsArray) => showVocab(wordsArray));
};

export default startApp;
