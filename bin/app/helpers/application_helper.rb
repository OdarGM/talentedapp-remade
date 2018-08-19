# Copyright (c) 2017-2018 Talented
# Talented Inc

module ApplicationHelper
  def belongs_to_user?(resource)
    resource.user == current_user
  end
end
