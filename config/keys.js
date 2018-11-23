if(process.NODE_ENV === 'production') {
    console.log('in prod');
    module.exports =require('./prod');
} else {
    console.log(process.NODE_ENV);
    module.exports =require('./dev');
}