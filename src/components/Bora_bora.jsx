import bora_bora  from '../assets/img/Bora-bora.jpg';
import PropTypes from 'prop-types';

export const Bora_bora = ( {props} ) => {
  return (
    <img src={bora_bora} alt="Bora-bora"
    className={props.className} />
  )
}

bora_bora,PropTypes = {
  className: PropTypes.string
}

