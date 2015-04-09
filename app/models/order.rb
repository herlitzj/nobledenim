class Order < ActiveRecord::Base
    has_many :order_items, dependent: :destroy
    belongs_to :user
    belongs_to :address
    
    def subtotals
       order_items.map do |i| i.subtotal end 
    end
    
    def total
       subtotals.sum 
    end
end
