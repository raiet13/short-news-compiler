# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Note : Three Sites to use for now -- api_name is for the NewsAPI
nytimes = Site.create(name: 'The New York Times', api_name: '', url: 'https://www.nytimes.com/', api_url: 'https://api.nytimes.com/svc/topstories/v2/home.json')
washpost = Site.create(name: 'The Washington Post', api_name: 'the-washington-post', url: 'https://www.washingtonpost.com/', api_url: 'https://newsapi.org/s/the-washington-post-api')
fox = Site.create(name: 'Fox News', api_name: 'fox-news', url: 'http://www.foxnews.com/', api_url: 'https://newsapi.org/s/fox-news-api')

politico = Site.create(name: 'Politico', api_name: 'politico', url: 'https://www.politico.com/', api_url: 'https://newsapi.org/s/politico-api')

# Sample Posts
# Post.create(site_id: nytimes.id, author: '', title: '', description: '', url: '', url_to_image: '')
# Post.create(site_id: nytimes.id, author: '', title: '', description: '', url: '', url_to_image: '')
# Post.create(site_id: nytimes.id, author: '', title: '', description: '', url: '', url_to_image: '')

# Post.create(site_id: washpost.id, author: '', title: '', description: '', url: '', url_to_image: '')
# Post.create(site_id: washpost.id, author: '', title: '', description: '', url: '', url_to_image: '')
# Post.create(site_id: washpost.id, author: '', title: '', description: '', url: '', url_to_image: '')

# Post.create(site_id: fox.id, author: '', title: '', description: '', url: '', url_to_image: '')
# Post.create(site_id: fox.id, author: '', title: '', description: '', url: '', url_to_image: '')
# Post.create(site_id: fox.id, author: '', title: '', description: '', url: '', url_to_image: '')
