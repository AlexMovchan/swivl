import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: '50%',
    margin: 'auto',
  },
  media: {
    height: 345,
    backgroundSize: 'contain'
  },
  link: {
    cursor: 'pointer',
    color: 'unset',
    textDecoration: 'none'
  }
});

export default useStyles;
