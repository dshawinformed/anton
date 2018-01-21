let dishesOrdered = [];
let restaurantDuty = [];
let dishes = [
  {
    "name": "brownie",
    "imgUrl": "https://www.chelsea.co.nz/files/cache/c7eb8909bcbfb9ff878c499feb1dcbd5_f1433.jpg",
    "description": "Cakey on the outside and fudgy in the middle, this easy brownie recipe really is the best! Done in an hour.",
    "category": "dessert",
    "spicy": false,
    "veg": true,
    "rating": 10,
    "price": 140,
    "avgDeliveryTime": 24
  },
  {
    "name": "cheese balls",
    "imgUrl": "https://i.pinimg.com/474x/77/3f/a0/773fa05899699a6d0c6b8c69ef93db8c--cheese-ball-recipes-appetizer-recipes.jpg",
    "description": "Cheese balls are a puffed corn snack, coated with a mixture of cheese or cheese-flavored powders.",
    "category": "starter",
    "spicy": false,
    "veg": true,
    "rating": 0,
    "price": 110,
    "avgDeliveryTime": 2
  },
  {
    "name": "cheese cake",
    "imgUrl": "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/9/0/FNK_Cheesecake_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387411272847.jpeg",
    "description": "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese (typically cream cheese or ricotta), eggs, and sugar; if there is a bottom layer it often consists of a crust or base made from crushed cookies (or digestive biscuits), graham crackers, pastry, or sponge cake.",
    "category": "dessert",
    "spicy": false,
    "veg": true,
    "rating": 4,
    "price": 70,
    "avgDeliveryTime": 28
  },
  {
    "name": "cheese wrap",
    "imgUrl": "https://fthmb.tqn.com/SH1xGp0lFefUbLHb99uWmXgpNo0=/960x0/filters:no_upscale()/88177231-56a9bedb3df78cf772aa2959.jpg",
    "description": "Looking for an easy vegetarian lunch? Try this vegan cream cheese veggie wraps recipe for lunch on the go. I love the combination of cream cheese and flour tortillas. Just add veggies, and you've got a healthy vegetarian wrap sandwich for lunch. Spinach and alfalfa sprouts make this cream cheese wrap super healthy, and avocado makes it absolutely delicious. Enjoy!",
    "category": "continental",
    "spicy": true,
    "veg": true,
    "rating": 4,
    "price": 200,
    "avgDeliveryTime": 26
  },
  {
    "name": "chicken pizza",
    "imgUrl": "https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS.jpg",
    "description": "Your family will never guess that this fun twist on typical pizza uses up leftover pesto. Loaded with chicken and black beans, hearty slices will fill them up fast! —Taste of Home.",
    "category": "italian",
    "spicy": true,
    "veg": false,
    "rating": 3,
    "price": 180,
    "avgDeliveryTime": 22
  },
  {
    "name": "chicken wings",
    "imgUrl": "https://www.newyorkfishchickengyros.com/wp-content/uploads/2017/11/Buffalo-Wings-15-1.jpg",
    "description": "Deep-fried, baked, buffalo, or teriyaki — whichever way you like them, chicken wings are the ultimate game-day food.",
    "category": "starter",
    "spicy": true,
    "veg": false,
    "rating": 9,
    "price": 270,
    "avgDeliveryTime": 6
  },
  {
    "name": "chilly chicken",
    "imgUrl": "https://content4.jdmagicbox.com/comp/chennai/v3/044pxx44.xx44.140220124418.d7v3/catalogue/al-ruban-restaurant-karapakkam-chennai-arabic-restaurants-irezg.jpg",
    "description": "Chilli chicken is a popular Indo-Chinese dish of chicken. In India, this may include a variety of dry chicken preparations. Though mainly boneless chicken is used in this dish, some people also recommend to use boned chicken too.",
    "category": "chinese",
    "spicy": true,
    "veg": false,
    "rating": 4,
    "price": 150,
    "avgDeliveryTime": 20
  },
  {
    "name": "classy pizza",
    "imgUrl": "https://i.pinimg.com/736x/a3/03/63/a303635a7276d43df7257b26c603e59c.jpg",
    "description": "Spinach and Pepperoni Stuffed Deep Dish Pizza. Also called stuffed pizza, this uniquely American dish originated in a Chicago pizzeria in 1943. The thick filling and crust requires a longer baking time than regular pizza, so the mozzarella is buried under the tomato layer to avoid burning.",
    "category": "italian",
    "spicy": false,
    "veg": true,
    "rating": 6,
    "price": 180,
    "avgDeliveryTime": 2
  },
  {
    "name": "coffee",
    "imgUrl": "https://baania.com/sites/default/files/styles/baan_thumbnail/public/property-project/22/photo/77408.jpg",
    "description": "Drinking coffee may do much more than just give you an energy boost. Coffee is actually very healthy. It is loaded with antioxidants and beneficial nutrients that can improve your health.",
    "category": "beverage",
    "spicy": false,
    "veg": true,
    "rating": 8,
    "price": 30,
    "avgDeliveryTime": 5
  },
  {
    "name": "crispy veg",
    "imgUrl": "https://i1.wp.com/mydhaba.in/wp-content/uploads/2015/07/veg-crispy.jpg?resize=600%2C338&quality=70&ssl=1",
    "description": "Batter Fried vegetables tossed with Chinese sauce is very popular and tasty dish it is like a starter or you can serve as evening snack .The sweet crispy and tangy taste make it a delightful recipe.",
    "category": "starter",
    "spicy": true,
    "veg": true,
    "rating": 7,
    "price": 190,
    "avgDeliveryTime": 21
  },
  {
    "name": "custard",
    "imgUrl": "https://diabetesdietblogdotcom.files.wordpress.com/2016/06/custard.jpg?w=640",
    "description": "Custard is a variety of culinary preparations based on a cooked mixture of milk or cream and egg yolk.",
    "category": "dessert",
    "spicy": false,
    "veg": true,
    "rating": 2,
    "price": 270,
    "avgDeliveryTime": 13
  },
  {
    "name": "french fries",
    "imgUrl": "https://78.media.tumblr.com/31f97f647c06a11267c3d93932fa1fad/tumblr_ozw8euQkYr1t9ocfzo2_r1_500.jpg",
    "description": "Frying the potatoes twice gives these french fries a crispiness not normally achieved in home cooked fries.",
    "category": "starter",
    "spicy": true,
    "veg": true,
    "rating": 0,
    "price": 70,
    "avgDeliveryTime": 12
  },
  {
    "name": "fried rice",
    "imgUrl": "https://i.ytimg.com/vi/Fpl3qy4g5OA/hqdefault.jpg",
    "description": "A quick fried rice like you get at your favorite Chinese restaurant. A couple of eggs, baby carrots, peas and soy sauce is all you need.",
    "category": "chinese",
    "spicy": false,
    "veg": true,
    "rating": 0,
    "price": 240,
    "avgDeliveryTime": 19
  },
  {
    "name": "garlic kebab",
    "imgUrl": "https://media2.s-nbcnews.com/j/newscms/2017_21/1216179/catherine-de-orio-mediterranean-chicken-tease-001-170522_5fdf4824ca317b2e56e937327e4e09e3.today-inline-large.jpg",
    "description": "The warmth of the spices combined with the cool yogurt sauce is a perfect match in this chicken kebab recipe. The yogurt keeps the chicken moist during cooking, making it virtually goof proof!",
    "category": "continental",
    "spicy": true,
    "veg": true,
    "rating": 8,
    "price": 200,
    "avgDeliveryTime": 1
  },
  {
    "name": "hot chocolate",
    "imgUrl": "https://i.pinimg.com/474x/41/8c/77/418c77bb24b54631cf5c09b07ddf69c2.jpg",
    "description": "Hot chocolate, also known as hot cocoa, drinking chocolate or just cocoa is a heated beverage consisting of shaved chocolate, melted chocolate or cocoa powder, heated milk or water, and usually a sweetener.",
    "category": "beverage",
    "spicy": false,
    "veg": true,
    "rating": 0,
    "price": 230,
    "avgDeliveryTime": 14
  },
  {
    "name": "lemonade",
    "imgUrl": "http://planttoplateaotearoa.org.nz/wp-content/themes/ptpa/uploads/lemonade-2-600x403.jpg",
    "description": "Lemonade is a very refreshing drink, and this is the best one ever!",
    "category": "beverage",
    "spicy": false,
    "veg": true,
    "rating": 6,
    "price": 190,
    "avgDeliveryTime": 13
  },
  {
    "name": "manchurian",
    "imgUrl": "https://i2.wp.com/vegecravings.com/wp-content/uploads/2017/03/veg-manchurian-dry-recipe-step-by-step-instructions-10.jpg?resize=500%2C500",
    "description": "Veg Manchurian is an Indo-Chinese dish made of deep fried mixed vegetable dumplings tossed in spicy Chinese sauces.",
    "category": "chinese",
    "spicy": false,
    "veg": true,
    "rating": 9,
    "price": 130,
    "avgDeliveryTime": 23
  },
  {
    "name": "noodles",
    "imgUrl": "https://image.slidesharecdn.com/jugglingchainsaws-yapc2015-150610221333-lva1-app6891/95/juggling-chainsaws-perl-and-mongodb-32-638.jpg",
    "description": "Noodles are a staple food in many cultures made from unleavened dough which is stretched, extruded, or rolled flat and cut into one of a variety of shapes",
    "category": "chinese",
    "spicy": false,
    "veg": true,
    "rating": 6,
    "price": 240,
    "avgDeliveryTime": 10
  },
  {
    "name": "red pasta",
    "imgUrl": "https://i.pinimg.com/736x/98/69/1d/98691dc353fa450bce6fb7c62f964689.jpg",
    "description": "Simple and delicious red tomato pasta which is so yummy and it turns out pretty close to restaurant ones. Super yummy and kids will love it for sure.",
    "category": "italian",
    "spicy": true,
    "veg": false,
    "rating": 8,
    "price": 120,
    "avgDeliveryTime": 19
  },
  {
    "name": "spagheti",
    "imgUrl": "http://www.culinaria.com.pl/images/culinaria_restauracja_spagetti_oborniki_wlkp.jpg",
    "description": "Spaghetti is a long, thin, solid, cylindrical pasta. Spaghettoni is a thicker form of spaghetti, while capellini is a very thin spaghetti. It is a staple food of traditional Italian cuisine.",
    "category": "italian",
    "spicy": false,
    "veg": true,
    "rating": 2,
    "price": 90,
    "avgDeliveryTime": 26
  },
  {
    "name": "spring roll",
    "imgUrl": "http://xenioszeus.com.gr/images/xenios_images/shut1.jpg",
    "description": "Spring rolls are a large variety of filled, rolled appetizers or dim sum found in East Asian and Southeast Asian cuisine.",
    "category": "chinese",
    "spicy": false,
    "veg": true,
    "rating": 0,
    "price": 220,
    "avgDeliveryTime": 1
  },
  {
    "name": "sundae",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/StrawberrySundae.jpg",
    "description": "The sundae is a sweet ice cream dessert. It typically consists of one or more scoops of ice cream topped with sauce or syrup, and in some cases other toppings including sprinkles, whipped cream, peanuts, maraschino cherries, or other fruits.",
    "category": "dessert",
    "spicy": false,
    "veg": true,
    "rating": 5,
    "price": 270,
    "avgDeliveryTime": 17
  },
  {
    "name": "taco",
    "imgUrl": "http://10000km.com/wp-content/uploads/2016/08/china16.jpg",
    "description": "A taco is a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling.",
    "category": "continental",
    "spicy": false,
    "veg": true,
    "rating": 9,
    "price": 130,
    "avgDeliveryTime": 4
  },
  {
    "name": "tandoori chicken",
    "imgUrl": "https://image1.jdomni.in/library/F4/5A/C9/F64F50B8A469F7996001C8F6C6_1509955089307_cropped_450X450.jpeg",
    "description": "Tandoori chicken is chicken dish prepared by roasting chicken marinated in yoghurt and spices in a tandoor, a cylindrical clay oven.",
    "category": "starter",
    "spicy": true,
    "veg": false,
    "rating": 8,
    "price": 130,
    "avgDeliveryTime": 28
  },
  {
    "name": "tea",
    "imgUrl": "http://bcdn.newshunt.com/cmd/resize/400x400_60/fetchdata11/images/43/49/73/434973a0fcb35059f83f668a532f3ec0.jpg",
    "description": "Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis, an evergreen shrub native to Asia.",
    "category": "beverage",
    "spicy": false,
    "veg": true,
    "rating": 2,
    "price": 20,
    "avgDeliveryTime": 7
  },
  {
    "name": "tomato soup",
    "imgUrl": "http://www.vegrecipesofindia.com/wp-content/uploads/2013/12/tomato-soup-recipe-4.jpg",
    "description": "What's more satisfying and comforting than a hot bowl of soup? This is an easy recipe and simply delicious. Tomato Soup is always good as a starter or light meal with salad and crusty bread.",
    "category": "continental",
    "spicy": false,
    "veg": true,
    "rating": 6,
    "price": 300,
    "avgDeliveryTime": 16
  },
  {
    "name": "veg sizzler",
    "imgUrl": "http://yourcookingpal.com/wp-content/uploads/2015/10/Veg-sizzlers-stuffed-cheesy-capcicum-Garlic-sauted-veggies-tangy-rice-and-soya-chilly-sauce.jpg",
    "description": "The sizzling sound of a 'Sizzler' makes one's mouth water. It is a fun dish to have in a restaurant, especially when you are dining with a close friend or family. A sizzler tray is a wooden tray over which a metal tray is placed, and heated until red hot.",
    "category": "continental",
    "spicy": true,
    "veg": true,
    "rating": 5,
    "price": 90,
    "avgDeliveryTime": 15
  },
  {
    "name": "virgin mojito",
    "imgUrl": "https://ds393qgzrxwzn.cloudfront.net/resize/m480x320/cat1/img/images/0/LMw5rH9qd6.jpg",
    "description": "Virgin Mojito is refreshing summer drink with a sweet and tangy flavor combined with the delicious fragrance of mint.",
    "category": "beverage",
    "spicy": false,
    "veg": true,
    "rating": 3,
    "price": 200,
    "avgDeliveryTime": 2
  },
  {
    "name": "white pasta",
    "imgUrl": "http://hungersstreet.com/productimg/Smoke-Cheese-Pasta.jpg",
    "description": "Tired of eating Red Tomato Pasta? Try this White Sauce Pasta Recipe! With its silky smooth and aromatic sauce made from butter, milk, all purpose flour (maida), and select spices, it's a guaranteed way to delight your taste buds.",
    "category": "italian",
    "spicy": false,
    "veg": true,
    "rating": 10,
    "price": 140,
    "avgDeliveryTime": 19
  }
];

