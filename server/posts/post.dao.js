import mongoClient from "../db/mongoClient.js";
import { ObjectId } from "mongodb";

const collection = mongoClient.db('posts').collection('posts');

const save = async (post) => {
   const inserted = await collection.insertOne(post);
   return inserted.insertedId;
};

const getAll = async () => {
    const cursor =await collection.find();
    const posts = [];
    await cursor.forEach( doc => {
        const {_id:id,title, description, user, posted} = doc;
        posts.push({id,title,description,user,posted});
    });
    return posts;
};

const getDataById = async (findId) => {
    const doc = await collection.findOne({ _id: ObjectId(findId)})
    const {_id:id, title, description, user, posted} = doc;
    return {id, title, description, user, posted };
};

const update = async(id, {title, description, user, posted}) => {
    const result = await collection.replaceOne({_id:ObjectId(id)}, {title, description,user,posted});
    return { title, description, user, posted };
}

const removeById = async id => {
    await collection.deleteOne({_id:ObjectId(id)});
}

export { save, getAll, getDataById, update, removeById };