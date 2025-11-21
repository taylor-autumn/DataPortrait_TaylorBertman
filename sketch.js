let numCircles=10;
let numRects=20;
let moveRadius=0;
let growingRadius=true;
let weekDayCounter=0
let colorOptions=["#90EE9056","#00FF5677","#FF8C0059","#FD3A3C7A","#BD070366","#D5FFCE56"];
let colorChoice=0;
let weekDays=["Monday: 3m","Tuesday: 58 m","Wednesday: 2h 12m","Thursday: 1h 52m","Friday: 52m", "Saturday: 27m","Sunday: 9m"];
let targetRadius=0;
let switchDayNow=false;
let speed=1


function decideMainColorAndRadius(){
  dayOfWeek=weekDayCounter;
  if (dayOfWeek==0){ //monday
    colorChoice=5; //3m, lightest green
    targetRadius=100;
    speed=1.8;
    noStroke();
    stroke(colorOptions[4]);
  }
  if (dayOfWeek==1){ //tuesday
    colorChoice=2; //58m, orange
    targetRadius=220;
    speed=1.3;
    strokeWeight(2.5);
    stroke(colorOptions[0]);
  }
  if (dayOfWeek==2){ //wednesday
    colorChoice=4; //2h 12m, dark red
    targetRadius=450;
    speed=1.1;
    strokeWeight(6);
    stroke(colorOptions[2]);
  }
  if (dayOfWeek==3){ //thursday
    colorChoice=3;//1h 52 m, light red
    targetRadius=310;
    speed=1.2;
    strokeWeight(4.5);
    stroke(colorOptions[5]);
  }
  if (dayOfWeek==4){ //friday
    colorChoice=2; //52 m, orange
    targetRadius=220;
    speed=1.4;
    strokeWeight(2.5);
    stroke(colorOptions[0]);
  }
  if (dayOfWeek==5){ //saturday
    colorChoice=1; //27 m, neutral green
    targetRadius=150;
    speed=1.7;
    strokeWeight(2);
    stroke(colorOptions[2]);
    
  }if (dayOfWeek==6){ //sunday
    colorChoice=0; //9 m, lightest green
    targetRadius=100;
    speed=1.8;
    noStroke();
    stroke(colorOptions[2]);
  }
  
}

function nextDay(){
  weekDayCounter++;
  if (weekDayCounter >= weekDays.length) {
      weekDayCounter = 0;
  }
  decideMainColorAndRadius();
  growingRadius=moveRadius<targetRadius;
  print(weekDays[weekDayCounter]);

  
}


function setup() {
  createCanvas(400, 400);
  decideMainColorAndRadius();
  print(weekDays[weekDayCounter]);
}

function draw() {
  //background(220);

  currentSpeed=speed;
  
  if (growingRadius==true){
    moveRadius+=currentSpeed;
    if (moveRadius>=targetRadius){
       growingRadius=false;
    }
  }else{
    if (currentSpeed>1.5){
      currentSpeed*=2;
    }if (currentSpeed<1.5){
      currentSpeed*=4;
    }
    moveRadius-=currentSpeed;
    if (moveRadius<=10){
      growingRadius=true;
      switchDayNow=true;
    }
    
    if (switchDayNow){
      switchDayNow=false;
      nextDay();
    }
  }
  
  // //rectangles
  // push();
  // rotate(radians(45));
  // translate(50,-270);
  // blendMode(DIFFERENCE);
  // for (let i=0;i<numRects;i++){
  //   rect(i*40,i*50,-moveRadius,targetRadius);
  //   rect(width-i*40,i*30,moveRadius,targetRadius*-1);
  //   // rect(150,i*40,-moveRadius,targetRadius);
  //   }
  // pop();
  
  //inverse Circles in background
  fill(colorOptions[colorChoice]);
  push();
  translate(5,65);
    for (let i=1;i<numCircles;i++) {
    translate(150,-100);
    // scale(currentSpeed);
    rotate(radians(45));
    ellipse(200,moveRadius,300,moveRadius);
    ellipse(moveRadius,moveRadius,300,moveRadius);
    ellipse(150,moveRadius,300,moveRadius);
  }
  pop();
  
  
  //flower
  fill(colorOptions[colorChoice]);
  push();
  translate(5,65);
  blendMode(MULTIPLY);
  for (let i=1;i<numCircles;i++) {
    translate(150,-100);
    rotate(radians(45));
    ellipse(200,moveRadius,150,moveRadius);
    ellipse(moveRadius,moveRadius,200,moveRadius);
    ellipse(150,moveRadius,100,moveRadius);
  }
  pop();
  circle(200,200,moveRadius);
    

//   for (let i=1;i<numCircles;i++) {
//     circle(i*45,i*45,i+moveRadius);
//     circle(width-i*45,i*45,i+moveRadius);
    
//  }

  
}