import { useContext, useState, useEffect } from 'react';
import { AccountContext } from '../../../context/AccountProvider';

import { getConversation } from '../../../service/api';




import { Box } from '@mui/material';

import ChatHeader from './ChatHeader';
import Messages from './Messages';





const ChatBox = () => {

  
    const {account,person} = useContext(AccountContext);

    const [conversation, setConversation] = useState({});


    useEffect(() => {
        const getConversationDetails = async () => {
            console.log(person.sub); 
            let data = await getConversation({ senderId: account.sub, recieverId: person.sub });
            setConversation(data);
        }
        getConversationDetails();
    },[person.sub]);
    return (
        <Box style={{height : '75%'}}>
            <ChatHeader person={person}/>
            <Messages person={person} conversation={conversation} />
        </Box>
    )

}

export default ChatBox;