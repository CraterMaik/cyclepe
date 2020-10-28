import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {
  red
} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const Workshop = ({
    name,
    motto,
    description,
    avatarURL,
    imageURL,
    locationURL
  }) => {
  const classes = useStyles();

  return <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt={name} src={avatarURL} className={classes.avatar}/>
        }
 
        title={name}
        subheader = {
          motto
        }
      />
      <CardMedia
        className={classes.media}
        image = {
          imageURL
        }
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" component={"a"} href={locationURL} target="_black">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
}

export default Workshop;