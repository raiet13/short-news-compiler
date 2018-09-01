class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.string :name
      t.string :api_name
      t.string :url

      t.timestamps null: false
    end
  end
end
