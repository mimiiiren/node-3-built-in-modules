/* -------------------------
💎 Birthstone Finder
----------------------------
We will refactor the Birthstone Finder app to read birthstone data from a separate JSON file.
------------------------- */
import fs from "fs/promises";

// user input
const month = process.argv[2];

async function getBirthstone() {
    // save data.json in utf8 format in data variable from fs (filesystem)
    const data = await fs.readFile("data.json", "utf8")
    // parse converts json into javascript
    const birthstones = JSON.parse(data)
    console.log(birthstones)

    birthstones[month]
        ? console.log(`The birthstone for ${month} is ${birthstones[month]}`)
        : console.log("Invalid month. Please enter a valid month name.")
}
getBirthstone();