import mission_beach  from '../assets/img/mission-beach.jpg';
import PropTypes from 'prop-types';

export const Mission_beach = ( {props} ) => {
  return (
    <img src={mission_beach} alt="Mission_beach"
    className={props.className} />
  )
}

mission_beach,PropTypes = {
  className: PropTypes.string
}