# short-news-compiler
React and Redux driven news site compiler. Application compiles news information so that one search term can be used to check the top results across multiple sites (rather than having to visit each site's website directly)


# Note : This is a WIP frame as the rails/react part is NOT WORKING at the moment

rails s -b $IP -p $PORT

# Major Links Used

http://aalvarez.me/blog/posts/using-rails-with-webpack-in-cloud-9.html

- Install Yarn for the "rails webpacker:install" command
    https://github.com/rails/webpacker/issues/818
    https://yarnpkg.com/en/docs/install#debian-stable

- Set up Rails and React
    https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/

- Webpacker Settings -- NOT WORKING
    https://webpack.js.org/configuration/dev-server/#devserver-proxy
        https://github.com/rails/webpacker
    https://github.com/rails/webpacker/issues/176

- Rack Proxy -- NOT WORKING
    https://stackoverflow.com/questions/11057905/how-do-i-use-rackproxy-within-rails-to-proxy-requests-to-a-specific-path-to-an
    http://livsey.org/blog/2012/02/23/using-rack-proxy-to-serve-multiple-rails-apps-from-the-same-domain-and-port/

- Fetch Issues
    https://stackoverflow.com/questions/37269808/react-js-uncaught-in-promise-syntaxerror-unexpected-token-in-json-at-posit
    https://github.com/paypal/PayPal-node-SDK/issues/348
    https://community.c9.io/t/can-hit-cloud9-service-with-curl-but-not-with-fetch/18063
    https://community.c9.io/t/fetch-api-error-when-using-webpack-devserver-proxy/14645/2
    https://stackoverflow.com/questions/43619644/i-am-getting-an-invalid-host-header-message-when-running-my-react-app-in-a-we#

- Access-Control-Allow-Origin -- solved by updating fetch request specifically
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin

- Additional Useful (but not relevant for project requirements)
    https://community.c9.io/t/does-anyone-have-react-with-rails-working-on-cloud9/23653/2
        https://github.com/shakacode/react_on_rails
    