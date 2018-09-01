class Site < ActiveRecord::Base
    validates :name, :url, :api_url, presence: true
    validates :name, uniqueness: true
    has_many :posts

end
