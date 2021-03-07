import { useState } from 'react';


const Form = () => {
  const [firstCurrency, setFirstCurrency] = useState('')
  const [secondCurrency, setSecondCurrency] = useState('')

  return (
    <form className='converter-form'>
      <div className='form-control'>
        <label>You send: </label>
        <input className='gb' type='text' placeholder='GBP' 
               value={firstCurrency} onChange={(e) => setFirstCurrency(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>They receive: </label>
        <input className='pl' type='text' placeholder='PLN'
               value={secondCurrency} onChange={(e) => setSecondCurrency(e.target.value)}/>
      </div>
      
    </form>
  )
}

export default Form
