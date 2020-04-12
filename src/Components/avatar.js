import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import '../css/login.css';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BadgeAvatars(props) {
  const classes = useStyles();
  let data = props.empdata;
  if(data.availability){
      var color = '#00FFEA'
  } else {
    var color = '#808080'
  }
  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: color,
      color: color,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      
    },
  }))(Badge);


  return (
    <span className={classes.root}>
      {props.isBadge?<StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar alt={props.name} src={props.picture} style={{height:'30px',width:'30px'}} />
      </StyledBadge>:<StyledBadge>
        <Avatar alt={props.name} src={props.picture} style={{height:'60px',width:'60px'}} />
      </StyledBadge>}
    </span>
  );
}
