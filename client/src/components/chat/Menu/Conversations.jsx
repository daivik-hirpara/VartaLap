import { useState, useEffect,useContext } from 'react';
import { Box,styled,Divider } from '@mui/material';
import { getUsers } from '../../../service/api';
import Conversation from './Conversation';

import { AccountContext } from '../../../context/AccountProvider';

const Conversations = ({text}) => {
    const [users, setUsers] = useState([]);

    const {account} = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getUsers();
            let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(fiteredData);
        }
        fetchData();
    }, [text]);

    return (
        <Box>
            {users.map(user => (
                user.sub!==account.sub &&
                <>
                <Conversation key={user.id} user={user} />
                <Divider/>
                </>
            ))}
        </Box>
    );
};

export default Conversations;
