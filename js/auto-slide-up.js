!function(){
    
    let findThings = document.querySelectorAll('[site-Flag]')
    for (let i = 0; i < findThings.length; i++) {
        findThings[i].classList.add('animation')
    }

    findClosetAndRemoveOffset()
    window.addEventListener('scroll', function () {
        findClosetAndRemoveOffset()
    })

    function findClosetAndRemoveOffset() {
        let findThings = document.querySelectorAll('[site-Flag]')
        let minIndex = 0
        for (let i = 1; i < findThings.length; i++) {
            if (Math.abs(findThings[i].offsetTop - window.scrollY) < Math.abs(findThings[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }

        findThings[minIndex].classList.remove('animation')
        let id = findThings[minIndex].id
        let href = document.querySelector('a[href="#' + id + '"]')
        let li = href.parentNode
        let liBrothers = li.parentNode.children;
        for (let i = 0; i < liBrothers.length; i++) {
            liBrothers[i].classList.remove('highlight')
        }
        li.classList.add('highlight')

    }

    let liTags = document.querySelectorAll('nav.menuTags > ul > li')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
            x.currentTarget.classList.add('active')
        }

        liTags[i].onmouseleave = function (x) {
            x.currentTarget.classList.remove('active')
        }
    }

}.call()