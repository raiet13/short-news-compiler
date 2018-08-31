const path = require('path');

module.exports = {

    devServer: {
        compress: true,
        public: 'learn-redux-project-compiler-confizzed13.c9users.io', // That solved it
        inline: true,
        port: '8080',
        allowedHosts: [
          '.amazonaws.com', 
          '.c9users.io'
        ]  
    }
}

