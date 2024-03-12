const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://mohantyritesh811:pXJZuEdZl2mXMXQF@mernapp.hcoiskt.mongodb.net/FoodApp?retryWrites=true&w=majority";

const mongoDB = () => {
    mongoose.connect(mongoURI, { family: 4 })
        .then(async () => {
            console.log("Connected to MongoDB");

            const fetchdata = async () => {
                const collection_Items = await mongoose.connection.db.collection("food_items");
                const collection_Cat = await mongoose.connection.db.collection("food_cat");
                const items = await collection_Items.find({}).toArray();
                const categories = await collection_Cat.find({}).toArray();
                return { collection_Cat: categories, collection_Items: items };
            };

            global.data = await fetchdata();
            // console.log(data);
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
        });
};

module.exports = mongoDB;
