# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :info, only: [] do
      collection do
        get :username, to: :username
        get :email, to: :email
        get :contact, to: :contact
      end
    end
  end
end
