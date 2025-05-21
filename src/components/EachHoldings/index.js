import './index.css'
const EachHoldings=(props)=>{
    const {SampleHoldings,onCheck}=props
    const {coin,coinName,logo,currentPrice,totalHolding,averageBuyPrice,
stcg,ltcg}=SampleHoldings


    
    return(
        <div className="each-holdings">

            <input
        type="checkbox"
        
        className="holding-checkbox"
        id={coin}
        onChange={(e) => onCheck(e.target.checked)}
      />

  <div className="asset">
    <img src={logo} alt={coin} className="coin-logo" />
    <div className="coin-info">
      <p className="coin-name">{coinName}</p>
      <p className="coin-symbol">{coin}</p>
    </div>
  </div>

  <div className="holdings">
    <p className="holdings-text">{totalHolding.toFixed(6)}</p>
    <p className="sub-text">{averageBuyPrice.toFixed(2)}</p>
  </div>

  <p className="current-price">{currentPrice.toLocaleString()}</p>

  <p className="short-term">
    {stcg.gain.toFixed(2)}% 
  </p>

  <p className="long-term">
    {ltcg.gain.toFixed(2)}% 
  </p>

  <p className="amount-to-sell">-</p>
</div>

    )
}
export default EachHoldings

