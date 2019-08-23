const path = require('path');

const createRender = options => {
  const { renderer } = options;
  if(typeof renderer !== 'function')
    throw new TypeError('[kelp-render] "renderer" must be a function');
  return async (view, state, opts) => {
    opts = Object.assign({}, options, opts);
    const { templates = '', extension, cache } = opts;
    const filename = path.join(templates, view + (extension ? `.${extension}` : ''));
    var render = cache && cache.get(filename);
    if(!render) {
      render = await renderer(filename, opts);
      cache && cache.set(filename, render);
    }
    return render(state);
  };
};

module.exports = createRender;