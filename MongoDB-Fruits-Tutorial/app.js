
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});



const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "no name specified"]
  },
  rating: {
    type: number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Good"
});

// fruit.save();





const kiwi = new Fruit ({
  name: "kiwi",
  score: 5,
  review: "Good"
});

const orange = new Fruit ({
  name: "Orange",
  score: 4,
  review: "Sour"
});

const banana = new Fruit ({
  name: "banana",
  score: 3,
  review: "Weird"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitsDB")
//   }
// });



Fruit.find(function(err,fruits){
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});






Fruit.updateOne({_id: "--"}, {name: "peach"}, function(err){
  if (err) { console.log(err); }
  else { console.log("Success"); }
});


Fruit.deleteOne({name: "peach"}, function(err){
  if (err) { console.log(err); }
  else { console.log("Success"); }
});

