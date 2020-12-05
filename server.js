const Koa = require('koa');
const http = require('http');

const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Simple app</title>
    </head>
    <body>
        <div id="app">
        <script src="/assets/Home.js"></script>
        <script src="/assets/client.js"></script>
    </body>
    </html>`;
});

http.createServer({}, app.callback()).listen(3005, () => {
    console.log({ msg: `Fake Proxy Server start on port: 3005` });
});
