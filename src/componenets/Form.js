import PropTypes from 'prop-types';

const Form = ({ firstValue, secondValue, setFirstValue, setSecondValue }) => {

  return (
    <form className='converter-form'>
      <div className='form-control'>
        <label>You send: </label>
        <input className='gb' type='text' placeholder='GBP' 
               value={firstValue}
               onChange={(e) => setFirstValue(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>They receive: </label>
        <input className='pl' type='text' placeholder='PLN'
               value={secondValue}
               onChange={(e) => setSecondValue(e.target.value)}/>
      </div>
      
    </form>
  )
}

Form.propTypes = {
  setFirstValue: PropTypes.func,
  setSecondValue: PropTypes.func,
}

export default Form
