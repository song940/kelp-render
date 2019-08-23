const http = require('http');
const kelp = require('kelp');
const render = require('..');

const app = kelp();

app.use(render({
  extension: 'xxx',
  renderer(filename, options) {
    console.log(filename, options);
    return data => {
      return `${filename}: ` + JSON.stringify(data);
    }
  }
}));

app.use((req, res) => {
  res.render('index', { hello: 'world' });
});

http.createServer(app).listen(3000);

