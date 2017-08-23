const OAuth = require('oauth')
require('dotenv').config()

var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );

var timeline = (req,res) => {
oauth.get(
  'https://api.twitter.com/1.1/statuses/home_timeline.json',
  process.env.ACC_TKN, //test user token
  process.env.ACC_SECRET, //test user secret
  function (err, data){
    if(!err){
      datastring = JSON.stringify(data)
      res.send(datastring)
    }else{
      res.send(err)
    }
  });
}

var update = (req,res) => {
  oauth.post(
  "https://api.twitter.com/1.1/statuses/update.json",
    process.env.ACC_TKN, //test user token
    process.env.ACC_SECRET, //test user secret
    {status:req.body.status},
    function (err, data){
      if(!err){
        res.send(data)
      }else{
        res.send(err)
      }
    });
}

var search = (req,res) => {
  search = req.query.search
  oauth.get(
  `https://api.twitter.com/1.1/search/tweets.json?q=${search}`,
  process.env.ACC_TKN,
  process.env.ACC_SECRET,
  function(err, data){
    if(!err){
      res.send(data)
    } else {
      res.send (err)
    }
  }
 )
}


module.exports = {timeline,update,search}
