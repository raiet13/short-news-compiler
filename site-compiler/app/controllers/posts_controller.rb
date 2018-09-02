class PostsController < ApplicationController
    
    def index
        posts = Post.all
        render json: posts
    end
    
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
