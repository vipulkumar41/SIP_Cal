const sip_ctr = async (data) => {
  // Calculation of Total Return
  let months = data.period * 12
  let rate = (data.rate-data.inflationRate)/12
  let monInvest = data.monInvest-0
  let returnSip = 0
  // console.log("mon"+months+"rate"+rate+"monInvestment"+monInvest+"return"+returnSip)
  let result = {}
  const graph = []
  let obj = {year: 0,investment:0,return:0}
  graph.push(obj)

  for (let i = 1; i <= months; i++) {
    
    returnSip += monInvest * Math.pow(1 + rate / 100, i)
    returnSip = Math.round((returnSip + Number.EPSILON) * 100) / 100
    
    if(i%12 == 0){
      obj = {
          year: i/12,
          investment: monInvest*i,
          return: returnSip
      }
      graph.push(obj)
      }
    
      
  }

  result.period = data.period
  result.rate = data.rate
  result.inflationRate = data.inflationRate
  result.moneyInvested = months*monInvest
  result.return = returnSip
  result.graph = graph
  

  return result  

}
module.exports = {
  sip_ctr
};
