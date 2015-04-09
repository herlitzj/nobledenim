class User < ActiveRecord::Base
  has_many :orders
  has_many :addresses
  
  authenticates_with_sorcery!
  validates_confirmation_of :password, message: "Should match confirmation.", if: :password 
end
