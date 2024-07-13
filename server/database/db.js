import mongoose from 'mongoose';
import dotenv  from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-orcozui-shard-00-00.ngxzh6u.mongodb.net:27017,ac-orcozui-shard-00-01.ngxzh6u.mongodb.net:27017,ac-orcozui-shard-00-02.ngxzh6u.mongodb.net:27017/?ssl=true&replicaSet=atlas-109x9q-shard-0&authSource=admin&retryWrites=true&w=majority&appName=VartaLap`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;