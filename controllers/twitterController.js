var OAuth = require('oauth');
var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'agoKJjcERxkLZZAd4fBZWOjfK',
    'KLusFBYzNlONMahEtOcpwekRpjWxCTwvsQhdNWBLczxLownWd7',
    '1.0A',
    null,
    'HMAC-SHA1'
  );

exports.index = (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=899998539492638720',
    '899998539492638720-WD5pl3AFDl5lrYs6kXhL3giQV1FFlLB', //test user token
    '2G3bqSg3Utnlu58OhDTo00XkXxWve1lUKuXAnbuspIbAS', //test user secret
    function (e, data, respond){
      if (e) console.error(e);
      res.send(data)
    });
}

exports.post = (req, res) => {
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json`,
    '899998539492638720-WD5pl3AFDl5lrYs6kXhL3giQV1FFlLB', //test user token
    '2G3bqSg3Utnlu58OhDTo00XkXxWve1lUKuXAnbuspIbAS', //test user secret
    {"status": req.body.status},
    function (e, data, respond){
      if (e) res.status(500).send(e);
      res.send(data)
    });
}

exports.timeline = (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json?count=40',
    '899998539492638720-WD5pl3AFDl5lrYs6kXhL3giQV1FFlLB', //test user token
    '2G3bqSg3Utnlu58OhDTo00XkXxWve1lUKuXAnbuspIbAS', //test user secret
    function (e, data, respond){
      if (e) console.error(e);
      res.send(data)
    });
}

exports.trends = (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    '899998539492638720-WD5pl3AFDl5lrYs6kXhL3giQV1FFlLB', //test user token
    '2G3bqSg3Utnlu58OhDTo00XkXxWve1lUKuXAnbuspIbAS', //test user secret
    function (e, data, respond){
      if (e) console.error(e);
      res.send(data)
    });
}
exports.follower = (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/followers/list.json',
    '899998539492638720-WD5pl3AFDl5lrYs6kXhL3giQV1FFlLB', //test user token
    '2G3bqSg3Utnlu58OhDTo00XkXxWve1lUKuXAnbuspIbAS', //test user secret
    function (e, data, respond){
      if (e) console.error(e);
      res.send(data)
    });
}
