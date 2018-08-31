require 'rack/proxy'

# https://stackoverflow.com/questions/11057905/how-do-i-use-rackproxy-within-rails-to-proxy-requests-to-a-specific-path-to-an

class MyProxy < Rack::Proxy
  def initialize(app)
    @app = app
  end

  def call(env)
    # call super if we want to proxy, otherwise just handle regularly via call
    (proxy?(env) && super) || @app.call(env)
  end

  def proxy?(env)
    # do not alter env here, but return true if you want to proxy for this request.
    return true
  end

  def rewrite_env(env)
    # change the env here
    env["HTTP_HOST"] = "some.other.host"
    env
  end
end