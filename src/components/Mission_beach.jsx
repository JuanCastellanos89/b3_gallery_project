import mission_beach  from '../assets/img/mission-beach.jpg';
import PropTypes from 'prop-types';

export const Mission_beach = ( {className} ) => {
  return (
    <img src={mission_beach} alt="Mission_beach" className={className} />
  )
}

mission_beach.propTypes = {
  className: PropTypes.string
}