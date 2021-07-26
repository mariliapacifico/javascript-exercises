/* assignment 9 
- let's say Sarah is looking for a new country to live in; she wants to live in a country that speaks english, has less than 50 million people and is not an island
- write an if statement to help Sarah figure out if your country is right for her. you will need to write a condition that accounts for all of Sarah's criteria. take your time with this and check part of the solution if necessary
- if yours is the right country, log a string like this: "You should live im Portugal :)" - if not, log "Portugal does not meet your criteria :("
- probably your country does not meet all the criteria, so, go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D) */

const country = "Brazil";
const population = 200;
const isIsland = false;
const language = "portuguese";

if (language === "english" && population < 50 && isIsland === false) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}