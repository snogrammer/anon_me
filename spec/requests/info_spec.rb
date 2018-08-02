# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Info', type: :request do
  describe 'GET /api/info/username' do
    it 'returns 200' do
      get username_info_index_path
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/info/email' do
    it 'returns 200' do
      get email_info_index_path
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/info/contact' do
    it 'returns 200' do
      get contact_info_index_path
      expect(response).to have_http_status(200)
    end
  end
end
