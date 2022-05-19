import './style.scss';
import body from './init-body.html';
import app from './app.js';

export default () => {
  document.title = 'Title';
  document.body.outerHTML = body;
  app();
};
