var apiURL = {
  baseUrl: 'https://cnodejs.org/api/v1',
  topics: '/topics',
  topic: '/topic/',
  collect: '/topic_collect/collect',
  de_collect: '/topic_collect/de_collect',

}

var stream = weex.requireModule('stream');

function  toParams(obj) {  
  var  param =  ""  
  for (const name  in  obj) {    
    if (typeof  obj[name] !=  'function') {      
      param +=  "&"  + name +  "="  + encodeURI(obj[name])    
    }  
  }  
  return  param.substring(1)
};


function getData(url, params, callback) {
  stream.sendHttp({
    method: 'GET',
    url: apiURL.baseUrl + url + params,
  }, function (ret) {
    var retdata = JSON.parse(ret);
    callback(retdata);
  });
}

export const getTopics = function (params, callback) {
  getData(apiURL.topics + '?', toParams(params), callback);
};

export const getTopic = function (params, callback) {
  getData(apiURL.topic, params, callback);
};



// stream.fetch({
//   method: 'GET',
//   url: GET_URL,
//   type: 'json'
// }, function (ret) {
//   if (!ret.ok) {
//     me.getResult = "request failed";
//   } else {
//     console.log('get:' + ret);
//     me.getResult = JSON.stringify(ret.data);
//   }
// }, function (response) {
//   console.log('get in progress:' + response.length);
//   me.getResult = "bytes received:" + response.length;
// });