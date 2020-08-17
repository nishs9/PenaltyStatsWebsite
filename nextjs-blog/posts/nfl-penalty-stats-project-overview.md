---
title: 'NFL Penalty Stats Project Overview'
date: '2020-08-13'
---

If you haven't already read the introduction for this project, I suggest that you do. For the rest of you, let's dive into what I have done so far. 

At the very core of this project, I am trying to see how much penalties affect a game of football. We often hera announcers and analysts label penalties as "mental mistake" and lambast our teams when they rack up way too many in a loss. We've all seen a holding call derail a long drive or a questionable pass interference call completely change the complexion of a game. 

But are penalties more closely related to a team's overall performance over the course of the season? Do those "mental mistakes" really add up to anything in the bigger picture?

The way I'm choosing to actually quantify this impact is through Expected Points (EP). I'm not a statistician so I am using the calculation of EP from Pro Football Reference from their Win Probability Calculator. In essence, the EP formula takes in a particular game state (score differential, field position, down and distance, time remaining) and gives you a number which represents the number of points you can expect a team to score given that inputted game state. In other words, a more advantageous game state will yield a higher EP value. This is the crux of the project. Every penalty that is committed over the course of a game affects the game state in that it modifies the field position as well as down and distance. Therefore, I looked at the EP before a penalty was committed and the EP after a penalty was committed (taking into account the new game state) and looked at the difference between those 2 EP values. For the purposes of this project, I am treating EP more as tool to gaugae the quality of a specific game state to better understand the impact of a penalty. EP allows us to give context to a penalty that aggregate stats fail to consider. 

I understand that this methodology isn't perfect and I am completely at the mercy of the Pro Football Reference EP formula. But I felt that, for the purposes of this project, it was a useful and eadily quantifiable way to put penalties and their impact on a drive into perspective while allowing for easy comparisons across games, teams, and seasons. 

Now let's dive into what I have done and how I have done it.

All of the data has been collected using Python scripts. If you are interested in taking a look at them or tinkering with them yourself, check out my github repo. At the time of writing, I am working on a detail readme file that will explain the scripts and how to use them. I will add it to the repo as soon as I am finished with it. I am also actively working on cleaning up and commenting the code.

My main data source was the MySportsFeedsAPI. I highly recommend checking it out if you have any interest in collecitng data fro any of the major North American sports. They have both free and paid data feeds that you can utilize based on your specific needs for both commercial and non-commercial applications. I also used the Win Probability Calculator on Pro Football Reference for the EP calculations.

At the time of writing, I have finished collecting data for the 2018-19 and 2019-20 seasons. I am now working on creating pages for each team as well as a league page which will contain various insights, visualizations, and analysis of the data that I have collected. I also fully intend on adding new penalty data weekly as the 2020-21 NFL season begins. 

As always, if you have any questions, comments, or feedback feel free to email me at: <a href="mailto: nflpenaltystatsproject@gmail.com" target="_top">nflpenaltystatsproject@gmail.com</a>.