let categories = [
{
    "name": "starter",
    "imgUrl": "https://image1.jdomni.in/library/F4/5A/C9/F64F50B8A469F7996001C8F6C6_1509955089307_cropped_450X450.jpeg",
    "description": "Love the starters",
    "category": "starter",
    "spicy": false,
    "veg": true,
    "rating": 10,
    "avgDeliveryTime": 19
},
{
    "name": "continental",
    "imgUrl": "http://yourcookingpal.com/wp-content/uploads/2015/10/Veg-sizzlers-stuffed-cheesy-capcicum-Garlic-sauted-veggies-tangy-rice-and-soya-chilly-sauce.jpg",
    "description": "Continental food",
    "category": "continental",
    "spicy": false,
    "veg": true,
    "rating": 10,
    "avgDeliveryTime": 19
},
  {
    "name": "dessert",
    "imgUrl": "http://hungersstreet.com/productimg/Smoke-Cheese-Pasta.jpg",
    "description": "mouth wattery desserts",
    "category": "dessert",
    "spicy": false,
    "veg": true,
    "rating": 10,
    "avgDeliveryTime": 19
  },
  {
    "name": "chinese",
    "imgUrl": "http://hungersstreet.com/productimg/Smoke-Cheese-Pasta.jpg",
    "description": "hakka noodles",
    "category": "chinese",
    "spicy": false,
    "veg": true,
    "rating": 10,
    "avgDeliveryTime": 19
  },{
    "name": "italian",
    "imgUrl": "http://hungersstreet.com/productimg/Smoke-Cheese-Pasta.jpg",
    "description": "a blend of century",
    "category": "italian",
    "spicy": false,
    "veg": true,
    "rating": 10,
    "avgDeliveryTime": 19
  },{
    "name": "beverage",
    "imgUrl": "https://ds393qgzrxwzn.cloudfront.net/resize/m480x320/cat1/img/images/0/LMw5rH9qd6.jpg",
    "description": "refreshes your body.",
    "category": "beverage",
    "spicy": false,
    "veg": true,
    "rating": 10,
    "avgDeliveryTime": 19
  }
];

