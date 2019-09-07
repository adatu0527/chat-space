module ControllerMacros
  def login(user)
    @request.env["devise.mappping"] = Devise.mappings[:user]
    sign_in user
  end
end
