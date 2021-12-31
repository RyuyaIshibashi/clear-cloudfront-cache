# Labmda function to clear cloudfront cache

## Features

- API Gateway + Lambda function to clear cloudfront cache
- Take a path as an argument and delete cloudfront cache of the path page and index page.

## Versions

- Node.js: 14.18.2
- Lambda runtime: Node.js 14.x 

## Usage

### serverless.yml

```
${env:CLOUDFORNT_RESOUCE}
```
set your cloudfront ARN

```
${env:CLOUDFRONT_ID}
```
set your cloudfront id

### Deploy

```
$ yarn deploy
```
