//import {randomBytes} from 'crypto'
import { save, getAll,getDataById, update, removeById } from './post.dao.js';
//const posts = new Map();

// const generateID = (size = 8) => {
//     return new Promise((resolve, reject) => {
//         randomBytes(size, (err, buff) => {
//             if(err){
//                 return reject(err);
//             }else{
//                 resolve (buff.toString('hex').slice(0, 8));
//             }
//         });
//     });
// };

const create =async ({title = "missing title", description = "missing description",user = "test user"}) => {
    const post = {title, description, user,posted: new Date()};
    const id = await save(post);
    return post;
};

const get = () => {
    return getAll() ;
};

const getById = (id) => {
    // if(posts.has(id)){
    //     return posts.get(id);
    // }

    // throw new Error(`Post not found for the ID : ${id}`);

    return getDataById(id);
};

const deltePost = async id => {
    return await removeById(id);
}

const updatePost = async (id, {title,description,user,posted}) => {
    return await update(id, {title,description,user,posted});
}

export {create, get, getById, deltePost, updatePost};