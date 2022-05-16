import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import {counts} from './functions.js'

let inputString = [];

export function main() {    
    const teamACount = parseInt(inputString.shift())
    
    let teamA = [];
    
    for (let i = 0; i < teamACount; i++) {
        const teamAItem = parseInt(inputString.shift())
        teamA.push(teamAItem);
    }
    
    const teamBCount = parseInt(inputString.shift())
    
    let teamB = [];
    
    for (let i = 0; i < teamBCount; i++) {
        const teamBItem = parseInt(inputString.shift())
        teamB.push(teamBItem);
    }
        
    console.log("Main",{teamA,teamB})
    const result = counts(teamA, teamB);

    console.log(result.join('\n') + '\n');
}

const rl = readline.createInterface({ input, output });

rl.on("line",(inputStdin)=>{
	if (inputStdin.trim() == "exit") {
		process.exit()
	}
	inputString.push(inputStdin.trim())
	console.log("inputString:>>>>", inputString)
})

rl.on("close", () => {
    console.time("testTime")
	main()
    console.timeEnd("testTime")
})