# short-news-compiler
React and Redux driven news site compiler. Application compiles news information so that one search term can be used to check the top results across multiple sites (rather than having to visit each site's website directly).

Currently only supports use of 2 sites. It is in it's simplest form with intentions of further development in the future.


# Note : This is a WIP Frame as the rails/react part is NOT WORKING at the moment

site api_name is for the NewsAPI


# Testing Commands

Test Database = rails c

Test Views = rails s -b $IP -p $PORT

Curl Tests from Terminal = curl localhost:8081/api/MODELNAME/?QUERY=# | jq '.'

Run program = rake start


# Terminal Code Used

rails g resource Site name:string api_name:string url:string --no-test-framework

rails g resource Post site_id:integer author:string title:string description:string url:string url_to_image:string published_at:datetime --no-test-framework

rails generate migration add_api_url_to_site api_url:string

rails g resource Search search_term:string --no-test-framework

rails g resource SiteSearches search_id:integer site_id:integer --no-test-framework


# Major Links Used
