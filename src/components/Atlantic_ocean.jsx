import atlantic_ocean  from '../assets/img/atlantic-ocean.jpg';
import PropTypes from 'prop-types';

export const Atlantic_ocean = ( {className} ) => {
  return (
    <img src={atlantic_ocean} alt="Atlantic ocean" className={className} />
  )
}

atlantic_ocean.propTypes = {
  className: PropTypes.string
}
