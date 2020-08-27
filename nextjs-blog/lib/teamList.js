const teamList = ["ARI","ATL","BAL","BUF","CAR","CHI","CIN","CLE","DAL","DEN","DET",
"GB","HOU","IND","JAX","KC","LA","LAC","MIA","MIN","NE","NO","NYG","NYJ","OAK","PHI",
"PIT","SEA","SF","TB","TEN","WAS"];

const nfcList = ["ARI","ATL","CAR","CHI","DAL","DET","GB","LA","MIN","NO","NYG","PHI","SEA","SF","TB","WAS"]

const afcList = ["BAL","BUF","CIN","CLE","DEN","HOU","IND","JAX","KC","LAC","MIA","NE","NYJ","OAK","PIT","TEN"]

const nameMap = {'ARI': 'Arizona Cardinals', 'ATL': 'Atlanta Falcons', 'BAL': 'Baltimore Ravens', 'BUF': 'Buffalo Bills', 
'CAR': 'Carolina Panthers', 'CHI': 'Chicago Bears', 'CIN': 'Cincinnati Bengals', 'CLE': 'Cleveland Browns', 'DAL': 'Dallas Cowboys', 
'DEN': 'Denver Broncos', 'DET': 'Detroit Lions', 'GB': 'Green Bay Packers', 'HOU': 'Houston Texans', 'IND': 'Indianapolis Colts', 
'JAX': 'Jacksonville Jaguars', 'KC': 'Kansas City Chiefs', 'LA': 'Los Angeles Chargers', 'LAC': 'Los Angeles Rams', 'MIA': 'Miami Dolphins', 
'MIN': 'Minnesota Vikings', 'NE': 'New England Patriots', 'NO': 'New Orleans Saints', 'NYG': 'New York Giants', 'NYJ': 'New York Jets',
'OAK': 'Las Vegas Raiders', 'PHI': 'Philadelphia Eagles', 'PIT': 'Pittsburgh Steelers', 'SF': 'San Francisco 49ers', 'SEA': 'Seattle Seahawks', 
'TB': 'Tampa Bay Buccaneers', 'TEN': 'Tennessee Titans', 'WAS': 'Washington Redskins'}

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

export function getTeamNameMap() {
    return nameMap
}