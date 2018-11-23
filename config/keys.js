if(process.NODE_ENV === 'production') {
    console.log('in prod');
    module.exports =require('./prod');
} else {
    // console.log(process.env);
    module.exports =require('./dev');
}