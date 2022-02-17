const service = require("../Services/index")
const message = require("../const/index")

// Validation
const sip = async (req, res) => {
  let data = req.body

  //  Check If all inputs are numerical or not
  // Check if all inputs are more than zero or not
  if ((isNaN(data.period) || isNaN(data.rate) || isNaN(data.monInvest)) || (data.period <= 0 || data.rate <= 0 || data.monInvest <= 0)) {
    res.status(200).send(message.check.failed)
  } 
  else{
    const Result = await service.sip_ctr(data);
    res.status(200).send(Result);
  }
}

module.exports = {
  sip
}
