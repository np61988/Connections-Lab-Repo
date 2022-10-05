//Code snippets and tutorial reference: https://www.youtube.com/watch?v=kZYRSOGoM5Q
//Map sourced from Mapbox



var mapUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.9867,40.6902,14.27,0/1280x1280?access_token=pk.eyJ1IjoibnBhZGlsbGE2ODgiLCJhIjoiY2w4bDB0eDhzMGRibTN2dG9iNXp6cmpjbCJ9.30J9yHVlcmPHJCOzWLFJNA";

var myMap;

var dots =[];

var button;

function preload(){
  myMap = loadImage(mapUrl);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  image(myMap, windowWidth/2, windowHeight/2);
  

//textSize(32);
//textAlign(CENTER);
//fill(20);
//text('History of Here - 370 Jay Street Edition', windowWidth/2, 50);
  
  
   button = createButton('submit');
  button.position(windowWidth/2, windowHeight -300);
  button.mousePressed(submit);

}

function draw() {
  
  
}

function mousePressed(){
  var dot = new Dot(mouseX, mouseY,10, color(87,6,140));
  dot.show();
  dots.push(dot);
  print(dots);
  
}
  
function submit(){
  
  
  
  
  function saveInput() {

  //Make a table with two columns
  dataTable = new p5.Table();
  dataTable.addColumn('latitude');
  dataTable.addColumn('longitude');

  //Extract coordinates from staticmap 
  var split1 = split(mapUrl, '/');
  var split2 = split(split1[8], '[');
  var split3 = split(split2[1], ']');
  var urlCoord = split(split3[0], ',');

  //Calculate the bounderies of the map image
  var mapPosXmin = (windowWidth / 2) - (myMap.width / 2);
  var mapPosYmin = (windowHeight / 2) - (myMap.height / 2);
  var mapPosXmax = (windowWidth / 2) + (myMap.width / 2);
  var mapPosYmax = (windowHeight / 2) + (myMap.height / 2);

  //Iterate trough the dots array and convert x and y to lat and long.
  for (let i = 0; i < dots.length; i++) {

    var pointLat = map(dots[i].y, mapPosYmax, mapPosYmin, float(urlCoord[1]), float(urlCoord[3]));
    var pointLng = map(dots[i].x, mapPosXmax, mapPosXmin, float(urlCoord[2]), float(urlCoord[0]));

    // Save it as a new row to the table. 
    var tableRow = dataTable.addRow();
    tableRow.setString('latitude', pointLat.toString());
    tableRow.setString('longitude', pointLng.toString());
  }
  //Save table as a csv file locally
  saveTable(dataTable, 'new.csv');

  //to be implented later
  // save data to server Fire Base: 
  //https://www.youtube.com/watch?v=JrHT1iqSrAQ - 

}
  
  
}

  //fill(87,6,140);
  //ellipse(mouseX,mouseY, 10,10);
  
//}