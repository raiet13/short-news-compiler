class SiteSearchesController < ApplicationController

    def index
        siteSearches = SiteSearch.all
        render json: siteSearches
    end
    
    # Show all site searches that have to do with a specific site or search
    def show
        # Params = site_id and search_id
        if (params.include?(:site_id))
            siteSearch = SiteSearch.find_by_site_id(params[:site_id])
        elsif (params.include?(:search_id))
            siteSearch = SiteSearch.find_by_search_id(params[:search_id])
        end
        render json: siteSearch
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
