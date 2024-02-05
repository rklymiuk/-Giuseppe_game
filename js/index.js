'use strict';
const canvas = document.getElementById('canvas');

const c = canvas.getContext("2d");
canvas.width =1248;
canvas.height = 736;


 
const player = new Player();

const keys = {
    w:{
        presed: false

    },
    a:{
        pressed:false
    },
    d: {
        pressed:false
    },
}
  
const backgroundLevel1 = new Sprite({position:{
    x:0,
    y:0},
    ImageSrc: './resources/images/background.png',
});


function animate(){
    window.requestAnimationFrame(animate);
    
    backgroundLevel1.draw();
    CollisionBlocks.forEach((CollisionBlock) => {
        CollisionBlock.draw();
    });
    player.velocity.x= 0;
    if(keys.d.pressed){
        player.velocity.x = 8;
    } else if(keys.a.pressed){
        player.velocity.x = -8;
    };
    player.draw();
    player.update();

    }
    

animate();

