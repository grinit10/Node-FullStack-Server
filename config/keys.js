if(process.env === 'production') {
    console.log('in prod');
    module.exports =require('./prod');
} else {
    console.log('in dev');
    module.exports =require('./dev');
}