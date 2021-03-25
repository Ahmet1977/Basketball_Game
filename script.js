let JohnTeamScore = (110+120+103)/3;
let MikeTeamScore = (116+94+123)/3;
​
if (JohnTeamScore > MikeTeamScore) {
​
    console.log(`John's team wins in average ${JohnTeamScore}`)
} else if (MikeTeamScore > JohnTeamScore) {
  
    console.log(`Mike's team wins in average ${MikeTeamScore}`)
​
} else {
​
    console.log('There is draw')
}
    let MaryTeam = (97+137+105)/3;
​
if (JohnTeamScore > MikeTeamScore && JohnTeamScore > MaryTeam) {
​
    console.log(`John's team wins in average ${JohnTeamScore}`)
    
} else if (MikeTeamScore > JohnTeamScore && MikeTeamScore > MaryTeam) {
  
    console.log(`Mike's team wins in average ${MikeTeamScore}`)
​
} else if (MaryTeam > JohnTeamScore && MaryTeam > MikeTeamScore) {
​
    console.log(`Mary's team wins in average ${MaryTeam}`)
​
} else  {
​
    console.log('There is draw')
}