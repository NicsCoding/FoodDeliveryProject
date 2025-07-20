const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema({
  name: { type: String, unique: true },
  image: String,
  category: String,
});
const productsSchema = new Schema({
  name: String,
  price: Number,
  type: String,
  rating: Number,
  prepTimeMinutes: Number,
  cookTimeMinutes: Number,
  location: String,
  image: String,
  cost: Number,
  cuisine: String,
  category: String,
  tags: [String],
});
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  cart: [{ type: Schema.Types.ObjectId, ref: "product" }],
  pincode: { type: Number, require: true },
  mobileNo: {
    type: String,
    minlength: [10, "Mobile number must be at least 10 digits long"],
    maxlength: [10, "Mobile number can't be larger then 10 digits"],
    required: true,
    validate: {
      validator: function (v) {
        return /^\d+$/.test(v); // Regular expression to check if the string contains only digits
      },
      message: (props) => `${props.value} is not a valid mobile number!`,
    },
  },
  token: String,
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
    required: true,
    unique: true,
  },
  location: String,
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
});
exports.category = mongoose.model("category", categorySchema);
exports.product = mongoose.model("product", productsSchema);
exports.user = mongoose.model("user", userSchema);
