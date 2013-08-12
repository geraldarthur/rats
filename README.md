# Rats?
While there's many cool and fancy ways to parse 311 data, I wanted to go for something concise that would generate feedback for the city improvement. Here's how this mini-interactive came together over the course of a Sunday evening and Monday morning. Feel free to [poke around](https://github.com/geraldarthur/rats/) under the hood as well

## Interviewing the Data
Whenever I get 311 data, my question is always what are people complaining about the most? But before I dove into that, I wanted to see how others had tried to answer this question. After Googled around, I saw [several](http://www.wired.com/magazine/2010/11/ff_311_new_york/) [attractive](http://visualizing.org/visualizations/nyc-311-composite) [visualizations](http://www.visualizing.org/visualizations/boston-311-heatmap), however none of them were insightful.

Most visualisations just bombarded me with overall stats, and the latter was basically a fiery hexbin map of population density. It was time for me to choose whether I would be a generalist or a specialist. I chose the latter, hoping for one good story. My time at the Texas Tribune taught me that maps and visualizations that offered a hodge-podge of stats don't do as well as ones that stick to one aspect of the data.

Boston.com had [already published](http://www.boston.com/yourtown/boston/2013/06/13/caller-complaints-boston/ZAyvQbDoCfQJKYKIfRT2LK/gallery.html) a listicle that gave me a sense of the most 311 calls. Nevertheless, I learned to always check it against a few clustering algorithms after dealing with messy [oil well inspection data](http://stateimpact.npr.org/texas/2013/08/08/texas-charging-more-in-penalties-to-drilling-violators/).

## Open Refine
Mostly I use Refine for its clustering algorithms or Google Refine Expression Language for string operations.

In doing so, I quickly discovered that Boston.com's list did not go to the lengths I was going. In 2012 there were 8133 pothole-related complaints, bringing it to the second most largest 311 complaint.

The reason? City Workers can file an internal complaint to better tag problematic road conditions. Nevertheless that's still a lot of potholes.

So I used the Google's Expression Language, aka GREL, to clean up the latitudes and longitudes and map out these potholes. While the data was loading, I took the opportunity to read up about Boston's road conditions.

Turns out, this is a well known problem for the city, and the fact that city workers could file internal complaints didn't quite answer my question of what people are complaining about in general. So I decided to couch potholes once I saw that most of them occured on main roads and go for rodent activity instead.

## DRYing out the Project
One of the biggest things I learned while working with NPR's News Apps team is to that you want to keep your project DRY and modular. This allows for greater re-use in the future. So I decided to use their template for a couple of reasons: LESS, file compression, and a local server that watched for static file changes.

To my knowledge, this is the first time anyone has begun to conform NPR's app-template into a real, reusable template for another newsroom. While most of the local development side is running in Python, the rest is all JS and LESS.

## UI/UX
For a while I debated creating a map with draggable markers, but I chose not to though because of the editorial implications. 

This wouldn't have be too difficult since I spent most of the summer working on a [similar UX](http://apps.npr.org/playgrounds/create.html). However, I had my reservations with this kind of topic. What's stopping someone from adding inappropriate content, similar to some of the markers on WNYC's [Watering Holes map](http://project.wnyc.org/watering-holes/)? 

A simple Disqus thread with copy emphasizing adding a photo was more manageable. It would also create a vertical narrative with the all comments and replies.

I used the remaining time to get the map design and UI succinct. A well designed map can easily go viral, and considering the topic I had a sense that this would definitely be a conversation starter.

I made sure to create readable labels which position themseleves appropriately at different zoom levels.

## Refactor, Re-Use, Reflect
Considering the fact that the city is testing out [new ways](http://www.wbur.org/2013/03/29/boston-pothole-technology) to combat potholes and that Boston.com already has a [pothole map](http://www.boston.com/news/local/massachusetts/specials/013009_pothole/), my 2.0 would be to create a map template for the Globe that lets readers add, edit and remove markers for any number of subjects. (The idea would be to take the features of Gabriel's [Boston Marathon Bombing map](http://www.boston.com/news/local/massachusetts/specials/boston_marathon_bombing_stories/) and make them more responsive and usable for other probjects.)

Given more time, I would have also have sought out developer access to the Boston 311 API. Currently you have to email the developers to get access, which might be worthwhile for a 2.0 if the interactive performed well.
