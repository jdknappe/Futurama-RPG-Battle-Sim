$(document).ready(function() {
    var chosenHero 
    var chosenEnemy
    var isHeroChosen
    var isEnemyChosen
    var isHeroAlive
    var isEnemyAlive

    function initGame () {
        isHeroChosen = false
        isEnemyChosen = false
        for ( var i = 0 ; i < charArr.length ; i++) {
            var num = Math.floor(12 / charArr.length)
            var charThing = $("<div class='myChar col-md"+num+"' value='"+i+"'><img src='"+charArr[i].image+"' style='width:150px;height:150px;'/></div>")
            $("#characters").append(charThing)
        }   
    }
    // Click to choose hero
    $(document).on("click", ".myChar", function() {
       if (isHeroChosen === false) {
            chosenHero = charArr[$(this).attr("value")]
            console.log(chosenHero)
            $(this).addClass("fader")
            isHeroChosen = true 
       }
       else if (isEnemyChosen === false && chosenHero.name !== charArr[$(this).attr("value")].name) {
           chosenEnemy = charArr[$(this).attr("value")]
           console.log(chosenEnemy)
           $(this).addClass("fader")
           isEnemyChosen = true
       }
    })

    // name, hp, sterngth, image
    var charArr =[ 
    {
        name : "Fry",
        hp : 50,
        strength : 50,
        image : "./assets/images/fryguy.jpeg"
    },
    {
        name : "Kiff",
        hp : 50,
        strength : 10,
        image : "./assets/images/kiff.jpeg"
    },
    {
        name : "Leila",
        hp : 60,
        strength : 60,
        image : "./assets/images/leila.jpeg"
    },
    {
        name : "Zoidberg",
        hp : 50,
        strength : 60,
        image : "./assets/images/zoidberg.jpeg"
    },
    {
        name : "Bender",
        hp : 60,
        strength : 80,
        image : "./assets/images/bender.jpeg"
    },
    {
        name : "Hermes",    
        hp : 40,
        strength : 40,
        image : "./assets/images/hermes.jpeg"
    },
    {
        name : "Amy",
        hp : 50,
        strength : 50,
        image : "./assets/images/amy.jpeg"
    }
    ]

    initGame()
})