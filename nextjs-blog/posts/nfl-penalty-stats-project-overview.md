---
title: 'NFL Penalty Stats Project Overview'
date: '2020-08-26'
---

If you haven't already read the <a href="nfl-penalty-stats-project-introduction">introduction</a> for this project, I suggest that you do. For the rest of you, let's dive into what I have done so far. 

At the very core of this project, I am trying to see how much penalties affect a team's performance over the long-term. In traditional sports media, we often only look at the short-term when it comes to penalties. We've all seen a holding call derail a long drive or a questionable pass interference call in the 4th quarter completely change the complexion of a game.

But are penalties more closely related to a team's overall performance over the course of the season? Do they really add up to anything substantive in the bigger picture?

The way I'm doing this is by quanitfying the impact of individual penalties using Expected Points (EP). I'm not a statistician so I am using the calculation of EP from Pro Football Reference from their <a href="https://www.pro-football-reference.com/play-index/win_prob.cgi" target="_blank">Win Probability Calculator</a>. In essence, the EP formula takes in a particular game state (score differential, field position, down and distance, time remaining) and gives you a number which represents the number of points you can expect a team to score given that inputted game state. In other words, a more advantageous game state will yield a higher EP value. This is the crux of my project. Every penalty that is committed over the course of a game affects the game state in that it modifies the field position as well as down and distance. Therefore, I looked at the EP before a penalty was committed and the EP after a penalty was committed (taking into account the new game state) and looked at the difference between those 2 EP values. For the purposes of this project, I am treating EP as a tool to gauge the quality of a specific game state to better understand the impact of a penalty. EP allows us to give context to a penalty that aggregate stats fail to consider. 

I understand that this methodology isn't perfect and I am completely at the mercy of the Pro Football Reference EP formula and your personal opinion on its credibility. But I felt that, for the purposes of this project, it was a useful way to quantify the impact of a penalty while allowing for easy comparisons across games, teams, and seasons. 

Now let's dive into what I have done and how I have done it.

All of the data has been collected using Python scripts. If you are interested in taking a look at them or tinkering with them yourself, check out my github repo. At the time of writing, I am working on a detail readme file that will explain the scripts and how to use them. I will add it to the repo as soon as I am finished with it. I am also actively working on cleaning up and commenting the code.

My main data source was the MySportsFeedsAPI. I highly recommend checking it out if you have any interest in collecitng data fro any of the major North American sports. They have both free and paid data feeds that you can utilize based on your specific needs for both commercial and non-commercial applications. I also used the Win Probability Calculator on Pro Football Reference for the EP calculations.

I also subdivided my data collection into a couple of different types of penalties. I elaborate on these categories as well as other key concepts and terms in the glossary which you can find <a href="glossary">here</a>.

At the time of writing, I have finished collecting data for the 2018-19 and 2019-20 seasons. I have also created pages for each team which  contain a game-by-game report of all of the penalty data I have collected along with some supplemental graphs. I am currently working on creating a league page which takes a look at penalty trends across the league in the 2018-19 and 2019-20 season. I also intend on adding new penalty data weekly as the 2020-21 NFL season begins.

As always, if you have any questions, comments, or feedback feel free to email me at: <a href="mailto: nflpenaltystatsproject@gmail.com" target="_top">nflpenaltystatsproject@gmail.com</a>.