import beach_4  from '../assets/img/beach-4.jpg';
import PropTypes from 'prop-types';

export const Beach_4 = ( {props} ) => {
  return (
    <img src={beach_4} alt="beach"
    className={props.className} />
  )
}

beach_4,PropTypes = {
  className: PropTypes.string
}
