


let findThings = document.querySelectorAll('[site-Flag]')
for(let i = 0; i < findThings.length; i++){
    findThings[i].classList.add('animation')
}

setTimeout(function(){
    findCloset()
}, 1100)

window.onscroll = function(){
    if(window.scrollY > 0){
        topNameBar.classList.add('active');
    }else{
        topNameBar.classList.remove('active');
    }

    findCloset()

}

function findCloset(){
    let findThings = document.querySelectorAll('[site-Flag]')
    let minIndex = 0
    for(let i = 1; i < findThings.length; i++){
        if(Math.abs(findThings[i].offsetTop - window.scrollY) < Math.abs(findThings[minIndex].offsetTop - window.scrollY)){
            minIndex = i
        }
    }

    findThings[minIndex].classList.remove('animation')
    console.log(findThings[minIndex])
    let id = findThings[minIndex].id
    let href = document.querySelector('a[href="#'+ id+'"]')
    let li = href.parentNode
    let liBrothers = li.parentNode.children;
    for(let i = 0; i < liBrothers.length; i++){
        liBrothers[i].classList.remove('highlight')
    }
    li.classList.add('highlight')

}

let liTags = document.querySelectorAll('nav.menuTags > ul > li')
for(let i = 0; i < liTags.length; i++){
    liTags[i].onmouseenter = function(x){
        x.currentTarget.classList.add('active')
    }

    liTags[i].onmouseleave = function(x){
        x.currentTarget.classList.remove('active')
    }
}

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}

requestAnimationFrame(animate);

let as = document.querySelectorAll('nav.menuTags > ul > li > a')
for(let i = 0; i < as.length; i++){
    as[i].onclick = function(x){
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        let currentTop = window.scrollY

        var coords = {y: currentTop };
        var tween = new TWEEN.Tween(coords)
            .to({y: top-80 }, 500)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(function() {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}