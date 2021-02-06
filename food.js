class Food {
    constructor(){
      this.FoodStock = 0;
      this.lastFed;
      this.image = loadImage("images/Milk.png");
    }

    display(){
      var x = 80 , y = 90;

      imageMode (CENTER);
      image(this.image,720,220,70,70)

      if(this.foodStock!==0){
          for(var i=1;i<=this.FoodStock;i++){
            console.log("3")
              if(i%10===0){
                console.log("2");
                  x=80
                  y=y+50
              }
              image(this.image,x,y,50,50);
              x = x+30;
        }
      }
      currentTime=hour();
      if(curentTime===(lastFed+1)){
          update("Playing");
          foodObj.garden();
      }else if(currentTime===(lastFed+2)){
        update("Sleeping");
        foodObj.bedroom();
      }else if(currnetTime>(lastFed+2) && currnetTime<=(lastFed+4)){
        update("Bathing");
        foodObj.washroom();
      }else{
        update("Hungry");
        foodObj.display();
      }
    }

    getFoodStock(){
    return this.FoodStock;
    }
    updateFoodStock(FS){
      this.FoodStock = FS;
    }   
    deductFoodStock(){
       if(this.FoodStock > 0){
         this.FoodStock -= 1
       }
    }

    getFeedTime(NF){
        this.lastFed = NF;
    }

    bedroom(){
      background(garden,550,500);
  }
    
    garden(){
      background(garden,550,500);
    }
    
    washroom(){
       background(washroom,550,500);
    }
    
}