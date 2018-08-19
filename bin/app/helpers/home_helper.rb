# Copyright (c) 2017-2018 Talented
# Talented Inc

module HomeHelper
  def relative_time(created_at)
    time_ago_in_words(created_at)
  end

  def formatted_time(time)
    time.to_formatted_s(:short)
  end
end
