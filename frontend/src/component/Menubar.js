import React from 'react';

import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  root: {
    width: 414,
    position: 'fixed',
    bottom: 0,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <Link to='#'>
        <BottomNavigationAction icon={<DirectionsBikeIcon />} />
      </Link>
      <Link to='#'>
        <BottomNavigationAction icon={<FavoriteIcon />} />
      </Link>
      <Link to='/'>
        <BottomNavigationAction icon={<HomeIcon />} />
      </Link>
      <Link to='#'>
        <BottomNavigationAction icon={<LocalAtmIcon />} />
      </Link>
      <Link to='/mypage'>
        <BottomNavigationAction icon={<AccountCircleIcon />} />
      </Link>
    </BottomNavigation>
  );
}
