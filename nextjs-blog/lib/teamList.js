const teamList = ["ARI","ATL","BAL","BUF","CAR","CHI","CIN","CLE","DAL","DEN","DET",
"GB","HOU","IND","JAX","KC","LA","LAC","MIA","MIN","NE","NO","NYG","NYJ","OAK","PHI",
"PIT","SEA","SF","TB","TEN","WAS"];

export function getAllTeamNames() {
    return teamList.map(teamName => {
        return {
            params: {
                team: teamName
            }
        }
    })
}

export function getTeamData(team) {
    return {
        team
    }
}