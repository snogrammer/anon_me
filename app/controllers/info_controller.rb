# frozen_string_literal: true

class InfoController < ApiController
  before_action :set_username, only: %i[username email]

  # GET /api/info/username
  def username
    @info = { username: @username }

    render json: @info.to_json
  end

  # GET /api/info/email
  def email
    @info = {
      email: "#{@username}#{Mailinator::DOMAINS.sample}",
      href: "https://www.mailinator.com/v2/inbox.jsp?zone=public&query=#{@username}"
    }

    render json: @info.to_json
  end

  # GET /api/info/contact
  def contact
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
