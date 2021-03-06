import $ from 'jquery';

const axios = require('axios');

(async function login() {
  $('#btn_login').on('click', async (event) => {
    try {
      const response = await axios.post('/login', {
        username: $('#username').val(),
        password: $('#password').val(),
      });

      // Temprarily redirect to blog
      document.location.href = '/blog';


      console.log(response);
    } catch (error) {
      console.error(error);
    }
    event.preventDefault();
    return false;
  });
}());
