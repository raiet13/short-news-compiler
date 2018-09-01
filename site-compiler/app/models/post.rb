class Post < ActiveRecord::Base
    validates :site_id, :url, presence: true
    belongs_to :site
end
