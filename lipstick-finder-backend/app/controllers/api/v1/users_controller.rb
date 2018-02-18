class Api::V1::UsersController < ApplicationController

  def create
    user = User.find_by(username: params[:username])

    if user
      render json: {
        username: user.username
      }
    else
      user = User.new(username: params[:username], password: params[:password])

      if user.save
        render json: {
          username: user.username
        }
      else
        render json: {
          error: 'Try again'
        }
      end
      
    end
  end

end
