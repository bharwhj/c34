var dog
var happyDog
var database
var foodS,foodStock

function preload()
{
  dog.loadImage("dogImg.png")
  happyDog.loadImage("dogImg1.png")
}

function setup()
 {
  createCanvas(500, 500);
  background(46,139,)
  dog.createSprite()
  dog.addImage(dog1)
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW))
  {
   
  writeStock(foodS)
  dog.addImage(dogHappy1);
  }
  drawSprites();
  text("Note:"+UP_ARROW+"to feed drago Milk" )

}

function WStock(x){

database.ref('/').update({

Food:x

})

function readStock(data){


foodS=data.val();


}

}