const conversationReply = function(entityIntentResponse){
  //  return entityIntentResponse;
  let answer = {
    cards: false,
    text: '',
    animation: 'idle'
  }
      let flag=0;
  
  switch(entityIntentResponse.intent){
    case 'Utilities.Help': answer = { 
      cards: false,
      text: help.text(),
      animation: help.animation()
    }; break;
    case 'timeForOrder': answer = { 
      cards: false,
      text: timeForOrder.text(),
      animation: "idle"
    }; break;
    case 'showFood': answer = { 
      cards: true,
      text: showFood.text(entityIntentResponse.entities),
      animation: showFood.animation()
    }; break;
    case 'tellBill': answer = { //TODO
      cards: false,
      text: tellBill.text(),
      animation: 'blur'
    }; break;    
    case 'salutation': answer = { 
      cards: false,
      text: salutation.text(),
      animation: salutation.animation()
    }; break;
    case 'order':
      answer = {
        cards: false,
        text: order.text(entityIntentResponse.entities),
        animation: "idle"
      };
      flag=1;
      break;
    case 'None': answer = {
      cards: false,
      text: "Sorry I did not get you",
      animation: "idle"
    }; break;
    case 'news': answer = {
      cards: false,
      text: news.text(),
      animation: news.animation()
    }; break;
    case 'joke': answer = {
      cards: false,
      text: joke.text(),
      animation: joke.animation()
    }; break;
    case 'dance': answer = {
      cards: false,
      text: dance.text(),
      animation: dance.animation()
    }; break;
    case 'bill': answer = { //TODO
      cards: false,
      text: bill.text(),
      animation: "blur"
    }; break;
    case 'bestInCategory': answer = { //TODO
      cards: true,
      text: bestInCategory.text(entityIntentResponse.entities),
      animation: bestInCategory.animation()
    }; break;
    case 'OnDevice.TurnUpBrightness': answer = { 
      cards: false,
      text: increaseBrightness.text(),
      animation: increaseBrightness.animation(),
      task: "increaseBrightness"
    }; break;
    case 'OnDevice.TurnDownBrightness': answer = {
      cards: false,
      text: decreaseBrightness.text(),
      animation: decreaseBrightness.animation(),
      task: "decreaseBrightness"
    }; break;
    case 'enquire': answer = {
      cards: false,
      text: enquire.text(entityIntentResponse.entities),
      animation: "idle"
    };break;
    default: answer = {
      cards: false,
      text: "Error in Intent conversation"
    }
  }
  if (flag ==1){
    let ans_monitor='Order: ';
    for (let i=0;i<dishesOrdered.length;i++){
      ans_monitor+= dishesOrdered[i].name + ' ,';
    }
    for(let i=0;i<restaurantDuty.length; i++){
      ans_monitor+= restaurantDuty[i]+' ,';
    }
    ans_monitor+=' at table 3';
       params = {
         'item': ans_monitor 
    }
    let url = "http://localhost:3000/order123";
    var rp = require('request-promise');
    var luisRequest1 = {
      uri: url,
      qs: params,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    };
    rp(luisRequest1)
      .then(function (data) {
        console.log(data);
      })
      .catch(function (err) {
        console.log('error in LUIS API');
      }) 
  }
  return answer;

}

