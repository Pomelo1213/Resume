!function () {
    let view = document.querySelector('nav.menuTags')
    let controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.initAnimation()
            this.bindEvent()
        },
        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function (element) {
            let top = element.offsetTop
            let currentTop = window.scrollY

            let coords = { y: currentTop };
            let tween = new TWEEN.Tween(coords)
                .to({ y: top - 80 }, 500)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
        },
        bindEvent: function () {
            let as = view.querySelectorAll('ul > li > a')
            for (let i = 0; i < as.length; i++) {
                as[i].onclick = (x) => {
                    x.preventDefault()
                    let a = x.currentTarget
                    let href = a.getAttribute('href')
                    let element = document.querySelector(href)
                    this.scrollToElement(element)
                }
            }
        }
    }

controller.init.call(controller, view)
    
}.call()