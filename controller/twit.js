// const model = require('../model');
const oauth = require('../helper/oauth');

var getTwitter = (req, res)=>{
  oauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    'your user token for this app', //test user token
    'your user secret for this app', //test user secret
    function (e, data, res){
      if (e) console.error(e);
      console.log(require('util').inspect(data));
      done();
    }
  );
}

module.exports = {
  getTwitter
}
