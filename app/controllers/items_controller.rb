class ItemsController < ApplicationController
  def index
  	@data = File.read("#{Rails.root}/public/data.json")
  	render json: @data
  end
end
