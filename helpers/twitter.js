const { OAuth } = require('oauth')

exports.getUserTimeline = (req, res, next) => {
    var oauth = new OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        'DKUMA3WLamNVQ8K9RlcPjL0QX',
        '0Rvh4mhYpGgFqpwvBz9Jkl6U1k8mt1gphhULlovEnCuKttr9Zu',
        '1.0A',
        null,
        'HMAC-SHA1'
    );
    oauth.get(
        'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=tamastroo',
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET,
        function (e, data, respond) {
            res.send(data)
        }
    )
}

exports.getHomeTimeline = (req, res, next) => {
    var oauth = new OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        'DKUMA3WLamNVQ8K9RlcPjL0QX',
        '0Rvh4mhYpGgFqpwvBz9Jkl6U1k8mt1gphhULlovEnCuKttr9Zu',
        '1.0A',
        null,
        'HMAC-SHA1'
    );
    oauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET,
        function (e, data, respond) {
            res.send(data)
        }
    )
}

exports.searchTweet = (req, res, next) => {
    var oauth = new OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        'DKUMA3WLamNVQ8K9RlcPjL0QX',
        '0Rvh4mhYpGgFqpwvBz9Jkl6U1k8mt1gphhULlovEnCuKttr9Zu',
        '1.0A',
        null,
        'HMAC-SHA1'
    );
    oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.query}`,
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET,
        function (e, data, respond) {
            res.send(data)
        }
    )
}

exports.postTweet = (req, res, next) => {
    var oauth = new OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        'DKUMA3WLamNVQ8K9RlcPjL0QX',
        '0Rvh4mhYpGgFqpwvBz9Jkl6U1k8mt1gphhULlovEnCuKttr9Zu',
        '1.0A',
        null,
        'HMAC-SHA1'
    );
    oauth.post(
        `https://api.twitter.com/1.1/statuses/update.json`,
        process.env.ACCESS_TOKEN,
        process.env.ACCESS_TOKEN_SECRET,
        { status: req.params.tweet },
        function (e, data, respond) {
            res.send(data)
        }
    )
}