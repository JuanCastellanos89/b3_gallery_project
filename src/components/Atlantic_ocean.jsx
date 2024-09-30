import atlantic_ocean  from '../assets/img/atlantic-ocean.jpg';
import PropTypes from 'prop-types';

export const Atlantic_ocean = ( {props} ) => {
  return (
    <img src={atlantic_ocean} alt="Atlantic ocean"
    className={props.className} />
  )
}

atlantic_ocean,PropTypes = {
  className: PropTypes.string
}
