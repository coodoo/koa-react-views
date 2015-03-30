
## Goal

Use reactjs as template engine in koa applications - which replaces jade, handlebar, ejs and all traditional templating systems - so that you can build web site's `view` with components.

## Why?

It's a very enjoyable expereince to build single page application with components, especially when using react and flux, so why not make that happen on server too?

## How?

All "template files" reside in `templates/` folder, and of course in this case it's just a bunch of jsx files. Also checkout `index.html` which serves as a placeholder for generated react component's content string, by using a html file it's much easier to put in everything else needed like `scripts` and `css` files there.

## Attention

There's a `npm-shrinkwrap.json` file which makes sure that `co-render` is using an updated version of `consolidate` (the underlying multi-template rendering engine) which supports react, do not remove it.

## Misc. 

There's an express version of this [here](https://github.com/reactjs/express-react-views).

I also make react works with a static site builder called `metalsmith` [here](https://github.com/coodoo/metalsmith-reactjs)

Yes, I love react *that* much I want to use it everywhere, call me paranoid :)

## Attribution

Thanks `@yeojz` and `@doowb` for making [this](https://github.com/tj/consolidate.js/pull/186#event-268030489) happen.