Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations' }
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  
  resources :contacts
  get '/about' => 'pages#about'
  root 'pages#home'

 
end
