class CreateSiteSearches < ActiveRecord::Migration
  def change
    create_table :site_searches do |t|
      t.belongs_to :site
      t.belongs_to :search
    
      t.timestamps null: false
    end
  end
end
