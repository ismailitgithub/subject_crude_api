const Student = require("../models/subject");

exports.list = async (req, res) => {
  const students = await Student.find({}).sort({ createdAt: -1 });

  res.json(students);
};

exports.read = async (req, res) => {
  const { _id } = req.body;
  try {
    const student = await Student.find({ _id });
    res.json({
      student,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.createOrUpdate = async (req, res) => {
  try {
    const { _id, name, age, school, grade } = req.body.student;
    const student = await Student.findOneAndUpdate(
      { _id },
      { name, age, school, grade },
      { new: true }
    );
    if (student) {
      res.json(student);
    } else {
      const newStudent = await new Student(req.body.student).save();
      res.json(newStudent);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.remove = async (req, res) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({
      _id: req.params._id,
    });
    res.json(deletedStudent);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
