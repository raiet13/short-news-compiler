class Site < ActiveRecord::Base
    validates :name, :url, :api_url, presence: true
    validates :name, uniqueness: true
    has_many :posts
    has_many :site_searches
    has_many :searches, through: :site_searches

end
