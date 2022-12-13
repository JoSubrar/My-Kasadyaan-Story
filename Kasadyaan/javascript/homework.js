document.getElementById("p2").style.color = "red";
document.getElementById("p2").style.fontFamily = "'Playfair Display', serif";
document.getElementById("p2").style.fontSize = "larger";

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd < 10) {
    dd = '0'+dd
} 

if(mm < 10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
document.write(today);

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}


var image;
switch (new Date().getDay()) {
  case 0:
image= '<img src="images/miso.jpg"></img>';
    break;
  case 1:
image= '<img src="images/taco.jpg></img>';
    break;
  case 2:
image= '<img src="images/lamb.jpg></img>';
    break;
  case 3:
image= '<img src="images/trout.jpg"></img>';
    break;
  case 4:
 image= '<img src="images/porkbelly.jpg"></img>';
    break;
  case 5:
image= '<img src="images/filet.jpg"></img>';
    break;
  case  6:
image= '<img src="images/filet2.jpg"></img>';
}

var title;
switch (new Date().getDay()) {
  case 0:
title = 'Miso Salmon';
    break;
  case 1:
title ='Wasabi Mayo Beef Taco';
    break;
  case 2:
title ='Breaded Rack of Lamb';
    break;
  case 3:
title ='Pan-Seared Sea Trout';
    break;
  case 4:
title ='DongPo Rou';
    break;
  case 5:
title ='Beef Wellington';
    break;
  case  6:
title ='Beef Wellington';
}

var money;
switch (new Date().getDay()) {
  case 0:
money = '$25.50';
    break;
  case 1:
money ='$23.50';
    break;
  case 2:
money ='$31.50';
    break;
  case 3:
money ='$33.50';
    break;
  case 4:
money ='$23.50';
    break;
  case 5:
money ='$42.50';
    break;
  case  6:
money ='$42.50';
}
    
var text;
switch (new Date().getDay()) {
  case 0:
text= 'Fresh Salmon delivered on the day from the local market. Slathered with a simple miso sauce mixed with mirin, soy sauce, and a dab of sesame oil. Steamed to perfection in a slow cooker. Served on porridge rice.';
    break;
  case 1:
text='Panfried Ribeye sliced to thin pieces. A cadrefully made mixture between Wasabi and Mayo to create a Mexian-Japanese Fusion. Served with crispy taco shells and cabbage tossed in rice vinegar and sesame oil.';
    break;
  case 2:
text='A rack of lamb grilled to perfection brushed with Dijon mustard to press on a breadcrumb mixture combining different herbs and spices around the world to create the perfect aroma.';
    break;
  case 3:
text='Heated on a saute pan. Mixed with potatoes and Paprika until gold. Seasoned with salt and pepper and basted with lemony pan juices for extra flavor. Served with a side of chorizo fricassee and peas.';
    break;
  case 4:
text='Chinese Red-Cooked Pork Belly with a side of brocoli rabe. Secret recipe passed down from my ancestors. Slathered in a sweet sauce and finished with scallions and other garnishes.';
    break;
  case 5:
text='My favorite thing to make in the whole world. Normally only made on special ocassions, but for a limited time only, it will be served once every week.';
    break;
  case  6:
text='My favorite thing to make in the whole world. Normally only made on special ocassions, but for a limited time only, it will be served once every week.';
}


    
    
document.getElementById("image").innerHTML = image;

document.getElementById("image").style.textAlign = "center";

document.getElementById("day").innerHTML = day;

document.getElementById("day").style.color = "orange";
document.getElementById("day").style.fontFamily = "'Playfair Display', serif";
document.getElementById("day").style.fontSize = "larger";
document.getElementById("day").style.textAlign = "center";

document.getElementById("title").innerHTML = title;

document.getElementById("title").style.color = "blue";
document.getElementById("title").style.fontFamily = "'Playfair Display', serif";
document.getElementById("title").style.fontSize = "xx-large";
document.getElementById("title").style.textAlign = "center";

document.getElementById("money").innerHTML = money;

document.getElementById("money").style.color = "red";
document.getElementById("money").style.fontFamily = "'Playfair Display', serif";
document.getElementById("money").style.fontSize = "large";
document.getElementById("money").style.textAlign = "center";

document.getElementById("text").innerHTML = text;

document.getElementById("text").style.color = "gray";
document.getElementById("text").style.fontFamily = "'Playfair Display', serif";
document.getElementById("text").style.fontSize = "medium";
document.getElementById("text").style.textAlign = "center";