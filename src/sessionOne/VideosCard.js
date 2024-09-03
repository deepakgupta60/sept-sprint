import { Card, Typography, CardMedia, Button, CardActions,CardContent } from "@mui/material";

const VideosCard = ({cardImage, title}) => {
  return (
    <>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={cardImage}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
         
        </CardContent>
     
      </Card>
    </>
  )
}

export default VideosCard;