var OAuth = require('oauth');
require('dotenv').config()

var oauth = new OAuth.OAuth(
    // OAuth yg awal adalah all npm 'oauth', yg kedua OAuth adalah syntax di dlm 'ouath'
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY,
  process.env.CONSUMER_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);


// search by keyword
function search (req,res){
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.name}`,
    // disini bisa jg pake query... nah query ini ada ne di params di postman(kanan atas)
    // klo mau berdasar @Kokoh37588934    => q=%40Kokoh37588934
    '890049648303276032-xpddNgyNrUeB82CAiI9t0UHZtDp54iR',
    '8d9d8DxIRgMlrKl52t2H8isl8QpcwrU8zhKCVFHM5gudY',
    (err,data) => {
      res.send(data);
    });
}

// HOME USERTIME
function timelineHome (req,res){
  // let query = req.query.screen_name;
    // screen_name: ini dipakai utk cari berdasar user nya
  oauth.get(
    // `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${query}`,
    `https://api.twitter.com/1.1/statuses/home_timeline.json`,
    '890049648303276032-xpddNgyNrUeB82CAiI9t0UHZtDp54iR',
    '8d9d8DxIRgMlrKl52t2H8isl8QpcwrU8zhKCVFHM5gudY',
    (err,data) => {
      //grab each status..
      statusText = [];
      data = JSON.parse(data);
      data.forEach(d => {
       statusText.push(d.text);
      });
      res.send(statusText);
      //res.send(data);
    });
}

// timeline by user id / @
function timelineUser (req,res){
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json`,
    '890049648303276032-xpddNgyNrUeB82CAiI9t0UHZtDp54iR',
    '8d9d8DxIRgMlrKl52t2H8isl8QpcwrU8zhKCVFHM5gudY',
    (err,data) => {
      //grab each status..
      statusText = [];
      data = JSON.parse(data);
      data.forEach(d => {
       statusText.push(d.text);
      });
      res.send(statusText);
      //res.send(data);
    });
}

function postTwitter (req, res){
  let query = req.body.quote;
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${query}`,
    '890049648303276032-xpddNgyNrUeB82CAiI9t0UHZtDp54iR',
    '8d9d8DxIRgMlrKl52t2H8isl8QpcwrU8zhKCVFHM5gudY',
    query,
    'text',
    (err,data) => {
    if(err) {console.log(err);}
    else {res.send(data);}
    });
};

var postTweet = (req, res)=>{
  let query = req.body.quote
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${query}`,
    '352908462-UV137YBf4Gag97vT52DO7jFriDSKxODl5cjvkQqw', //test user token
    '0lBKXEuEz6Mv7Zlap8KLhaWoCOuSMHNAmKmRAG9ZaUKZH', //test user secret
    query,
    'text',
    function (e, data, respond){
      if (e) console.error(e);
      res.send(data)
    }
  );
}

module.exports = {
  search,
  timelineHome,
  timelineUser,
  postTwitter
}
