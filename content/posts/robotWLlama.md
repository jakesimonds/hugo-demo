+++
title = 'Dash Robot with Llama'
date = 2024-06-11T16:09:52-04:00
draft = false
+++



## What is it?

Watching the short demo video (https://youtu.be/FoStVCW7-HY?si=YCHYhMVfsc7IoSCu) is probably the best quick way to see what's going on, but to teach myself web development I made kinda the classic Web Development basic non-trivial website (with (super basic) authentication, a database, a front-end, a backend...) but made it so you could log in, connect (locally) to a toy robot over bluetooth, and then drive it around.

You 'drive it around' by just passing basic API calls (forward, left, right, back) to another program that passes those commands along to the robot itself. Initially I had plans to make the whole thing more feature-ful, since the toy robot & the API I found for it had a lot of diverse functionality. But it was tedious making buttons (& then deciding where the buttons should go, etc), so I only did a little bit. I tentatively thought about exposing more methods via a documented API, as maybe a teaching tool for students, but then didn't do that either just out of laziness.

### Enter Lllama3 8b & Ollama

Then some coworkers got me up to speed on open source LLMs. Specifically how far the ecosystem has come in the year-ish since I last kinda looked into it all. And I watched a few videos on Ollama, and I pulled down the models myself onto my mac-chip hardware, and it all just kinda...worked. So I thought, 'I can give Ollama the robot API, and then have it translate natural language into valid commands'. And that's basically what's going on.


## How it works
!["diagram"](/img/robotSiteDiagram.png)

I get into this a bit in the video as well, but to summarize quickly:

- the website is just your basic website, React on the front Express in the back.
- The backend can talk to a linux machine which hosts a Flask app, which is basically a wrapper (that listens) around the robot API (MorseAPI) I found online. So you press 'Forward' on the website, the Express backend can send a request to the Flask app "hey, make the robot go forward" and it sends that via bluetooth along to the robot
- (Q: "Why not have it all on one machine/program?" A: Dependency issues & my own inexperience)
- The backend can also talk to a FastAPI server/program, which hosts Ollama hosting Llama3. In that workflow, the backend takes a command string (natural language) from the user, uses Llama3 to 'translate' it into a valid API call, and then sends that (or those) valid api calls to the robot who performs the actions


## What's next

This project has been fun for learning how to use Ollama with Llama 7B locally, and I think I'd like to potentially find a next project that can utilize that in a more digitally native way, so I'm not stuck with another project that's daisy-chained and messy and a chore to set up just to work on. 
