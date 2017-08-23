const { OAuth } = require('oauth');
require('dotenv').config()

const oauth = new OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.APP_CONS_KEY,
      process.env.CONS_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    
var searchTwit = (req, res) => {
  let query = req.query.q
  oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${query}`,
      process.env.ACCESS_TOKEN, //test user token 
      process.env.ACCESS_TOKEN_SECRET, //test user secret             
      function (err, data){
        let dataJson = json.stringify(data)
        if(!err){
        res.send(dataJson)     
      }else{
        res.send(err)
      }
      });  
}

var timeLineTwitt = (req, res ) => {
  oauth.get(
      `https://api.twitter.com/1.1/statuses/home_timeline.json`,
      process.env.ACCESS_TOKEN, //test user token 
      process.env.ACCESS_TOKEN_SECRET, //test user secret             
      function (err, data){
        if(!err){
        res.send(data)     
      }else{
        res.send(err)
      }
      });
}

var postTwitt = (req, res) => {
  let status = req.query.status
  oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json?status=${status}`,
      process.env.ACCESS_TOKEN, //test user token 
      process.env.ACCESS_TOKEN_SECRET, //test user secret
      status,
      'text',          
      function (err, data){
        if(!err){
        res.send(data)     
      }else{
        res.send(err)
      }
      });
}

module.exports = {
  searchTwit,
  timeLineTwitt,
  postTwitt
}
