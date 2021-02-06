var dog,HappyDog,foodS,foodStock;
var database;
var dog_image1 , dog_image2;
var lastFed;
var foodObj;
var feed,addFood;
var fedTime;
var bedroomImg,washroomImg,gardenImg;
var sadDog;
var gameState,readState,



function preload()
{
  dog_image1 = loadImage("images/dogImg.png");
  HappyDog = loadImage("images/dogImg1.png");
  bedroomImg = loadImage("virtual pet images/BedRoom.png");
  washroomImg = loadImage("virtual pet images/WashRoom.png");
  gardenImg = loadImage("virtual pet images/Garden.png");

}

function setup() {
  createCanvas(1000,500);
  readState=dataBase.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();
  });
  database = firebase.database();
  foodObj = new Food ();
  dog = createSprite(800,200,30,30);
  dog.addImage(dog_image1);
  dog.scale = 0.15;
  feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
 background(46,139,87);
  foodObj.display();

  if(gameState!="Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();
    food = createButton("Food");
    feed.position(700,120);
    feed.mousePressed(feedDog);
  }else{
    feed.show();
    addFood.show();
    dog.addImage(sadDog);
  }


  fedTime=database.ref("FeedTime");
  fedTime.on("value",function(data){
    lastFed=data.val();
  });

 

  drawSprites();
  fill(255,255,254)
  textSize(15);
  if(lastFed>=12){  
  text("Last Fed :"+ lastFed%12 + "PM" ,350,30);
  }else if(lastFed===0){
    text("Last Fed : 12 AM" , 350,30);
  }else{
    text("Last Fed : 12 AM" , 350,30);
  }

}

function update(state){
database.ref('/').update({
  gameState:state
});

}

function feedDog(){
  dog.addImage(HappyDog);
  console.log("hi");
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime: hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}


function readStock(data){
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}



