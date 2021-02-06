import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listSubheader: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    backgroundColor: theme.palette.secondary.main
  }
}));

export default useStyles;