const enquire = {
  text: function(entities){
    if (entities[0]['type']=='dish')
    {let dish1 = entities[0]['entity'];
      for (let i=0;i<dishes.length;i++){
        if (dishes[i].name == dish1)
          return dishes[i].description;
      }
    }
     if (entities[0]['type']=='categoryName')
    {let category1 = entities[0]['entity'];
      for (let i=0;i<categories.length;i++){
        if (categories[i].name == category1)
          return categories[i].description;
      }
    }
  }
}

const bill = {
  text: function(){
    if (dishesOrdered.length == 0){
      return "please order something";}
    else{
      let amount =0;
      for (i=0;i<dishesOrdered.length;i++){
        amount+=dishesOrdered[i].price;
      }
      return "your total bill is of Ruppees "+amount.toString();
    }
  } 
}


const tellBill = {
  text: function(){
    if (dishesOrdered.length == 0){
      return "please order something";}
    else{
      let amount =0;
      for (i=0;i<dishesOrdered.length;i++){
        amount+=dishesOrdered[i].price;
      }
      return "your total bill is of Ruppees "+amount.toString();
    }
  } 
}

const timeForOrder = {
  text: function(){
    if(dishesOrdered.length == 0){
    return "please order something first";
    }
    else {
      let dishesWrtTime = dishes.sort(function(a, b){
        return b.avgDeliveryTime - a.avgDeliveryTime;
      });
      let mySortedDishes = dishesOrdered.sort(function(a,b){
        return b.avgDeliveryTime - a.avgDeliveryTime;        
      });
      let time;
      for (let i=0;i<dishes.length;i++){
        if(dishesWrtTime[i].name == mySortedDishes[0].name){
          time = dishesWrtTime[i].avgDeliveryTime;
        }
      }
      return "this will reach you in approximately "+time+" minutes";
    }
  }
}

