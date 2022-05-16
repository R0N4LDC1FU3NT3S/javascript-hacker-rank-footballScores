


/*
 * Complete the 'counts' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY teamA
 *  2. INTEGER_ARRAY teamB
 */
export function counts(teamA, teamB) {
    if (
        2<=teamA<=Math.pow(10,5) &&
        2<=teamB<=Math.pow(10,5)
    ) {
        let ret = []
        teamB.forEach(
            x=>{
                let count = 0
                teamA.forEach(
                    y=>{
                        y<=x && count++
                    }
                )
                ret.push(count)
            }
        )

        return ret
    } else {
        return []
    }
}

