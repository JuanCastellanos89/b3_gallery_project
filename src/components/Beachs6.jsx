import beach6 from '../assets/img/beach6.jpg';
import PropTypes from 'prop-types';

export const Beachs6 = ({className}) => {
  return (
    <img src={beach6} alt="beach6" className={className}/>
  )
}

Beachs6.PropTypes={
    className: PropTypes.string,
}