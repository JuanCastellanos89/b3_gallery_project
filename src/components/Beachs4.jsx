import beach4 from '../assets/img/beach4.jpg';
import PropTypes from 'prop-types';

export const Beachs4 = ({className}) => {
  return (
    <img src={beach4} alt="beach4" className={className}/>
  )
}

Beachs4.PropTypes={
    className: PropTypes.string,
}