const sendOrder = function(){
  console.log('order sent');
}

const order = {
  text: function(entities){
    if (entities.length == 0){
      return "Nothing ordered!"; 
    }
    let answer = '';
    for (let i=0 ; i<entities.length; i++){
      if (entities[i].type == 'dish'){
        for (let j=0;j<dishes.length;j++){
          if (dishes[j].name == entities[i].entity){
           dishesOrdered.push(dishes[j]); 
          }
        } 
        answer+=entities[i].entity;
        answer+=' ';
      }
      if (entities[i].type == 'restaurantDutyThings'){
        restaurantDuty.push(entities[i].entity);
        answer+=entities[i].entity;
        answer+=' ';
      }
    }
    return answer + " are on their way for you!";
  },
  animation: function(){
    return "idle";
  }
}

const make_card = function(dishName){
  for (let i=0;i<dishes.length; i++){
    if(dish[i].name == dishName){
      return dish[i]
    }
  }
}


let sorted_dishes = dishes.sort(function(a, b){
      return b.rating - a.rating;
});
const bestInCategory = {
  text: function(entities){
    if (entities.length == 0){
      return this.bestFoodOverAll();
    }
    else {
      let categories = [];
      for (entity in entities){
        categories.push(entity.entity);
      }
      return this.bestFoodInCategory(categories);
    }
  },
  animation: function(){
    return "idle";
  },
  bestFoodOverAll: function(){
    return sorted_dishes[0];
  },
  bestFoodInCategory: function(categories){
    let category = categories[0];
    for(let i=0;i<dishes.length;i++){
      if(sorted_dishes[i].category == category){
        return sorted_dishes[i];
      }
    }
  }
}

