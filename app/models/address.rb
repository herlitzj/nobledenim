class Address < ActiveRecord::Base
    has_many :orders
    belongs_to :user
    
    validates :line1, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :zipcode, presence: true
    validates :zipcode, numericality: {only_integer: true}
    validates :user_id, presence: true
    
    def to_s
       @address = "#{line1}, #{line2}, #{city}, #{state}, #{zipcode}"
    end
end
