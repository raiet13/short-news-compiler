class SiteSearch < ActiveRecord::Base
    belongs_to :site
    belongs_to :search
    
end
