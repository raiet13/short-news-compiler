class SiteSearchesController < ApplicationController

    # Sample Query = "curl localhost:8081/api/site_searches | jq '.'"
    def index
        siteSearches = SiteSearch.all
        render json: siteSearches
    end
    
    # Show all site searches that have to do with a specific site or search
    # Sample Queroes = "curl localhost:8081/api/site_searches/1?site_id=1 | jq '.'" || curl localhost:8081/api/site_searches/1?search_id=1 | jq '.'
    def show
        # Params = site_id and search_id
        if (params.include?(:site_id))
            render json: SiteSearch.where(["site_id LIKE ?", "%#{params[:site_id]}%"])
        elsif (params.include?(:search_id))
            render json: SiteSearch.where(["search_id LIKE ?", "%#{params[:search_id]}%"])
        else
            render status: 400, json: { error: 'Expected parameter `site_id` or `search_id` '}
        end
    end
    
    def create
        siteSearch = SiteSearch.create(siteSearch_params)
        render json: siteSearch, status: 201
    end

    private
    
    def siteSearch_params
        params.permit(:site_id, :search_id)
    end

end