const showFood = {
  text: function(entities){
    if (entities.length == 0){
      return this.showCategories();
    }
    else {
      let foodCategory = {
        veg: false,
        spicy: false
      }
      for (let i=0;i<entities.length;i++){
        if (entities[i]["entity"] == "spicy"){
          foodCategory.spicy = true;
        }
        if (entities[i]["entity"] == "veg"){
          foodCategory.veg = true;
        }
      }
      return this.queriedFood(foodCategory);
    }
  },
  animation: function(){
    return "idle";
  },
  showCategories: function(){
    return categories;
  },
  queriedFood: function(foodCategory){
    let answer = [];
    for(let i=0;i<dishes.length;i++){
      if (dishes[i].veg == foodCategory.veg && dishes[i].spicy == foodCategory.spicy){
        answer.push(dishes[i]);
      }
    }
    return answer;
  }
}




const help = {
  text: function(){
    return "How can I help you!";
  },
  animation: function(){
    return "idle";
  }
}

const decreaseBrightness = {
  text: function(){
    return "Dimming down light! I am romantic that way";
  },
  animation: function(){
    return "idle";
  },
}


const increaseBrightness = {
  text: function(){
    return "Increasing Brightness! I am shining better now.";
  },
  animation: function(){
    return "idle";
  }
}

const jokesList = ['I went on a date last night with a girl from the zoo. It was great. She’s a keeper.', 'What do you call a bee that lives in America? A USB', 'I bought shoes from a drug dealer once. I dont know what he laced them with, but I was tripping all day.']

const joke = {
  text: function(){
    jokeRandom = Math.floor(Math.random() * 3);  
    return jokesList[jokeRandom];
  },
  animation: function(){
    return "idle";
  }
}


const newsList = ['Ed Sheeran announces his engagement to girlfriend Cherry', 'Bhansali invites Rajput group Karni Sena to watch Padmaavat', 'Liverpool fan names daughter after clubs iconic anthem','OnePlus confirms 40,000 users credit card data leaked', '100 J&K schools along LoC, border shut after shelling by Pak', 'I am not on Twitter, read printouts of Trump tweets: US Secy', 'Sharapova thrashed by former world no. 1 at Aus Open']

const news = {
  text: function(){
    newsRandom = Math.floor(Math.random() * 7);  
    return newsList[newsRandom];
  },
  animation: function(){
    return "idle";
  }

}
const dance = {
  text: function(){
    return "I am learning to dance Ballet. It will take me some time.";
  },
  animation: function(){
    return "idle";
  }
}


const salutation = {
  text: function(){
    return "Hey! I am Danny. Welcome to red wedding restaurant. How can I help you?";
  },
  animation: function(){
    return "idle";
  }
}





module.exports = {conversationReply:conversationReply}


