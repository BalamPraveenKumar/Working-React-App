import { Component } from "react";
import EachHoldings from '../EachHoldings'
import Heading from "../Heading"
import './index.css'
class TaxHarvestingPage extends Component{
     state = {
    showDropDown: false,
    selectedHoldings: [],
    capitalGains: {
      stcg: { profits: 100, losses: 500 },
      ltcg: { profits: 1200, losses: 100 }
    },
    postCapitalGains: {
      stcg: { profits: 100, losses: 500 },
      ltcg: { profits: 1200, losses: 100 },
      realisedCapitalGain: 700
    }
  };

    toggleDropdown=()=>{
        this.setState(prevState=>({showDropDown:!prevState.showDropDown}))
    }


    calculateRealised=gains=>{
       const netSt = gains.stcg.profits - gains.stcg.losses;
    const netLt = gains.ltcg.profits - gains.ltcg.losses;
    return netSt + netLt;
    }

 handleHoldingCheck = (coin, isChecked, stGain, ltGain) => {
    this.setState(prev => {
      const selected = isChecked
        ? [...prev.selectedHoldings, coin]
        : prev.selectedHoldings.filter(c => c !== coin);

      const newStcg = {
        profits: prev.capitalGains.stcg.profits + (stGain > 0 ? stGain : 0),
        losses: prev.capitalGains.stcg.losses + (stGain < 0 ? -stGain : 0)
      };

      const newLtcg = {
        profits: prev.capitalGains.ltcg.profits + (ltGain > 0 ? ltGain : 0),
        losses: prev.capitalGains.ltcg.losses + (ltGain < 0 ? -ltGain : 0)
      };

      const realised = (newStcg.profits - newStcg.losses) + (newLtcg.profits - newLtcg.losses);

      return {
        selectedHoldings: selected,
        postCapitalGains: {
          stcg: newStcg,
          ltcg: newLtcg,
          realisedCapitalGain: realised
        }
      };
    });
  };

    render(){
         const { showDropDown, capitalGains, postCapitalGains } = this.state;
        const {SampleHoldings}=this.props
        const preRealised = this.calculateRealised(capitalGains);
const postRealised = postCapitalGains.realisedCapitalGain;
const savings = preRealised - postRealised;
const savingsMessage = savings > 0
  ? `Your taxable capital gains are reduced by ${savings}`
  : null;
        
        return(
            <div className="container">


                <div className="description">


                <h1 className="headingtext">Tax Optimisation</h1>

                <div className="popup-container">
                  <span className="how-it-works-text">How it works</span>
                 <div className="popup-text">
                    This section explains how tax harvesting offsets gains by selling underperforming assets.
                 </div>
                 </div>
                </div>




              <div className="dropdown">
                <div className="btnElement" onClick={this.toggleDropdown}>Important Notes And Disclaimer
                     <img
                       src="https://cdn-icons-png.flaticon.com/512/60/60995.png"
                       alt="dropdown"
                     className={`dropdown-icon ${showDropDown ? "rotate" : ""}`}
                     />


                </div>
                {showDropDown && (
                <div className="dropdown-text">
                    <p><strong>Price Source Disclaimer:</strong> Prices are sourced from reliable market data providers but may vary slightly from actual trade execution.</p>
                    <p><strong>Country Specific Availability:</strong> Tax harvesting strategies are currently available in select countries only. Please check eligibility.</p>
                     <p><strong>Utilization of Losses:</strong> Realized losses will be applied against capital gains to minimize your tax burden.</p>
                </div>
                )}
              </div>




                <div className="harvestingContainers">
                    <div className="preharvestingContainer">
                        <h1 className="harvestingHeaading">Pre Harvesting</h1>
                        <p className="column-name">
                            <span className="firstcolumn"></span>
                            <span className="secondcolumn">Short-term</span>
                            <span className="thirdcolumn">Long-term</span>
                        </p>
                        <p className="profit-column">
                            <span className="firstcolumn">Profits</span>
                            <span className="secondcolumn">{capitalGains.stcg.profits}</span>
                            <span className="thirdcolumn">{capitalGains.ltcg.profits}</span>
                        </p>

                        <p className="loss-column">
                            <span className="firstcolumn">Losses</span>
                            <span className="secondcolumn">{capitalGains.stcg.losses}</span>
                            <span className="thirdcolumn">{capitalGains.ltcg.losses}</span>
                        </p>

                        <p className="netCapitalGains-column">
                            <span className="firstcolumn">Net Capital Gains:</span>
                            <span className="secondcolumn">{capitalGains.stcg.profits - capitalGains.stcg.losses}</span>
                               <span className="thirdcolumn">{capitalGains.ltcg.profits - capitalGains.ltcg.losses}</span>
                           
                        </p>

                        <p className="RealisedCapitalGains-column">
                                     <span className="firstcolumn">Realised Capital Gains:</span>
                            <span className="secondcolumn">{this.calculateRealised(capitalGains)}</span>
                          

                        </p>

                        
                        
                        </div>

                    <div className="postharvestingContainer">
                        <h1 className="harvestingHeaading">Post Harvesting</h1>
                        <p className="column-name">
                            <span className="firstcolumn"></span>
                            <span className="secondcolumn">Short-term</span>
                            <span className="thirdcolumn">Long-term</span>
                        </p>
                        <p className="profit-column">
                            <span className="firstcolumn">Profits</span>
                            <span className="secondcolumn">{postCapitalGains.stcg.profits}</span>
                            <span className="thirdcolumn">{postCapitalGains.ltcg.profits}</span>
                        </p>

                        <p className="loss-column">
                            <span className="firstcolumn">Losses</span>
                            <span className="secondcolumn">{postCapitalGains.stcg.losses}</span>
                            <span className="thirdcolumn">{postCapitalGains.ltcg.losses}</span>
                        </p>

                        <p className="netCapitalGains-column">
                            <span className="firstcolumn">Net Capital Gains:</span>
                            <span className="secondcolumn">{postCapitalGains.stcg.profits - postCapitalGains.stcg.losses}</span>
                            <span className="thirdcolumn">{postCapitalGains.ltcg.profits - postCapitalGains.ltcg.losses}</span>

                           
                        </p>

                        <p className="RealisedCapitalGains-column">
                                     <span className="firstcolumn">Effective Capital Gains:</span>
                            <span className="secondcolumn">{postCapitalGains.realisedCapitalGain}</span>
                         

                        </p>
                        { savingsMessage ? (
  <p className="savings-text" style={{ color: 'green', fontWeight: '600', marginTop: '10px' }}>
    {savingsMessage}
  </p>
) : (
  <p className="savings-text" style={{ color: 'gray', fontStyle: 'italic', marginTop: '10px' }}>
    No taxable capital gains savings from harvesting.
  </p>
)}



                    </div>


                </div>



                <div className="holdings">
                    <p className="holdings-text">Holdings</p>


                <Heading/>
                <div>
      {SampleHoldings.map(item => (
              <EachHoldings
                key={item.coin}
                SampleHoldings={item}
                onCheck={(isChecked) => this.handleHoldingCheck(
                  item.coin,
                  isChecked,
                  item.stcg.gain,
                  item.ltcg.gain
                )}
              />
            ))}
  </div>

                </div>






            </div>
        )
    }
}

export default TaxHarvestingPage