import { Paper, Box, Avatar, Typography, Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import {formatDistance, subDays} from 'date-fns'
import { useNavigate } from "react-router-dom";

const UserItem = ({ user }) => {
    const navigate = useNavigate()
    return (
        <Paper elevation={1} sx={{ mb: 1, border: '0.1px solid black', borderRadius: 0.5, pl: 1.5, pt: 1, pb: 1, pr: 1.5 , display: "flex",justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Avatar
                    sx={{ bgcolor: deepPurple[600] }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                >
                    B
                </Avatar>

                <Typography sx={{ml: 1.5}}>{user.email}</Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center'}}>
                {user.is_admin && <Typography sx={{ml: 1.5, color: 'red'}}>Admin</Typography>}
                {(user.is_author && !user.is_admin)&& <Typography sx={{ml: 1.5, color: 'blue'}}>Author</Typography>}
                {(!user.is_author && !user.is_admin)&& <Typography sx={{ml: 1.5, color: 'grey'}}>Normal</Typography>}

            </Box>

            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Typography>{formatDistance(subDays(new Date(), 6), new Date(), { addSuffix: true })}</Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Button
                    sx={{ml: 'auto'}}
                    onClick={() => navigate(`/user/${user._id}`)}
                >
                    Edit
                </Button>
            </Box>
        </Paper>
    );
}

export default UserItem;