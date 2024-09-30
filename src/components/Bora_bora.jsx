import bora_bora  from '../assets/img/Bora-bora.jpg';
import PropTypes from 'prop-types';

export const Bora_bora = ( {className} ) => {
  return (
    <img src={bora_bora} alt="Bora-bora" className={className} />
  )
}

bora_bora.propTypes = {
  className: PropTypes.string
}

