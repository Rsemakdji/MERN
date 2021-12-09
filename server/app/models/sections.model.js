module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        timetable: String,
        professor: String,
        tariff: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Sections = mongoose.model("sections", schema);
    return Sections;
  };