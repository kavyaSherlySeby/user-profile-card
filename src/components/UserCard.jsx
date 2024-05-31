import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const UserCard = ({ userData }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={userData.avatar}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {userData.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {userData.biography}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default UserCard