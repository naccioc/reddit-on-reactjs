import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  postDetail_spacer: {
    ...theme.mixins.toolbar
  },
  postDetail_content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem',
    padding: '1rem'
  },
  postDetail_content_title: {
    margin: 0
  },
  postDetail_content_image: {
    width: '85%',
    [theme.breakpoints.up('md')]: {
      width: '50%'
    }
  }
}));

export default useStyles;
