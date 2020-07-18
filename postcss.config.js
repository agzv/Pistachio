const { module } = require("./webpack.dev");

module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}