const AWS = require('aws-sdk');
const cloudfront = new AWS.CloudFront();
const DISTRIBUTION_ID = process.env.CLOUDFRONT_ID;

module.exports = {
  createInvalidation: id => {
    const params = {
      DistributionId: DISTRIBUTION_ID,
      InvalidationBatch: {
        CallerReference: Date.now().toString(),
        Paths: {
          Quantity: '2',
          Items: ['/', `/${id}`],
        },
      },
    };
  
    return new Promise((resolve, reject) => {
      cloudfront.createInvalidation(params, (err, data) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(data);
        }
      });
    });
  },
  response: (code, message, postId) => {
    return {
      statusCode: code,
      body: JSON.stringify(
        {
          message: message,
          postId,
        },
        null,
        2,
      ),
    };
  },
};
