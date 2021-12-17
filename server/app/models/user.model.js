module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      lastname: String,
      firstname: String,
      email: String,
      phone: String,
      adress: String,
      city: String,
      postal: String,
      password: String, 
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Users = mongoose.model("users", schema);
  
  return Users;
};