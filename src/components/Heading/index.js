import './index.css'

const Heading=()=>{
    const isAnySelected=false;
    return(
        <div className='heading'>

           <input type='checkbox'/>
           

           <div className='headings'>
            <p className='asset'>Asset</p>
            <div className='holdings'>
                <p className='holdings-text'>Holdings</p>
                <p className='sub-text'>Avg Buy Price</p>

            </div>
            <p className='current-price'>CurrentPrice</p>
            <div className='short-term'>

           <p className='sorting'>ShortTerm</p>
            </div>
           <p className='long-term'>LongTerm</p>
           <p className='amount-to-sell'>Amount to Sell</p>
           </div>
        </div>
    )
}
export default Heading