var page = require('webpage').create(),
    server = 'http:/localhost/stayplay/login',
    data = 'username=root@root.com&password=password';

page.open(server, 'post', data, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});
