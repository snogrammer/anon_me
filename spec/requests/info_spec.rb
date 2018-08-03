# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Info', type: :request do
  describe 'GET /api/info/digital' do
    it 'returns 200' do
      get digital_info_index_path
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/info/physical' do
    it 'returns 200' do
      get physical_info_index_path
      expect(response).to have_http_status(200)
    end
  end
end
