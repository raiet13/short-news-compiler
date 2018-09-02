class SearchesController < ApplicationController

    def index
        searches = Search.all
        render json: searches
    end
    
    def show
        search = Search.find(params[:id])
        render json: search
    end
    
    def create
        search = Search.create(search_params)
        render json: search, status: 201
    end

    private
    
    def search_params
        params.permit(:search_term, :created_at)
    end

end
