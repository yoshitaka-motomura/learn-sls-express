# Serverless Example Application for Express & Typescript With MongoDB

This learn `aws serverless Framework`.

We will build an application connected to Mongo Atlas using Express and typescript.

## Overview

that is  create a WEB API for this URL

```
https://sls.cristallum.io/geo?lng=139.7023894&lat=35.6598003
```


## Introduction
- [mongo Atlas](https://www.mongodb.com/atlas/database)
- [aws](https://aws.amazon.com/)

This source code connects to mongo atlas.
Please make sure you have a mongo atlas account. (There are plans available for free.)
If you want to use it only locally, you don't need an Aws account.

A good way to manipulate the mongo db is to use compass, which is a GUI tool.

- [compass](https://www.mongodb.com/products/compass)

## Howto

You should already be able to create a database in mongo atlas.
If you haven't, please refer to the documentation.
If it is in Japanese, I can help you.

This application deals with latitude and longitude.
Since mongodb supports the 2dsphere, it is very suitable for handling latitude and longitude information.
We need to explicitly set the index.
Since this application only has READ in CRUD, we can't add it in mongodb's ORM, so we'll use compass, which I introduced earlier, to set it up.

```
// create collection
db.createCollection('stores')

// create index
db.stores.createIndex( { loc : "2dsphere" }, {name: '_loc_'} )
```

Import the sample data into the corresponding collection. Your preparations are now complete.
Change `.env.example` to `.env` and add your mongo configuration

---


```
yarn
yarn run dev
```

## Deploy 


```
yarn run deploy:dev
```

(ex.
```
npm install -g severless
```
## Reference.
sample data uses the location data of a convenience store in Tokyo.
This data is borrowed from the following link. Thank you.

[公益財団法人 統計情報研究開発センター](https://www.sinfonica.or.jp/kanko/estrela/refer/s29/index.html)





