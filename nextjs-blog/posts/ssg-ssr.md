---
title: 'NFL Penalty Stats Project Overview'
date: '2020-08-13'
---

If you haven't already read the introduction for this project, I suggest that you do. For the rest of you, let's dive into what I have done so far. 

At the very core of this project, I am trying to see how much penalties affect a game of football. We often hera announcers and analysts label penalties as "mental mistake" and lambast our teams when they rack up way too many in a loss. We've all seen a holding call derail a long drive or a questionable pass interference call completely change the complexion of a game. 

But are penalties more closely related to a team's overall performance over the course of the season? Do those "mental mistakes" really add up to anything in the bigger picture?

The way I'm choosing to actually quantify this impact is through Expected Points (EP). I'm not a statistician so I am using the calculation of EP from Pro Football Reference from their Win Probability Calculator. In essence, the EP formula takes in a particular game state (score differential, field position, down and distance, time remaining) and gives you a number which represents the number of points you can expect a team to score given that inputted game state. In other words, a more advantageous game state will yield a higher EP value. This is the crux of the project. Every penalty that is committed over the course of a game affects the game state in that it modifies the field position as well as down and distance. Therefore, I looked at the EP before a penalty was committed and the EP after a penalty was committed (taking into account the new game state) and looked at the difference between those 2 EP values. For the purposes of this project, I am treating EP more as tool to gaugae the quality of a specific game state to better understand the impact of a penalty. EP allows us to give context to a penalty that aggregate stats fail to consider. 

I understand that this methodology isn't perfect and I am completely at the mercy of the Pro Football Reference EP formula. But I felt that, for the purposes of this project, it was a useful and eadily quantifiable way to put penalties and their impact on a drive into perspective while allowing for easy comparisons across games, teams, and seasons. 