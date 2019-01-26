class AddApiUrlToSite < ActiveRecord::Migration
  def change
    add_column :sites, :api_url, :string
  end
end
