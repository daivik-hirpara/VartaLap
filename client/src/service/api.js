import axios from  'axios';

const url= 'http://localhost:8000';

export const addUser = async (data)=>{
    try{
        await axios.post(`${url}/add`,data)
    }
    catch(error){
        console.log('Error while addUser API', error.message);
    }
}
export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data
    } catch (error) {
        console.log('Error hai API me', error);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}

export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}



export const newMessage = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        console.log()
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

