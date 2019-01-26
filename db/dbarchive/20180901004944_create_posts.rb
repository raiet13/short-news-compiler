class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.belongs_to :site
      t.string :author
      t.string :title
      t.string :description
      t.string :url
      t.string :url_to_image
      t.datetime :published_at

      t.timestamps null: false
    end
  end
end
