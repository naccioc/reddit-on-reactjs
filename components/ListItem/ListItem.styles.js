import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Badge_root: {
    zIndex: 0
  },
  Badge_badge: {
    backgroundColor: `${theme.palette.secondary.main}`,
    color: `${theme.palette.secondary.main}`,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  },
  listItem: {
    columnGap: '1.25rem'
  },
  listItem_exit: {
    opacity: 1
  },
  listItem_exit_active: {
    opacity: 0,
    transition: 'opacity 500ms ease-in'
  },
  listItem_info: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%'
  },
  listItem_metadata: {},
  listItem_metadata_author: {
    color: `${theme.palette.text.hint}`
  },
  listItem_metadata_timeago: {
    paddingLeft: '1rem',
    color: `${theme.palette.secondary.light}`
  },
  listItem_title: {
    marginTop: 0
  },
  listItem_actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItem_actions_comments: {
    color: `${theme.palette.text.hint}`
  },
  listItem_actions_delete: {
    marginLeft: 'auto'
  }
}));

export default useStyles;
