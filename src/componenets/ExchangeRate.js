
const ExchangeRate = ({ rate }) => {
  return (
    <div className='exchange-rate'>
      <p>1 GBP = {rate.toFixed(2)} PLN</p>
    </div>
  )
}

export default ExchangeRate
