class SearchSerializer < ActiveModel::Serializer
  attributes :id, :search_term, :created_at
  has_many :site_searches

end
