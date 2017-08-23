const twatt = require('../models/Twatt');

var getTL = (req, res) =>{
  let endpoint = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
  twatt.Get(endpoint, (err, result)=>{
    if(err) res.send(err);
    else res.json(result);
  })
}

var getUserTL = (req, res) =>{
  let endpoint = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
  twatt.Get(endpoint, (err, result)=>{
    if(err) res.send(err);
    else res.json(result);
  })
}

var postStatus = (req, res) =>{
  let endpoint = 'https://api.twitter.com/1.1/statuses/update.json';
  twatt.Post(endpoint, req.body.status, (err, result)=>{
    if(err) res.send(err);
    else res.json(result);
  })
}

module.exports = {
  getTL,
  getUserTL,
  postStatus
}
