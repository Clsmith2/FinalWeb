var cards= [];

function intArray(input){
   ints = input.split(/\,\s*/);
return ints;
}

function greaterThan10(input_array){
  var sum= 0;
  result = 'We good'
  for(i = 0; i < input_array.length; i++ ){
    sum = sum + Number(input_array[i]);
  }
  console.log(sum);
  if(sum > 10){
    result = "Total can not be over 10"
    console.log("Total can not be over 10")
    throw new Error("Total can not be over 10")
  }
  return result;
}

function cardSelection(input_array){
  var cardsSelected = [0,0,0,0,0,0,0,0,0,0];
  var num = 0;  
  console.log(input_array)
  for(i = 0; i < input_array.length; i++ ){
    for(j = 0; j <input_array[i]; j++){
      if(i == 0){
        randomNum = Math.floor(Math.random() * (30 - 0))
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (30 - 0))
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 1){
        randomNum = Math.floor(Math.random() * (42 - 31) )+31
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (42 - 31) )+31
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 2){
        randomNum = Math.floor(Math.random() * (73 - 43) )+43
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (73 - 43) )+43
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 3){
        randomNum = Math.floor(Math.random() * (108 - 74) )+ 74
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (108 - 74) )+ 74
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 4){
        randomNum =  Math.floor(Math.random() * (118 - 109) )+ 109
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum =  Math.floor(Math.random() * (118 - 109) )+ 109
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 5){
        randomNum = Math.floor(Math.random() * (162 - 119) )+119
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (162 - 119) )+119
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 6){
        randomNum = Math.floor(Math.random() * (193 - 163) )+163
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (193 - 163) )+163
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 7){
        randomNum = Math.floor(Math.random() * (206 - 194) )+194
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (206 - 194) )+194
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 8){
        randomNum = Math.floor(Math.random() * (232 - 207) )+207
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (232 - 207) )+207
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 9){
        randomNum = Math.floor(Math.random() * (264 - 233) )+233
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (264 - 233) )+233
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 10){
        randomNum = Math.floor(Math.random() * (294 - 265) )+265
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (294 - 265) )+265
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 11){
        randomNum = Math.floor(Math.random() * (328 - 295) )+295
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (328 - 295) )+295
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 12){
        randomNum = Math.floor(Math.random() * (339 - 329) )+329
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (339 - 329) )+329
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 13){
        randomNum = Math.floor(Math.random() * (364 - 340) )+340
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (364 - 340) )+340
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 14){
        randomNum = Math.floor(Math.random() * (389 - 365))+365
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum = Math.floor(Math.random() * (389 - 365))+365
        }
        cardsSelected[num] = randomNum
        num++;
      }
      if(i == 15){
        randomNum =  Math.floor(Math.random() * (415 - 390))+390
        while(cardsSelected.indexOf(randomNum) != -1){
          randomNum =  Math.floor(Math.random() * (415 - 390))+390
        }
        cardsSelected[num] = randomNum
        num++;
      }
    } 
  }
  while(num < 10){
    console.log(num)
    randomNum =  Math.floor(Math.random() * (414 - 0))
    while(cardsSelected.indexOf(randomNum) != -1){
      randomNum =  Math.floor(Math.random() * (414 - 0))
    }
    cardsSelected[num] = randomNum
    num++;
  }
  return cardsSelected;
}

var button2 = document.getElementById("button2");

button2.addEventListener("click", function() {
  var input = document.getElementById("Adventures").value;
  input = input + ',' + document.getElementById("Alchemy").value;
  input = input + ',' + document.getElementById("Allies").value;
  input = input + ','  + document.getElementById("Base").value;
  input = input + ','  + document.getElementById("Cornucopia").value;
  input = input + ','  + document.getElementById("Dark_Ages").value;
  input = input + ','  + document.getElementById("Empires").value;
  input = input + ','  + document.getElementById("Guilds").value;
  input = input + ','  + document.getElementById("Hinterlands").value;
  input = input + ','  + document.getElementById("Intrigue").value;
  input = input + ','  + document.getElementById("Menagerie").value;
  input = input + ','  + document.getElementById("Nocturne").value;
  input = input + ','  + document.getElementById("Promo").value;
  input = input + ','  + document.getElementById("Prosperity").value;
  input = input + ','  + document.getElementById("Renaissance").value;
  input = input + ','  + document.getElementById("Seaside").value;
  console.log(intArray(input))
  if(greaterThan10(intArray(input)) == 'We good'){
    console.log(cardSelection(intArray(input)));
    results = cardSelection(intArray(input))
    cards = results;
    return results;
  }
});
  




  function randomize(listNames) {
    arrayNames = listNames.split(/\,\s*/);
  
    if (arrayNames.length <= 1) {
      throw new Error("Must have more than 1 name");
    }
  
    var new_arrayNames = [];
    while (arrayNames.length > 0) {
      var index = Math.floor(Math.random() * arrayNames.length);
      value = arrayNames.splice(index, 1);
      new_arrayNames.push(value);
    }
    return new_arrayNames;
  };
  
  function orderNames(arr) {
    var list = "";
    for (i = 0; i < arr.length; i++) {
      list = list + ((i + 1) + ": " + arr[i] + '<br>')
    }
    return list;
  };
  
  var button = document.getElementById("button");
  
  button.addEventListener("click", function() {
    var input = document.getElementById("input").value;
    document.getElementById("names").innerHTML = orderNames(randomize(input));
  });

