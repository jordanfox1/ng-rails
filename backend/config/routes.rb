Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  # get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  namespace :api do
    namespace :v1 do
      root "article#index"
      get "/articles", to: "article#index"
      get "/articles/:id", to: "article#show"
      post "/articles", to: "article#create"
      put "/articles/:id", to: "article#update"
      delete "/articles/:id", to: "article#destroy"
    end
  end
end
