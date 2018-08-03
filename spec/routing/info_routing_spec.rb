# frozen_string_literal: true

require 'rails_helper'

RSpec.describe InfoController, type: :routing do
  describe 'routing' do
    it 'routes to #digital' do
      expect(get: '/api/info/digital').to route_to('info#digital')
    end

    it 'routes to #physical' do
      expect(get: '/api/info/physical').to route_to('info#physical')
    end
  end
end
