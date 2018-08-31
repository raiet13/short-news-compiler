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

- Webpacker Settings
    https://webpack.js.org/configuration/dev-server/#devserver-proxy

- Rack Proxy -- NOT WORKING
    https://stackoverflow.com/questions/11057905/how-do-i-use-rackproxy-within-rails-to-proxy-requests-to-a-specific-path-to-an
    http://livsey.org/blog/2012/02/23/using-rack-proxy-to-serve-multiple-rails-apps-from-the-same-domain-and-port/
