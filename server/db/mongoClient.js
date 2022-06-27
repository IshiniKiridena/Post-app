import {MongoClient} from 'mongodb';

const URI = 'mongodb://localhost:27017/posts'

const mongoClient = new MongoClient(URI);

mongoClient.connect().then(() => {
    console.log('Connected to MongoDB...');
});

export default mongoClient;