!function(){
    var view = document.querySelector('section.message')

    var controller = {
        view: null,
        messageList: null,
        form: null,
        loadHistory: function(){
            var query = new AV.Query('ChadDavid');
            query.find()
                .then( (todo) => {
                todo.forEach((item) => {
                    var messageList = document.getElementById('messageList')
                    var li = document.createElement('li')
                    var attributes = item.attributes
                    li.innerText = attributes.name+' : '+attributes.content
                    this.messageList.appendChild(li)
                })
                }, function (error) {
                    console.log('留言失败！')
                })
        },

        initAV: function(){
            var APP_ID = 'EXFsEg9amld9Kk0AXfkyK7dy-gzGzoHsz';
            var APP_KEY = 'wkF1VU1pLVXIloaa2znryX52';
            AV.init({appId: APP_ID,appKey: APP_KEY});   
        },

        bindEvents: function(){
            this.form.addEventListener('submit', function(e){
                e.preventDefault()
                this.saveMess()
            }.bind(this))
        },

        saveMess: function(){
            let content = this.form.querySelector('input[name=content]').value
            let name = this.form.querySelector('input[name=name]').value
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
        },

        init: function(view){
            this.view = view
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('#postMessage')
            this.initAV()
            this.loadHistory()
            this.bindEvents()
        }
    }

    controller.init.call(controller, view)

}.call()

