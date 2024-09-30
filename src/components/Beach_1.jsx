import beach_1 from '../assets/img/beach-1.jpg'
import PropTypes from 'prop-types'

export const Beach_1 = ( {props} ) => {
  return (
    <img src={beach_1} alt="beach"
    className={props.className} />
  )
}

beach_1,PropTypes = {
    className: PropTypes.string
  }
