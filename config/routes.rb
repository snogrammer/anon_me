# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :info, only: [] do
      collection do
        get :digital, to: :digital
        get :physical, to: :physical
      end
    end
  end
end
