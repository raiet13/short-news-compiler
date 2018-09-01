class Site < ActiveRecord::Base
    validates :name, :api_name, :url, presence: true
    validates :name, uniqueness: true
    has_many :posts

end
