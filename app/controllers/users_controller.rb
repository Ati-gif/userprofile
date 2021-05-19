class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :edit, :destroy]

  def index
      @users = User.all
      render component: "Users", props: {users: @users}
  end

  def show
      render component: "User", props: {user: @user}
  end

  def edit
      render component: "UserEdit", props: {user: @user}
  end
  def update
   if @user.update(user_params)
      redirect_to root_path
   else
       # didn't update to db, deal with this later
   end
  end

  def new
      render component: "UserNew"
  end

  def create
      @user = User.new(user_params)
      if(@user.save)
          redirect_to root_path
      else
          # didn't save to db, deal with this later
      end 
  end

  def destroy
    @user.destroy
    redirect_to root_path
  end

   private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
      params.require(:user).permit(:name)
  end
end
