# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# Note : Three Sites to use for now -- api_name is for the NewsAPI
# nytimes = Site.create(name: 'The New York Times', api_name: '', url: 'https://www.nytimes.com/', api_url: 'https://api.nytimes.com/svc/topstories/v2/home.json')

washpost = Site.create(name: 'The Washington Post', api_name: 'the-washington-post', url: 'https://www.washingtonpost.com/', api_url: 'https://newsapi.org/s/the-washington-post-api')
fox = Site.create(name: 'Fox News', api_name: 'fox-news', url: 'http://www.foxnews.com/', api_url: 'https://newsapi.org/s/fox-news-api')
politico = Site.create(name: 'Politico', api_name: 'politico', url: 'https://www.politico.com/', api_url: 'https://newsapi.org/s/politico-api')


# Sample NYTimes Posts
# Post.create(site_id: nytimes.id, author: '', title: '', description: '', url: '', url_to_image: '')
# Post.create(site_id: nytimes.id, author: '', title: '', description: '', url: '', url_to_image: '')
# Post.create(site_id: nytimes.id, author: '', title: '', description: '', url: '', url_to_image: '')


# Sample Washington Post Posts
Post.create(site_id: washpost.id, author: '', title: 'Opinion | The McCain funeral offered a promise of deliverance at a dark moment in American history', description: "McCain's funeral was a rejection of the ugliness of the Trump years.", url: 'https://www.washingtonpost.com/news/global-opinions/wp/2018/09/02/the-mccain-funeral-offered-a-promise-of-deliverance-at-a-dark-moment-in-american-history/', url_to_image: 'https://www.washingtonpost.com/resizer/u812l52sy63fm2L-H6E0BdqUplA=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Y2DZXIHRRE63BGR7HFQWKEKL5E.jpg')
Post.create(site_id: washpost.id, author: '', title: 'Opinion | What could possibly go wrong when Trump goes to Texas?', description: 'Even in Texas Trump might be more trouble than he is worth', url: 'https://www.washingtonpost.com/news/opinions/wp/2018/09/02/what-could-possibly-go-wrong-when-trump-goes-to-texas/', url_to_image: 'https://www.washingtonpost.com/resizer/ZTwYNt6n-B-uN98xYqV6lWkZOf0=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2H5NCUNRCY7LXKGTC7BH3OEJIU.jpg')
Post.create(site_id: washpost.id, author: '', title: 'Analysis | The key players in the Kavanaugh hearings — and what’s at stake for each of them', description: "Everyone's got a political motive.", url: 'https://www.washingtonpost.com/politics/2018/09/02/key-players-kavanaugh-hearings-whats-stake-each-them/', url_to_image: 'https://www.washingtonpost.com/resizer/9J_PMxV4U5P76VPEfkG2ek5eu8E=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DFHDWQFHBEI6RLLPBADXBXG5YI.jpg')


# Sample Fox Posts
Post.create(site_id: fox.id, author: 'Fox News', title: "Lanny Davis says he's to blame, not CNN, for controversy over Trump-Russia meeting story", description: "The lawyer for President Trump’s former personal attorney Michael Cohen said he was blaming himself, not CNN, after the network ran a story about Cohen knowing the president had advance knowledge of that Trump Tower meeting with a Russian lawyer offering dirt…", url: 'http://www.foxnews.com/politics/2018/09/02/lanny-davis-says-hes-to-blame-not-cnn-for-controversy-over-trump-russia-meeting-story.html', url_to_image: 'http://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2018/09/02/0/0/694940094001_5829938554001_5829945106001-vs.jpg?ve=1')
Post.create(site_id: fox.id, author: 'Fox News', title: 'Are expectations set too high for Democrats in November?', description: 'President Trump is aiming to spend more than 40 days on the fall campaign trail to help Republicans keep power in Congress.', url: 'http://video.foxnews.com/v/5829780620001/', url_to_image: 'http://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2018/09/01/640/360/694940094001_5829772707001_5829780620001-vs.jpg')
Post.create(site_id: fox.id, author: 'Fox News', title: 'Media praise McCain, fault Trump', description: 'Some fault president for not hailing senator.', url: 'http://video.foxnews.com/v/5829943440001/', url_to_image: 'http://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2018/09/02/640/360/694940094001_5829938559001_5829943440001-vs.jpg')


# Sample Politico Posts
Post.create(site_id: politico.id, author: '', title: "President Barack Obama's eulogy for Senator John McCain", description: '', url: 'https://www.politico.com/video/2018/09/01/180901-mccain-newman-obama1-067249', url_to_image: 'https://static.politico.com/da/f5/44342c424c68b675719324b1106b/politico.jpg')
Post.create(site_id: politico.id, author: 'https://www.facebook.com/politico', title: "Trump allies fume at McCain memorial addresses, urge counterattack", description: 'Some even hoped for — but didn’t get — a blistering tweet from the president.', url: 'https://www.politico.com/story/2018/09/01/trump-mccain-memorial-response-reaction-806113', url_to_image: 'https://static.politico.com/f4/30/585f9c04498ea113d84bba7649cd/180901-protestors-ap-773.jpg')
Post.create(site_id: politico.id, author: 'Tim Alberta', title: "How 'Fake News' Was Born at the 1968 DNC", description: 'The madness of the 1968 Democratic National Convention pushed conservatives’ distrust of “the establishment” into overdrive.', url: 'https://www.politico.com/magazine/story/2018/09/02/how-fake-news-was-born-at-the-1968-dnc-219627', url_to_image: 'https://static.politico.com/d4/8f/8e6f9e404d478067291f3293bd67/gettyimages-138455325.jpg')


# Sample Searches
tsearch = Search.create(search_term: 'trump')
msearch = Search.create(search_term: 'mccain')


# Sample SiteSearches
SiteSearch.create(site_id: washpost.id, search_id: tsearch.id)
SiteSearch.create(site_id: fox.id, search_id: tsearch.id)
SiteSearch.create(site_id: politico.id, search_id: tsearch.id)

SiteSearch.create(site_id: washpost.id, search_id: msearch.id)
SiteSearch.create(site_id: fox.id, search_id: msearch.id)
