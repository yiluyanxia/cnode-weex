var apiURL = {
  baseUrl: 'https://cnodejs.org/api/v1',
  topics: '/topics',
  topic: '/topic/',
  collect: '/topic_collect/collect',
  de_collect: '/topic_collect/de_collect',
  accesstoken: '/accesstoken'
}

var stream = weex.requireModule('stream');
var modal = weex.requireModule("modal");

function  toParams(obj) {  
  var param = ""  
  for (const name  in  obj) {    
    if (typeof  obj[name] !=  'function') {      
      param +=  "&"  + name +  "="  + encodeURI(obj[name])    
    }  
  }  
  return  param.substring(1)
};


function getData(url, params, callback) {
  stream.fetch({
    method: 'GET',
    url: apiURL.baseUrl + url + params,
  }, function (ret) {
    // var retdata = JSON.parse(ret);
    callback(ret);
  });
}

function postData(url, params, callback) {
  stream.fetch({
    method: 'POST',
    url: apiURL.baseUrl + url,
    type: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  }, function (ret) {
    
    callback(ret);

  });
}

export const getTopics = function (params, callback) {
  getData(apiURL.topics + '?', toParams(params), callback);
};

export const getTopic = function (params, callback) {
  getData(apiURL.topic, params, callback);
};

export const Login = function (params, callback) {
  postData(apiURL.accesstoken, params, callback);
};




// stream.fetch({
//   method: 'POST',
//   url: POST_URL,
//   type:'json'
//   body:JSON.stringify({username:'weex'})
// }, function(ret) {
//   if(!ret.ok){
//     me.postResult = "request failed";
//   }else{
//     console.log('get:'+JSON.stringify(ret));
//     me.postResult = JSON.stringify(ret.data);
//   }
// },function(response){
//   console.log('get in progress:'+response.length);
//   me.postResult = "bytes received:"+response.length;
// });



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