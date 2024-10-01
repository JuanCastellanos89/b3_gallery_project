import beach3 from '../assets/img/beach3.jpg';
import PropTypes from 'prop-types';

export const Beachs3 = ({className}) => {
  return (
    <img src={beach3} alt="beach3" className={className}/>
  )
}

Beachs3.PropTypes={
    className: PropTypes.string,
}