/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import { StaticRouter } from 'react-router-dom';
import App from './features/app';
import configureStore from './core/store/store';

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    // This context object contains the results of the render
    const context = {};

    const renderRoot = () => ReactDOMServer.renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <App
          context={context}
          location={req.url}
          Router={StaticRouter}
          store={store}
        />
      </Loadable.Capture>,
    );

    store.runSaga().done.then(() => {
      const htmlString = renderRoot();

      // context.url will contain the URL to redirect to if a <Redirect> was used
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

    // Do first render, starts initial actions.
    renderRoot();

    // When the first render is finished, send the END action to redux-saga.
    store.close();
  };
}
