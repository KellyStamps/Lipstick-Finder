class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.string :name
      t.integer :price
      t.string :image_link
      t.string :description
      t.string :product_link

      t.timestamps
    end
  end
end
