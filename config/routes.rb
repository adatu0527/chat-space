Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users do
    collection do
      get 'search'
    end
  end
  resources :groups, only: [:edit, :update, :new, :create, :index] do
    resources :messages, only: [:index,:create]

    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
