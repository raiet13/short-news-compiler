class SearchesController < ApplicationController

    # Sample Query = "curl localhost:3001/api/searches | jq '.'"
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
        render json: search, status: 200
    end

    private

    def search_params
        params.permit(:search_term, :created_at)
    end

end
