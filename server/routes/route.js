import express from 'express';

import { addUser, getUsers} from '../controller/user-controller.js';
import { newconversation , getConversation } from '../controller/conversation-controller.js';
import { newMessage , getMessages} from '../controller/message-controller.js';

const route = express.Router();

route.post('/add',addUser);
route.get('/users',getUsers);

route.post('/conversation/add',newconversation);
route.post('/conversation/get',getConversation);


route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessages);
/*
route.post('/file/upload', upload.single('file'), uploadImage);
route.get('/file/:filename', getImage);*/

export default route;