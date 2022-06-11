import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getWords = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createWords = (wordobj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/words.json`, wordobj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/words/${response.data.name}.json`, payload).then(() => {
        getWords().then(resolve);
      });
    }).catch(reject);
});

const htmlFilter = (uid) => new Promise((resolve, reject) => {
  getWords(uid).then((vocabCards) => {
    const html = vocabCards.filter((card) => card.language === 'html');
    resolve(html);
  }).catch((error) => reject(error));
});

const javascriptFilter = (uid) => new Promise((resolve, reject) => {
  getWords(uid).then((vocabCards) => {
    const javascript = vocabCards.filter((card) => card.language === 'javascript');
    resolve(javascript);
  }).catch((error) => reject(error));
});

const cssFilter = (uid) => new Promise((resolve, reject) => {
  getWords(uid).then((vocabCards) => {
    const css = vocabCards.filter((card) => card.language === 'css');
    resolve(css);
  }).catch((error) => reject(error));
});

export {
  getWords,
  createWords,
  htmlFilter,
  javascriptFilter,
  cssFilter,
};
