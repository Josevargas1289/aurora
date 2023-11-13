import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useStyles from './cards-style';

function Services(props) {
  const { classes } = useStyles();
  const {
    img,
    title,
    desc,
  } = props;
  return (
    <Paper className={classes.defaultCard}>
      <figure>
        <img src={img} alt="img" />
      </figure>
      <div className={classes.text}>
        <Typography display="block" variant="h6">{title}</Typography>
        <Typography component="p">{desc}</Typography>
      </div>
    </Paper>
  );
}

Services.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Services;
