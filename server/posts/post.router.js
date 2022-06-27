import Router from '@koa/router'
import { create, get, getById, deltePost, updatePost } from './post.api.js';

const postRouter = new Router({
    prefix:'/posts'
});

postRouter.get('/', async (ctx) => {
    ctx.response.status = 200;
    ctx.body = await get();
});

postRouter.get('/:id', async(ctx) => {
    const {id} = ctx.params;
    ctx.response.status = 200;
    ctx.body =await getById(id);
});

postRouter.post('/',async (ctx) => {
    const {title, description,user} = ctx.request.body;
    ctx.response.status = 200;
    ctx.body =await create({title,description,user});
});

postRouter.put('/:id', async ctx => {
    const id = ctx.params.id;

    let post = ctx.request.body;
    post = await updatePost(id,post);
    ctx.response.status = 200;
    ctx.body = post;
})

postRouter.delete('/:id', async (ctx) => {
    const id = ctx.params.id;
    await deltePost(id);
    ctx.response.status = 200;
    ctx.body = ({message : "Post deleted"});
})

export default postRouter;

