import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getWords = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createWords = (wordObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/words.json`, wordObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/words/${response.data.name}.json`, payload).then(() => {
        getWords(wordObj.uid).then(resolve);
      });
    }).catch(reject);
});

const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteWords = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/words/${firebaseKey}.json`)
    .then(() => {
      getWords(uid).then((wordArray) => resolve(wordArray));
    }).catch((error) => reject(error));
});

const updateWords = (wordObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/words/${wordObj.firebaseKey}.json`, wordObj)
    .then(() => getWords(wordObj.uid).then(resolve))
    .catch((error) => reject(error));
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
  getSingleWord,
  deleteWords,
  updateWords,
  htmlFilter,
  javascriptFilter,
  cssFilter,
};
