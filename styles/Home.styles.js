import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  const drawer_width = 320;

  return {
    menuButton: {
      marginRight: theme.spacing(2)
    },
    drawer: {
      width: drawer_width,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawer_width
    }
  };
});

export default useStyles;
