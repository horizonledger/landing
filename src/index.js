console.log("start");
const template = require('./templates/index.hbs');
document.body.innerHTML = template({ title: 'Handlebars Webpack Example', message: 'Hello, Handlebars!' });
