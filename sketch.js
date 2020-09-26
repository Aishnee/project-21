var bullet,wall;
var speed,weight,thickness;
var bullet2,bullet3,bullet4;
var wall1,wall2,wall3;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  bullet = createSprite(50,50,50,20);
 // car.debug=true;
  bullet2 = createSprite(50,150,50,20);
  bullet3 = createSprite(50,250,50,20);
  bullet4 = createSprite(50,350,50,20);
  wall = createSprite(1500,450,2,1000);
  wall1 = createSprite(50,90,10000,5);
  wall2 = createSprite(50,90,10000,5);
  wall3 = createSprite(50,200,10000,5);
  wall4 = createSprite(50,300,10000,5);
  bullet.velocityX=speed;
  bullet2.velocityX=speed;
  bullet3.velocityX=speed;
  bullet4.velocityX=speed;
}



  function hasCollided1(bullet,wall){
    bulletRightEdge=bullet.x +bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false;
  }

  function hasCollided2(bullet2,wall){
    bullet2RightEdge=bullet2.x +bullet2.width;
    wallLeftEdge=wall.x;
    if(bullet2RightEdge>=wallLeftEdge){
      return true;
    }
    return false;
  }

  function hasCollided3(bullet3,wall){
    bullet3RightEdge=bullet3.x +bullet3.width;
    wallLeftEdge=wall.x;
    if(bullet3RightEdge>=wallLeftEdge){
      return true;
    }
    return false;
  }

  function hasCollided4(bullet4,wall){
    bullet4RightEdge=bullet4.x +bullet4.width;
    wallLeftEdge=wall.x;
    if(bullet4RightEdge>=wallLeftEdge){
      return true;
    }
    return false;
  }
  
  function draw() {
    background(39,40,34);  
  
    if(hasCollided1(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);
      }
  
      if(damage<10)
      {
        wall.shapeColor=color(0,255,0);
      }
      
  
  
    }

    if(hasCollided2(bullet2,wall)){
      bullet2.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);
      }
  
      if(damage<10)
      {
        wall.shapeColor=color(0,255,0);
      }

      if(hasCollided3(bullet3,wall)){
        bullet3.velocityX=0;
        var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
        if(damage>10)
        {
          wall.shapeColor=color(255,0,0);
        }
    
        if(damage<10)
        {
          wall.shapeColor=color(0,255,0);
        }
        
        if(hasCollided4(bullet4,wall)){
          bullet4.velocityX=0;
          var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
      
          if(damage>10)
          {
            wall.shapeColor=color(255,0,0);
          }
      
          if(damage<10)
          {
            wall.shapeColor=color(0,255,0);
          }
          
      
      
        }
    
      }

      
  
  
    }
 

  drawSprites();
}