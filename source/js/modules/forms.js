import {formValidateAndSend} from './validation.js';

const feedbackForm = document.querySelector('.feedback__form');
const modalForm = document.querySelector('.modal__form');

export const forms = () => {
  formValidateAndSend(feedbackForm);
  formValidateAndSend(modalForm);
};
