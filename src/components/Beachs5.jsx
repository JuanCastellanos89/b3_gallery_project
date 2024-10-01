import beach5 from '../assets/img/beach5.jpg';
import PropTypes from 'prop-types';

export const Beachs5 = ({className}) => {
  return (
    <img src={beach5} alt="beach5" className={className}/>
  )
}

Beachs5.PropTypes={
    className: PropTypes.string,
}