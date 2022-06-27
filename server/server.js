import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import postRouter from './posts/post.router.js';
import cors from 'koa2-cors';
import mongoClient from './db/mongoClient.js';

const app = new Koa();
app.use(cors());
app.use(bodyParser())

//register routes
app.use(postRouter.routes())
    .use(postRouter.allowedMethods());

app.use((ctx) => {
    ctx.set('Content-Type', 'text/html');
    ctx.body = "Resource you are looking for not found";
    ctx.status = 404;
});

app.listen(3000,()=>{console.log('App running on port 3000..')});
