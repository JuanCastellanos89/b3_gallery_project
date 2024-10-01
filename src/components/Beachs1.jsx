import beach1 from '../assets/img/beach1.jpg';
import PropTypes from 'prop-types';

export const Beachs1 = ({className}) => {
  return (
    <img src={beach1} alt="beach1" className={className}/>
  )
}

Beachs1.PropTypes={
    className: PropTypes.string,
}