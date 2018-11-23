if(process.env === 'production') {
    console.log('in prod');
    module.exports =require('./prod');
} else {
    console.log(process.env);
    module.exports =require('./dev');
}