var kingdom = Vue.createApp({
  data() {
    return{
      cards,
      cardNames: [],
            myImage0: '',
            myImage1: '',
            myImage2: '',
            myImage3: '',
            myImage4: '',
            myImage5: '',
            myImage6: '',
            myImage7: '',
            myImage8: '',
            myImage9: ''}
},
  created(){
    this.getCardList();
  },
  methods: {
    click(){ 
      this.shuffleSound();
      if(cards.length > 1){
        const card0 = this.cardNames[cards[0]].name;
        const card1 = this.cardNames[cards[1]].name;
        const card2 = this.cardNames[cards[2]].name;
        const card3 = this.cardNames[cards[3]].name;
        const card4 = this.cardNames[cards[4]].name;
        const card5 = this.cardNames[cards[5]].name;
        const card6 = this.cardNames[cards[6]].name;
        const card7 = this.cardNames[cards[7]].name;
        const card8 = this.cardNames[cards[8]].name;
        const card9 = this.cardNames[cards[9]].name;
        this.myImage0 = "static/card_images/"+card0+".jpg";
        this.myImage1 = "static/card_images/"+card1+".jpg";
        this.myImage2 = "static/card_images/"+card2+".jpg";
        this.myImage3 = "static/card_images/"+card3+".jpg";
        this.myImage4 = "static/card_images/"+card4+".jpg";
        this.myImage5 = "static/card_images/"+card5+".jpg";
        this.myImage6 = "static/card_images/"+card6+".jpg";
        this.myImage7 = "static/card_images/"+card7+".jpg";
        this.myImage8 = "static/card_images/"+card8+".jpg";
        this.myImage9 = "static/card_images/"+card9+".jpg";
      }
      else{
        const card0 = this.cardNames[Math.floor(Math.random() * (414 - 0))].name;
        const card1 = this.cardNames[Math.floor(Math.random() * (414 - 0))].name;
        const card2 = this.cardNames[Math.floor(Math.random() * (414 - 0))].name;
        const card3 = this.cardNames[Math.floor(Math.random() * (414 - 0))].name;
        const card4 = this.cardNames[Math.floor(Math.random() * (414 - 0))].name;
        const card5 = this.cardNames[Math.floor(Math.random() * (414 - 0))].name;
        const card6 = this.cardNames[Math.floor(Math.random() * (414 - 0))].name;
        const card7 = this.cardNames[Math.floor(Math.random() * (414 - 0))].name;
        const card8 = this.cardNames[Math.floor(Math.random() * (414 - 0))].name;
        const card9 = this.cardNames[Math.floor(Math.random() * (414 - 0))].name;
        this.myImage0 = "static/card_images/"+card0+".jpg";
        this.myImage1 = "static/card_images/"+card1+".jpg";
        this.myImage2 = "static/card_images/"+card2+".jpg";
        this.myImage3 = "static/card_images/"+card3+".jpg";
        this.myImage4 = "static/card_images/"+card4+".jpg";
        this.myImage5 = "static/card_images/"+card5+".jpg";
        this.myImage6 = "static/card_images/"+card6+".jpg";
        this.myImage7 = "static/card_images/"+card7+".jpg";
        this.myImage8 = "static/card_images/"+card8+".jpg";
        this.myImage9 = "static/card_images/"+card9+".jpg";
      }
        },
    getCardList(){
      axios.get('/cards/').then(response=>{this.cardNames = response.data.cards})
    },
    shuffleSound(){
      var snd = new Audio("static/sounds/shuffling-cards-1.mp3");
      snd.play();
    }
  },
}).mount('#kingdom')
