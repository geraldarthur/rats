# Rats?
Admittedly , I knew this data could generatee feedback for improvement. Here's how this mini-interactive came together. 

## Interviewing the Data
Whenever I get 311 data, my question is always what are people complaining about? But before I dove into the data, I wanted to see how others had tried to answer this question. After Googled around, I saw [several](http://www.wired.com/magazine/2010/11/ff_311_new_york/) [attractive](http://visualizing.org/visualizations/nyc-311-composite) [visualizations](http://www.visualizing.org/visualizations/boston-311-heatmap). 

However, none of them were insightful. The latter was basically a fiery hexbin of population density. The others just bombarded me with overall stats. It was time for me to chose whether I would be a generalist or deep-dive into the data. I chose the latter, hoping for one good story.

Boston.com had [already published](http://www.boston.com/yourtown/boston/2013/06/13/caller-complaints-boston/ZAyvQbDoCfQJKYKIfRT2LK/gallery.html) a listicle that gave me a sense of the data. Nevertheless, I learned to always check it against a few clustering algorithms after dealing with messy oil well data in Texas. For that story, the question was what happens to oil wells after someone logs a complaint, but became much more complicated by an antiquated data entry process.

## Open Refine
Mostly I use Refine for it's clustering algorithms (for combining similar values) and the Google Refine Expression Language (for string operations). The Java-based application spins up a local server and lets me play with data without sharing it quite yet. At first, Refine's 'ngrams' and 'Levenshtein Distance' seemed foreign, but the documentation and open-source code helped me get a great grasp of what exactly I was doing. 

I soon discovered that Boston.com's list did not go to the lenghts I was going. In 2012 there were 8133 pothole-related complaints. City Workers can also file an internal complaint to better tag problematic road conditions, but that's still a lot of potholes.

So I used the Expression Language, aka GREL, to clean up the latitudes and longitudes and map out these road conditions. While the data was loading, I took the opportunity to read up about Boston's road conditions. Unfortunately though, this is a known problem and the fact that city workers could file internal complaints didn't quite answer my question of what people are complaining about. I decided to couch potholes once I saw that most of them occured on main roads, but recent developments could make it a potentially interesting story for the future.

## Mapping
That's when I spotted 'Rodent Activity.' Such a common occurance had made it near the top of the list. I knew instantly that this would be a conversation starter, but wasn't sure if the data itself was interesting.

As a potential future Bostonian, I wanted to know where these creatures were and how could I best avoid them. Which subways were infested? Which neighborhoods were overrun?

Unfortunately, this is just 311 and complaints do not fully represent the reality. Nevertheless, I felt confident in the fact that there weren't too many other datasets that would give me a good indication about the rodent population.

## DRYing out the Project
One of the biggest things I learned while working with NPR's News Apps team is to that you want to keep your project DRY and modular. This allows for greater re-use in the future. So I decided to go with their template for a couple of reasons: LESS, file compression, and a local server that watched for flatfile changes.

Harcoding all these bits into HTML files can be tedious, especially if you need to make an edit. Since this was a quick hack, I knew I'd need something modular for simplicity's sake.

## UI/UX
For a while I debated creating a map with draggable markers, I chose not to though because of the editorial implications. It wouldn't have be too difficult since I spent most of the summer working on a similar [UX](http://apps.npr.org/playgrounds/). However, I had my reservations with this kind of topic. What's stopping someone from adding inappropriate content, like what's happening with WNYC's [Watering Holes map](http://project.wnyc.org/watering-holes/)? 

A simple Disqus thread that emphasizes adding a photo and being descriptive might be more easily manageable. It would also create more of a vertical narrative with the all comments and their mobile-friendly platform allows for photo sharing from your phone.

Instead, I wanted to get the map design and UX succinct. A well designed map can easily go viral, and considering the topic I had a sense that this would definitely be a conversation starter.

I made sure to create readable labels that positioned appropriately with different zoom levels.

Given more time, I would have liked to have sought out developer access to the Boston 311 API. Currently you have to email the developers to get access, which might be worthwhile for a 2.0 if the interactive performed well.