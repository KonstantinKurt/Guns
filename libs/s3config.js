const aws = require('aws-sdk');

const s3Client = new aws.S3({
    accessKeyId: env.AWS_ACCESS_KEY,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    region : env.REGION
});
const uploadParams = {
         Bucket: env.Bucket, 
         Key: '', 
         Body: null, 
};
const s3 = {};
s3.s3Client = s3Client;
s3.uploadParams = uploadParams;
 
module.exports = s3;