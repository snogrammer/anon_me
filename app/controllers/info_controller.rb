# frozen_string_literal: true

class InfoController < ApiController
  before_action :set_username, only: %i[digital]

  # GET /api/info/digital
  def digital
    @info = {
      username: @username,
      email: "#{@username}#{Mailinator::DOMAINS.sample}",
      href: "https://www.mailinator.com/v2/inbox.jsp?zone=public&query=#{@username}",
      password: Faker::Internet.password(20, 30)
    }

    render json: @info.to_json
  end

  # GET /api/info/physical
  def physical
    @info = {
      name: Faker::Name.name,
      address: Faker::Address.full_address,
      phone: Faker::PhoneNumber.cell_phone
    }

    render json: @info.to_json
  end

  private

  def set_username
    @username = "#{Faker::Superhero.prefix}#{Faker::Superhero.descriptor}".remove(/\W/)
  end
end
