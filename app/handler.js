'use strict';
const { createInvalidation, response } = require("./utils");
const SUCCESS_MSG = 'Succeeded in purging CDN';
const FAILURE_MSG = 'Failed in purging CDN';

module.exports.execute = async (event) => {
  console.log('[info]', 'Event', JSON.stringify(event));
  const postId = JSON.parse(event.body).postId;
  
  try {
    await createInvalidation(postId);
    console.log('[info]', SUCCESS_MSG, `postId: ${postId}`);
    return response(200, SUCCESS_MSG, postId);
  } catch (e) {
    console.log('[error]', FAILURE_MSG, `error: ${e}`);
    return response(500, '', postId);
  }
};
