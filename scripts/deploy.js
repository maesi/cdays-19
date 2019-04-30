const deploy = require('sftp-sync-deploy');

let config = {
    host: process.argv[2],
    port: 5544,
    username: process.argv[3],
    password: process.argv[4],
    localDir: 'dist',
    remoteDir: '/'
};

let options = {
    exclude: [
        '.htaccess'
    ],
    excludeMode: 'ignore'
};

deploy.deploy(config, options).then(() => {
    console.log('success!');
}).catch(err => {
    console.error('error! ', err);
})