class SitesController < ApplicationController
    
    def index
        sites = Site.all
        render json: sites
    end
    
    def show
        site = Site.find(params[:id])
        render json: site
    end
    
    def create
        site = Site.create(site_params)
        render json: site, status: 201
    end

    private
    
    def site_params
        params.permit(:name, :api_name, :url, :api_url)
    end

end
