const cards = [
  {
    front: "picturesque",
    back: "visually attractive",
    flipped: false
  },
  {
    front: "profound",
    back: "deep; full of thought",
    flipped: false
  },
  {
    front: "relapse",
    back: "a falling back into an old illness or bad habit",
    flipped: false
  },
  {
    front: "malice",
    back: "mischief; evil intent; bad will",
    flipped: false
  },
  {
    front: "dignified",
    back: "worthy of respect",
    flipped: false
  },
  {
    front: "rationality",
    back: "logic and reasoning",
    flipped: false
  },
  {
    front: "conviction",
    back: "strong belief/opinion",
    flipped: false
  },
  {
    front: "burlesque",
    back: "give an imitation that ridicules",
    flipped: false
  }
];

new Vue ({
  el: "#app",
  data: {
    cards: cards,
    newFront: "",
    newBack: "",
    hasError: false
  },
  methods: {
    toggleCard: function(item){
      item.flipped = !item.flipped;
    },
    createCard: function(){
      if (!this.newFront || !this.newBack){
        this.hasError = true;
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        });
        //clearing input fields
        this.newFront = "";
        this.newBack = "";
        this.hasError= false;
      }
    }
  }
});
