# frozen_string_literal: true

require 'rails_helper'

RSpec.describe InfoController, type: :routing do
  describe 'routing' do
    it 'routes to #username' do
      expect(get: '/api/info/username').to route_to('info#username')
    end

    it 'routes to #email' do
      expect(get: '/api/info/email').to route_to('info#email')
    end

    it 'routes to #contact' do
      expect(get: '/api/info/contact').to route_to('info#contact')
    end
  end
end
