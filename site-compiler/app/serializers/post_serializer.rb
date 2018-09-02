class PostSerializer < ActiveModel::Serializer
  attributes :id, :site_id, :author, :title, :description, :url, :url_to_image, :published_at

end
