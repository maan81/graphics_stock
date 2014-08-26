
var page = require('webpage').create(),
    server = 'https://www.graphicstock.com/login',
    data = 'username=maan81&password=lkjlkj';

page.open(server, 'post', data, function (status) {

	console.log(status)

    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});
