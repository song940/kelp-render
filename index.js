const createRender = require('./render');

module.exports = options => {
  const render = createRender(options);
  return function (req, res, next) {
    res.render = async (view, state, opts) => {
      const data = Object.assign({}, req.locals, state);
      const body = await render(view, data, opts);
      if (typeof body !== 'string')
        throw new TypeError(`[kelp-render] renderer must return a string`);
      res.end(body);
    };
    return next();
  };
};
