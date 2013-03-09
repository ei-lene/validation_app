class User < ActiveRecord::Base
  attr_accessible :email, :password, :first_name, :last_name, :username, :password_confirmation, :email_confirmation
  attr_accessor :password_confirmation, :email_confirmation

  # validates :email, :password, :first_name, :last_name, :username, :password_confirmation, :presence => true
  validates :email, :password, :first_name, :last_name, :username, :presence => true
  validates :first_name, :last_name, :username, :length => { :minimum => 3 }
  validates :password, :length => { :minimum => 6 }
  validates_format_of :first_name, :last_name, :with => /[a-zA-Z]/
  validates_format_of :email, :with => /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/
end
