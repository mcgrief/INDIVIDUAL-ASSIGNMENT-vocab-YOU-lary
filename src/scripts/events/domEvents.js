import addWord from '../components/form/addWord';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-card-btn')) {
      addWord({}, uid);
    }
  });
};
export default domEvents;
