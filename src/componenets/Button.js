import PropTypes from 'prop-types';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className='btn btn-block'>
      {text}
    </button>
  )
}

Button.defaultProps = {
  text: 'Submit!',
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
