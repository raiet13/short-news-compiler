Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    # NOTE : Fullstack food demo for server testing
    scope '/api' do
        get :food, to: 'foods#index'
    end


end
