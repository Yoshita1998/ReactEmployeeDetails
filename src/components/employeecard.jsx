import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function MediaCard({ employee }) {
    console.log(employee);
  return (
    <Card sx={{ maxWidth: 345, margin: 10, paddingX: 1}}>
      <CardMedia
        sx={{ height: 200, backgroundSize: 'contain', margin: 3 }}
        image={employee[0].image}
        title="profile"
      />
      <CardContent>
        <PhotoSizeSelectActualOutlinedIcon />
        <Typography gutterBottom variant="h5" component="div">
          {employee[0].firstName} {employee[0].lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {employee[0].department}
        </Typography>
        <Typography>
            {employee[0].position}
        </Typography>
      </CardContent>
      <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
