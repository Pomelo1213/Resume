var APP_ID = 'EXFsEg9amld9Kk0AXfkyK7dy-gzGzoHsz';
var APP_KEY = 'wkF1VU1pLVXIloaa2znryX52';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('ChadDavid');
query.find()
    .then(function (todo) {
    todo.forEach((item) => {
        var messageList = document.getElementById('messageList')
        var li = document.createElement('li')
        var attributes = item.attributes
        li.innerText = attributes.name+' : '+attributes.content
        messageList.appendChild(li)
    })
    }, function (error) {
        console.log('留言失败！')
    })



var form = document.getElementById("postMessage")
form.addEventListener('submit', function(e){
    e.preventDefault()
    let content = document.querySelector('input[name=content]').value
    let name = document.querySelector('input[name=name]').value
    var TestObject = AV.Object.extend('ChadDavid');
    var testObject = new TestObject();
    testObject.save({
        content: content,
        name: name
      }).then(function(object) {
        var messageList = document.getElementById('messageList')
        var li = document.createElement('li')
        li.innerText = name+' : '+content
        messageList.appendChild(li)
      }).then(function(){
          document.querySelector('input[name=content]').value = ''
      })
})

