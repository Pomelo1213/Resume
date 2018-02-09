!function(){
    let view = document.querySelector('#topNameBar')
    let controller = {
        view: null,
        init: function(view){
            this.view = view
            this.bindEvent() 
        },
        bindEvent: function(){
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active: function(){
            this.view.classList.add('active');
        },
        deactive: function(){
            this.view.classList.remove('active')
        }
    }

    controller.init.call(controller, view)
}.call()