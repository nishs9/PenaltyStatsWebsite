---
title: 'Glossary'
date: '2020-08-27'
---
<b>Drive Hindering Penalty (DHP)</b>
- A drive hindering penalty is just the term I use for offensive penalties such as holding, false start, etc.

<b>Drive Extending Penalty (DEP)</b>
- A drive extending penalty is any penalty that gives the offense a first down (regardless of whether it is automatic or via the yards gained as a result of the penalty).

<b>Other Penalty (OP)</b>
- Other penalties are just any defensive penalty that doesn't subsequently result in a first down for the offense.

<b>Expected Points (EP)</b>
- Expected points is a method by which we can assign a quanititative value to a given game state. A game state includes: time on the clock, quarter, field position, down and distance, and score differential. The EP value for any given game state can range from 0 to 6.
- In this project, I used the Pro Football Reference Win Probabilty Calculator to get my EP values. You can find it here: <a href="https://www.pro-football-reference.com/play-index/win_prob.cgi" target="_blank">https://www.pro-football-reference.com/play-index/win_prob.cgi</a>.
- Also if you want a deeper dive into EP and what insight you can gain from it, Brian Burke of Advanced Football Analytics wrote an article that I found helpful when trying to understand the concept: <a href="https://www.advancedfootballanalytics.com/index.php/home/stats/stats-explained/expected-points-and-epa-explained" target="_blank">https://www.advancedfootballanalytics.com/index.php/home/stats/stats-explained/expected-points-and-epa-explained</a>.

<b>Expected Points Conceded (EPC)</b>
- This stat is simply the absolute value of the difference between the EP before a penalty and the EP after a penalty. It measure the relative value added/lost when a penalty is committed. 
- You will also see several adaptation of EPC which are just filtered based on the type of penalty:
	- <i>Total Expected Points Conceded from Penalties (tEPCP/tEPC)</i>: This is the total amount of EPC conceded by a team from all types of penalties.
	- <i>Total Expected Points Conceded from Drive Hindering Penalties (tEPCDHP/tEPDHP)</i>: This is the total amount of EPC conceded by a team from Drive Hindering Penalties.
	- <i>Total Expected Points Conceded from Drive Extending Penalties (tEPCDEP/tEPDEP)</i>: This is the total amount of EPC conceded by a team from Drive Extending Penalties.
	- <i>Total Expected Points Conceded from Other Penalties (tEPCOP/tEPOP)</i>: This is the total amount of EPC conceded by a team from Other Penalties.