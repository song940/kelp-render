## kelp-render ![npm](https://badge.fury.io/js/kelp-render.png)

render template for kelp

### Installation
````
$ npm install kelp-render --save
````

### Example

```js
const http   = require('http');
const kelp   = require('kelp');
const render = require('kelp-render');

const app = kelp();

app.use(render({
  extension: 'tmpl',
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
```

views/index.tmpl
```
Hello $name!
```

#### jade

````javascript
app.use(render({
  templates: 'views',
  extension: 'jade' ,
  renderer : jade.compileFile
}));
````

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2016 lsong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
