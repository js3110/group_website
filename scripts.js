function random_3(){
    var myrandom=Math.round(Math.random()*2)
    var link1="https://www.yourultimatemenu.com/satay-tofu-noodles/"
    var link2="https://www.epicurious.com/recipes/food/views/shakshuka-51220220"
    var link3="https://lovingitvegan.com/vegan-cottage-pie/"
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}
