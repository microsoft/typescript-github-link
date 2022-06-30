import path = require("path");
import gh = require("./index");

const { argv } = process;

if (argv.length !== 3 && argv.length !== 4) {
    console.error(`Usage: ${path.basename(argv[0])} ${path.basename(argv[1])} {file_path} [{line_number}]`);
    process.exit(-1);
}

let localPath = argv[2];
let lineNumber = argv[3]; // May be undefined

if (!lineNumber) {
    const lineNumberMatch = localPath.match(/[:,]([0-9]+)/);
    if (lineNumberMatch) {
        lineNumber = lineNumberMatch[1];
        localPath = localPath.substr(0, lineNumberMatch.index);
    }
}

gh.getGithubLink(localPath, !!lineNumber ? +lineNumber : undefined).then(
    url => {
        console.log(url);
    },
    err => {
        console.error(err.message);
        process.exit(-2);
    });