class Search < ActiveRecord::Base
    validates :search_term, presence: true
    has_many :site_searches
    has_many :sites, through: :site_searches
    
end
