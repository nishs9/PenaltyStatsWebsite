const teamList = ["ARI","ATL","BAL","BUF","CAR","CHI","CIN","CLE","DAL","DEN","DET",
"GB","HOU","IND","JAX","KC","LA","LAC","MIA","MIN","NE","NO","NYG","NYJ","OAK","PHI",
"PIT","SEA","SF","TB","TEN","WAS"];

const nfcList = ["ARI","ATL","CAR","CHI","DAL","DET","GB","LA","MIN","NO","NYG","PHI","SEA","SF","TB","WAS"]

const afcList = ["BAL","BUF","CIN","CLE","DEN","HOU","IND","JAX","KC","LAC","MIA","NE","NYJ","OAK","PIT","TEN"]

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

export function getNFCTeams() {
    return nfcList.map(nfcTeam => {
        return {
            nfcTeam
        }
    })
}

export function getAFCTeams() {
    return afcList.map(afcTeam => {
        return {
            afcTeam
        }
    })
}