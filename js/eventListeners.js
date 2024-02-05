addEventListener('keydown', (event) =>{
    console.log(event)
    switch(event.key){
        case 'w':
            keys.w.pressed = true;
            if(player.velocity.y ===0){
            player.velocity.y = -15;}
            break;
        case 'a':
            keys.a.pressed = true;
            
            break;
        case 'd':
            keys.d.pressed = true;
            
            break;
        
    }

});
addEventListener('keyup', (event) =>{
    console.log(event)
    switch(event.key){
        case 'w':
            keys.w.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            player.velocity.x=0;
            break;
        case 'd':
            keys.d.pressed = false;
            player.velocity.x=0;
            break;
        
    }

});