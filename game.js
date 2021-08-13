class Game 
{
    constructor(){}
getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value"), (data) => {
            gameState = data.val();
    }
}
     updateState(state)
     {
         database.ref('/').update({
                 gameState: state
         });
     }
     async start()
     {
         if(gameState === 0){
             player = new Contestant();
             var contestantCountRef = await database.ref('contestantCount').contestantCountRef("value");
             if(contestantCountRef.exists()){
                 playerCount = contestantCountRef.val();
                 player.getCount();
             }
             form = new Form();
             form.display();
         }
         play()
         {
             form.hide();
             
             Contestant.getPlayerInfo();
             
             if(allPlayers !== undefined)
             {
                var index = 0;
                 background("grey");
                 for(var plr in allPlayers)
                 {
                     index = index + 1;
                     if(player.index === 1)
                     {
                         player.index = a;
                         background("yellow");
                         console.log(player.index);

                     }

                 }

             }
         }
     }

    
}

