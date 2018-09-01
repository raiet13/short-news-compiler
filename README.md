# short-news-compiler
React and Redux driven news site compiler. Application compiles news information so that one search term can be used to check the top results across multiple sites (rather than having to visit each site's website directly)


# Note : This is a WIP Frame as the rails/react part is NOT WORKING at the moment

api_name is for the NewsAPI


# Testing Commands

Test Database = rails c


# Terminal Code Used

rails g resource Site name:string api_name:string url:string --no-test-framework

rails g resource Post site_id:integer author:string title:string description:string url:string url_to_image:string published_at:datetime --no-test-framework

rails generate migration add_api_url_to_site api_url:string


# Major Links Used

