import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './features/app/index';
import configureStore from './core/store/store';

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const context = {};

    const renderRoot = () => ReactDOMServer.renderToString(
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />,
    );

    store.runSaga().done.then(() => {
      const htmlString = renderRoot();

      if (context.url) {
        res.writeHead(302, {
          Location: context.url,
        });
        res.end();
        return;
      }

      const preloadedState = store.getState();

      res.send(
        `<!doctype html>
          <html>
            <head>
              <meta charset=utf-8>
              <title>React Server Side Rendering</title>
              ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
            </head>
            <body>
              <div id="root">${htmlString}</div>
              <script>
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
              </script>
              <script src="/js/main.js"></script>
            </body>
          </html>
      `,
      );
    });

    renderRoot();

    store.close();
  };
}
