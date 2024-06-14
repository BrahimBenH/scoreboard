let home=document.getElementById("home")
let h=0
let guest=document.getElementById("guest")
let g=0
function home1(){
    h+=1
    home.innerText=h
}
function home2(){
    h+=2
    home.innerText=h
}
function home3(){
    h+=3
    home.innerText=h
}
function guest1(){
    g+=1
    guest.innerText=g
}
function guest2(){
    g+=2
    guest.innerText=g
}
function guest3(){
    g+=3
    guest.innerText=g
}
function reset(){
    h=0
    g=0
    home.innerText=(h)
    guest.innerText=(g)
}
