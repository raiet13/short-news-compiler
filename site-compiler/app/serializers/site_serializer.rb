class SiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :api_name, :url, :api_url
  has_many :site_searches

end
