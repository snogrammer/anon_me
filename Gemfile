# frozen_string_literal: true

source 'https://rubygems.org'
ruby '2.5.1'

gem 'activeadmin',  '~> 1.3'
gem 'bootsnap',     '>= 1.1.0', require: false
gem 'devise',       '~> 4.4'
gem 'faker'
gem 'oj',           '~> 3.3'
gem 'pg',           '~> 0.21'
gem 'puma',         '~> 3.11'
gem 'rails',        '~> 5.2.0'
gem 'redis-rails',  '~> 5.0'
gem 'sidekiq',      '~> 5.0'

group :development, :test do
  gem 'factory_bot_rails', '~> 4.8'
  gem 'pry-rails'
  gem 'rspec-rails', '~> 3.7'
  gem 'rubocop'
  gem 'timecop', '~> 0.9'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0'
end

group :test do
  gem 'simplecov',  '~> 0.14'
  gem 'webmock',    '~> 3.0'
end
