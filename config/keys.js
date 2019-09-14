if (process.env.NODE_ENV === 'production') {
    console.log("Env is Production");
    module.exports = require('./keys_prod');
}
else {
    console.log("Environment is Development");
    module.exports = require('./keys_dev');
}