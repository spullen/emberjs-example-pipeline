Server::Application.routes.draw do

  resources :stages, :only => [ :index, :update, :show ]
  resources :items

  root :to => 'application#index'
end
