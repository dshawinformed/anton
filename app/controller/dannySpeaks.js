const dannySpeaks = {
  main: function(inputSpeech){
    let conversationReply = require('../services/conversation.js').conversationReply;

    return this.getEntityIntent(inputSpeech)
      .then(function(entityIntent){
        let entityIntentResponse = {
          intent : entityIntent.topScoringIntent.intent,
          entities : entityIntent.entities
        }
        return conversationReply(entityIntentResponse);
      })
      .catch(function(err){
        return err;
      })

  },

  getEntityIntent: function(inputSpeech){
    params = {
      "subscription-key": "744366811d0940ecb8e58b6946af9847",
      "verbose": "true",
      "timezoneOffset": "310",
      "q":inputSpeech
    }
    let url = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/06a7e72a-3acb-45fa-8c37-23868e576796";
    var rp = require('request-promise');
    var luisRequest = {
      uri: url,
      qs: params,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    };
    return rp(luisRequest)
      .then(function (data) {
        return data;
        console.log(data);
      })
      .catch(function (err) {
        console.log('error in LUIS API');
        return "error";
      });
  }
}

let conversationReply = function(entityIntentResponse){
  return entityIntentResponse; 
}
module.exports = {dannySpeaks: dannySpeaks}
