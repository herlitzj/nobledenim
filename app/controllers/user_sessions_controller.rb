class UserSessionsController < ApplicationController
    
    def new
    end

    def create
        if login(params[:email], params[:password])
            redirect_back_or_to(root_path, notice: "Logged in successfully.")
        else
            flash.now.alert "Login failed!"
            render action: :new
        end
    end
    
    def destroy
        session[:user_id] = nil
        session[:order_id] = nil
        logout
        redirect_to(root_path, notice: "Logged out successfully.")
    end
end
