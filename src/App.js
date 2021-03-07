
import { useState, useEffect } from 'react';
import Form from './componenets/Form'
import Button from './componenets/Button'
import ExchangeRate from './componenets/ExchangeRate';

const App = () => {
  const [rate, setRate] = useState(0.0)
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')

  useEffect(() => {
    const asyncHelper = async () => {
      const rate = await fetchRate()
      setRate(rate)
    }
    asyncHelper()
  }, [])

  const fetchRate = async () => {
    try {
      const res = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/gbp/')//.catch((e) => alert(e))
      const data = await res.json()
      return data.rates[0].mid
    } catch(err) {
      alert('Cannot use NBP API, setting up rate to 1GBP = 5.0PLN')
      return 5.0
    }
  }

  const customAlert = (msg) => {
    alert(msg)
    setFirstValue('')
    setSecondValue('')
  }

  const convert = () => {
    var v1, v2 = 0.0
    if(firstValue !== '' && secondValue !== '') {
      customAlert('One of the fields must remain empty :(')
    } else if(firstValue !== '') {
      v1 = parseFloat(firstValue)
      if(isNaN(v1)) { customAlert('Provided value is not a nuber :(')}
      else {
        v2 = v1 * rate 
        setSecondValue(v2.toFixed(2).toString())
      }
    } else if (secondValue !== '') {
      v2 = parseFloat(secondValue)
      if(isNaN(v2)) { customAlert('Provided value is not a nuber :(')} 
      else {
        v1 = v2 / rate
        setFirstValue(v1.toFixed(2).toString())
      }
    } else {
      customAlert('At least one filed must contain value :(')
    }
  }

  const erase = () => {
    setFirstValue('')
    setSecondValue('')
  }

  return (
    <div className="container">
      <header><h1>Simple Currency Converter</h1></header>
      <Form firstValue={firstValue} secondValue={secondValue}
            setFirstValue={setFirstValue} setSecondValue={setSecondValue} />
      <ExchangeRate rate={rate} />
      <Button onClick={() => convert()} text='Convert!'/>
      <Button onClick={() => erase()} text='Erase Values'/>
    </div>
  );
}

export default App;
