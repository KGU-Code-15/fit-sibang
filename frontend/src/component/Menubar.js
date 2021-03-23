import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

const useStyles = makeStyles({
  root: {
    width: 414,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="챌린지"
        value="challenge"
        icon={<EventAvailableIcon />}
      />
      <BottomNavigationAction
        label="즐겨찾기"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="운동"
        value="exercise"
        icon={<DirectionsBikeIcon />}
      />
      <BottomNavigationAction
        label="포인트"
        value="point"
        icon={<LocalAtmIcon />}
      />
      <BottomNavigationAction
        label="내정보"
        value="mypage"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}
