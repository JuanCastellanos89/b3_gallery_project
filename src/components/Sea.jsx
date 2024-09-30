import sea  from '../assets/img/sea.jpg';
import PropTypes from 'prop-types';

export const Sea = ( {props} ) => {
  return (
    <img src={sea} alt="Sea"
    className={props.className} />
  )
}

sea,PropTypes = {
  className: PropTypes.string
}