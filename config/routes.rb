Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'greetings', to: 'greetings#index'
  root 'static#index'
  
  namespace :v1, defaults: { format: :json } do
    get 'things', to: 'things#index'
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end