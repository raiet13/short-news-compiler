# NOTE : Fullstack food demo for server testing
class FoodsController < ApplicationController
  def index
    q = params[:q]
    puts "q = #{q}"

    if q.blank?
      render status: 400, json: { error: 'Expected parameter `q` '}
    else
      render(
        status: 200,
        json: Food.where(["description LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end
end
