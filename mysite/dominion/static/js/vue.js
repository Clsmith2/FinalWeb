var names = Vue.createApp({
    data() {
        return{
        list: ['Colin', 'Eric', 'Phoenix', 'Brandon'],
        chosenName: ''}
    },
    methods: {
        picker(){
            var chosenNumber = Math.floor(Math.random() * this.list.length);
            this.chosenName = this.list[chosenNumber];
        }
    }
  }).mount('#names')


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
      list += ((i + 1) + ": " + arr[i] + '<br>')
    }
    return list;
  };
  
  var button = document.getElementById("button");
  
  button.addEventListener("click", function() {
    var input = document.getElementById("list").value;
    document.getElementById("results").innerHTML = orderNames(randomize(input));
  });

var kingdom = Vue.createApp({
  data() {
    return{
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
      const card0 = this.cardNames[Math.floor(Math.random() * (417 - 0))].name;
      const card1 = this.cardNames[Math.floor(Math.random() * (417 - 0))].name;
      const card2 = this.cardNames[Math.floor(Math.random() * (417 - 0))].name;
      const card3 = this.cardNames[Math.floor(Math.random() * (417 - 0))].name;
      const card4 = this.cardNames[Math.floor(Math.random() * (417 - 0))].name;
      const card5 = this.cardNames[Math.floor(Math.random() * (417 - 0))].name;
      const card6 = this.cardNames[Math.floor(Math.random() * (417 - 0))].name;
      const card7 = this.cardNames[Math.floor(Math.random() * (417 - 0))].name;
      const card8 = this.cardNames[Math.floor(Math.random() * (417 - 0))].name;
      const card9 = this.cardNames[Math.floor(Math.random() * (417 - 0))].name;
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
        },
    getCardList(){
      axios.get('/cards/').then(response=>{this.cardNames = response.data.cards})
    },
    },
}).mount('#kingdom')

function getRandomArbitrary() {
  return ;
}