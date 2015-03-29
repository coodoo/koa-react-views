
## Goal

Use react as template engine in koa applications

## Why?

It's a very powerful and robust approach to build application views with components, React and JSX helps to make this happen in a more enjoyable way, so why not?

## Attention

At the time of writing (Mar. 29, 2015), one key npm module called `consolidate` is yet to be updated to support react as a template engine, fortunately [yeojz](https://github.com/yeojz/consolidate.js/blob/support-reactjs-templates/package.json) send over a PR which provides just that, you will have to install from his repo directly in the mean time, command here:

``````javascript
npm install git+https://git@github.com/yeojz/consolidate.js.git#support-reactjs-templates
```

Once installed, replace the one in `node_modules/co-render/node_modules` with the patched one.