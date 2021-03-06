# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all

5.times do
  x = Faker::Name.name 
  y = Faker::Name.last_name 
  z = Faker::PhoneNumber.cell_phone
  User.create(name: "#{x} #{y} #{z}")
end
puts "seeded #{User.all.size} Users"
puts "first user name: #{User.first.name}"

