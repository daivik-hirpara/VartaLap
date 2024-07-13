import { useContext } from "react";
import { Box ,Typography,styled} from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";

const ImageContainer =styled(Box)`
    display:flex;
    justify-content: center;
`;
    
const Image = styled('img')({
    widht: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
});

const BoxWrraper =styled(Box)`
    background: #ffffff;
    padding : 12px 30px 2px;
    box-shadow: 0 3px 1px rgba(0,0,0,0.08);
    & : first-child{
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    }
    & : last-child{
        margin: 14px 0;
        color: #4a4a4a;
    }
`;

const DescriptionContainer =styled(Box)`
    padding : 15px 20px 28px 30px;
    &>p{
        font-size : 13px;
        color: #8696a0;
    }
`;


const Profile =()=>{

    const {account} = useContext(AccountContext);

    return(
       <>
            <ImageContainer>
                <Image src={account.picture} alt="dp"></Image>
            </ImageContainer>
            <BoxWrraper>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrraper>
            <DescriptionContainer>
                <Typography>This is not your username or pin. This name will be visible to your VartaLap contacts </Typography>
            </DescriptionContainer>
            <BoxWrraper>
                <Typography>About</Typography>
                <Typography>Eat! Sleep! Code! Repeat!</Typography>
            </BoxWrraper>
       </>
    )
}
export default Profile;