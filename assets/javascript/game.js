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
        var num = Math.floor(12 / charArr.length)
        for ( var i = 0 ; i < charArr.length ; i++) {
            var charThing = $("<div id='character-"+i+"' class='myChar col-md-"+num+"' value='"+i+"'></div>")
            charThing.html(
            "<img src='"+charArr[i].image+"' style='width:150px;height:150px;'/><h3>"+charArr[i].name+"</h3>"
            )
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
            console.log(chosenHero.image)
            $(".myHero").html(
                "<div id='character-" + chosenHero.id + "'><h1>Your Hero</h1><img src='" + chosenHero.image + "'/><h2>" + chosenHero.name + "</h2><h3 class='myHeroHP'>" + chosenHero.hp + "</h3></div>"
            )
       }
       else if (isEnemyChosen === false && chosenHero.name !== charArr[$(this).attr("value")].name) {
           chosenEnemy = charArr[$(this).attr("value")]
           console.log(chosenEnemy)
           $(this).addClass("fader")
           isEnemyChosen = true
           $(".myEnemy").html(
               "<div id='character-" + chosenEnemy.id + "'><h1>Your Enemy</h1><img src='" + chosenEnemy.image + "'/><h2>" + chosenEnemy.name + "</h2><h3 class='myEnemyHP'>" + chosenEnemy.hp + "</h3></div>"
           )
       }
    })

    // name, hp, sterngth, image
    var charArr =[ 
    {
        id : 0,
        name : "Fry",
        hp : 50,
        strength : 50,
        image : "./assets/images/fryguy.jpeg"
    },
    {
        id : 1,
        name : "Kiff",
        hp : 50,
        strength : 10,
        image : "./assets/images/kiff.jpeg"
    },
    {
        id : 2,
        name : "Leila",
        hp : 60,
        strength : 60,
        image : "./assets/images/leila.jpeg"
    },
    {
        id : 3,
        name : "Zoidberg",
        hp : 50,
        strength : 60,
        image : "./assets/images/zoidberg.jpeg"
    },
    {
        id : 4,
        name : "Bender",
        hp : 60,
        strength : 80,
        image : "./assets/images/bender.jpeg"
    },
    {
        id : 5,
        name : "Amy",
        hp : 50,
        strength : 50,
        image : "./assets/images/amy.jpeg"
    }]

    $(".myGameLog").html(
        "<button class='startBTN btn btn-success btn-lg'>Ready?</button>"
    )

    // Start button written into document
    $(document).on("click", ".startBTN", function() {
        gamePlayThing = $("<div class ='row'><button class='btn btn-lg btn danger attackBTN'>ATTACK</button></div><div class='row logger'></div")
        $(".myGameLog").html(gamePlayThing)
    })
    $(document).on("click", ".attackBTN", function () {
        chosenHero.hp -= Math.floor(Math.random() * 50)
        console.log(chosenHero.hp)
        chosenEnemy.hp -= Math.floor(Math.random() * 50)
        $(".myHeroHP").text(chosenHero.hp)
        $(".myEnemyHP").text(chosenEnemy.hp)
    }) 

    // Endgame winner alert
    $(document).on("click", ".attackBTN", function () {
        if (chosenHero.hp < 1) {
            alert("Your enemy, "+chosenEnemy.name+", emerges VICTORIOUS! Choose your new characters.")
            location.reload()
        }
        else if (chosenEnemy.hp < 1) {
            alert("Your hero, "+chosenHero.name+", emerges TRIUMPHANT! Choose your new characters.")
            location.reload()
        }
    })
    
    initGame()
})