# Notes

#### AWS Keys

Admin Creds

```
AKIA4CONRN4WMN4DECLR
gBnbHsebbsqh0mOuQfyf6aDWfZUEMby0ybgjfC2U
```

MongoDB Atlas

```
mongodb://admin:GMP6OImpYNkGUlMZ@cluster0-shard-00-00-qjqs7.mongodb.net:27017,cluster0-shard-00-01-qjqs7.mongodb.net:27017,cluster0-shard-00-02-qjqs7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
```

#### WebApp

The Angular Web App for the project.

Deploy to GH Pages with

```
ng run WebApp:deploy
```

Eventually, once we move to AWS S3 hosting. You can deploy via

```
yarn deploy-beta
yarn deploy-prod
```

#### Api

The Typescript, Express, MongoDB API for the project.

You can deploy it with Elastic Beanstalk with

```
eb init
eb deploy
```
