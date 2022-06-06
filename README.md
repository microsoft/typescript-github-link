# @typescript/github-link
For a file in a local clone of a Github repository, find the corresponding github.com permalink.

## Usage

`npx ghlink path/foo.ts`

`npx ghlink path/foo.ts line`

`npx ghlink path/foo.ts,line`

`npx ghlink path/foo.ts:line`

A trailing character position (e.g. as in Node.js stack traces) will also be tolerated, but will not affect the output.

If the commit exists in multiple remotes, `origin` will be preferred.  Failing that, one will be chosen at random.

## Deployment

To publish a new version of this package, change the version in `package.json` and push to main.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
