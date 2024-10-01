import beach2 from '../assets/img/beach2.jpg';
import PropTypes from 'prop-types';

export const Beachs2 = ({className}) => {
  return (
    <img src={beach2} alt="beach2" className={className}/>
  )
}

Beachs2.PropTypes={
    className: PropTypes.string,
}