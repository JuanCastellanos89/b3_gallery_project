import beach_4  from '../assets/img/beach-4.jpg';
import PropTypes from 'prop-types';

export const Beach_4 = ( {className} ) => {
  return (
    <img src={beach_4} alt="beach" className={className} />
  )
}

beach_4.propTypes = {
  className: PropTypes.string
}
