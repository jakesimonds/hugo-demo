+++
title = 'How I made this site'
date = 2023-10-22T12:21:09-04:00
draft = false
description = "THis is my description"
+++



## What it is 

Made with a framework called 'Hugo,' and specifically using a theme called 'paper.' 

I heard about it on a [youtube video](https://www.youtube.com/watch?v=0RKpf3rK57I). One of the comments, still there on the video as of 11/19/23, says: "Hugo is the back-end developer's best friend for making front-ends." That pretty much sold me. 

It took me longer than I thought it would to get what I have today, and even this is less functionality-wise than my original ambitions. I was and sort of still am a little mystified at the relationships between the framework, and the theme, and my configs, and the universe. What's cool is right now I'm writing this document in an .md file. Big fan of .md files. 

One weird thing that I did, that I'm not sure is best practices but we'll see how it goes, is I basically have one repo that's my larger site, and then inside of that I have two sub-modules that are attached to other repos. One of those sub-modules is just a clone of my theme, 'paper'. I cloned it because I thought I would have to go in there and make some tweaks, which I haven't actually done yet, but at least now I can in the future maybe. And then the other one feels a little weirder. After I'm done messing around making my site with hugo, which I can do locally by running 'hugo server,' I 'quasi-publish' a static site with the command 'hugo,' which then puts in a directory 'public' everything needed to make a static site. What I did was connect my 'jakesimonds.github.io' specially-named repo to that 'public' folder. So theoretically to update my site I can 1) make local edits and then probably push an update to that site repo, and then 2 
'cd public' and then push to 'jakesimonds.github.io'. And then maybe that's it?

If you're reading this, that's a great sign. 

Happy to chat with anybody similarly using or looking into Hugo, or other frameworks. 


## My needs

- Basic professional-ish personal website where I can show projects & stuff
- Reasonably flexible framework that can facilitate web-dev exploratory stuff
- easy to add written content (if I wanna blog or something)
- not a chore to update/make


## What I tried before

### Wix 
1,000 years ago I needed a website because I was a 'creative'. My sister reserved me a domain and I used wix to build a little personal website and it was fine but very much a chore to update & the UI kept upselling me on little things. I still have the domain I think, but I think it's really cool that github does this hosting, and this hopefully is enough for what I wanna do for now. 

### who needs a framework? 
Earlier this year when I discovered how easy setting up a github-hosted site could be I made a bare-bones, html website. It was fun to mess around with. I made an html table, used chatGPT to draw me a 3D ice cream cone with some JS library. Then I set up an API call (first to this funny [number facts api](http://numbersapi.com/#42) which worked locally but then not on github because it was http not https, so then to [is even](https://isevenapi.xyz/)), and then used AWS and Heroku (PSA: Not free anymore! Used to have generous free tier, no longer does) to make it so you could click a button, and then an app on heroku would like query AWS, generate a token/temporary-pass-something, and then that would let you into AWS where in an S3 bucket I had a like 30 second audio clip being hosted. It took me all afternoon, I really didn't even learn that much, but it was pretty satisfying after it was done to click the button and then hear my own voice. I also got my first you-owe-Jeff-Bezos-money email:

!["me"](/img/aws-email.png)


## Hopes for what it can be

- I wanna write some blog-like posts that are [search queries](https://www.henrikkarlsson.xyz/p/search-query). 
- I want a place to try weird web-dev stuff
