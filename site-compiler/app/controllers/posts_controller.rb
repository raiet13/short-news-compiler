class PostsController < ApplicationController
    
    # Get posts for specific site or all posts
    # Sample Queries = "curl localhost:8081/api/posts?site_id=1 | jq '.'" && "curl localhost:8081/api/posts | jq '.'"
    def index
        if params[:site_id]
            render json: Post.where(["site_id LIKE ?", "%#{params[:site_id]}%"])
        else
            render json: Post.all
        end
    end
    
    # Sample Query = "curl localhost:8081/api/posts/1 | jq '.'"
    def show
        post = Post.find(params[:id])
        render json: post
    end
    
    def create
        post = Post.create(post_params)
        render json: post, status: 201
    end

    private
    
    def post_params
        params.permit(:id, :site_id, :author, :title, :description, :url, :url_to_image, :published_at)
    end

end
