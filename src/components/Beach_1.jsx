import beach_1 from '../assets/img/beach-1.jpg';
import PropTypes from 'prop-types';

export const Beach_1 = ( {className} ) => {
  return (
    <img src={beach_1} alt="beach" className={className} />
  )
}

beach_1.propTypes = {
    className: PropTypes.string
  }
