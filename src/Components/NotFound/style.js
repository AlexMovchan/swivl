import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#eee',
    height: '50vh',
    position: 'relative',
    transform: 'translateY(25vh)',
    width: '70%',
    margin: 'auto',
  },
  redUnderline: {
    color: 'red',
    fontSize: '28px',
    textDecoration: 'underline'
  }
});

export default useStyles;
