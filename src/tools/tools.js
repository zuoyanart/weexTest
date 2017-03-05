let tools = (()=>{
  let self = {};
  const stream = weex.requireModule('stream');

  self.httpAgent = function(url, method="GET", data='') {
    return new Promise(function(resolve, reject) {
      stream.fetch({
        method: method,
        url: url,
        body: data,
        type:'json'
      }, function(response) {
        if(!response.ok) {
          reject(response);
        } else {
          resolve(response.data);
        }
      });
    });

  }
  return self;
})();

module.exports = tools;
