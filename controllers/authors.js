const Author = require('../server/models').Author;
const { errorMessage, successMessage } = require("../views/views")

module.exports = {
  async create(req, res) {
    try {
      let author = await Author.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
      });

      res.status(201).send(author);
    }
    catch (error) {
      res.status(500).send(error)
    };
  },

  async update(req, res) {
    try {

      let author = await Author.findByPk(req.params.id);

      if (!author) {
        res.status(404).send(errorMessage());
      }
      else {

        author.firstName = req.body.firstName;
        author.lastName = req.body.lastName;
        author.email = req.body.email;
        author.phone = req.body.phone;

        await author.save();

        res.status(200).send(author);
      }

    }
    catch (error) {
      res.status(500).send(error)
    };
  },

  async delete(req, res) {
    try {

      let author = await Author.findByPk(req.params.id);

      if (!author) {
        res.status(404).send(errorMessage());
      }
      else {

        await author.destroy();

        res.status(200).send(successMessage());
      }

    }
    catch (error) {
      res.status(500).send(error)
    };
  },


  async get(req, res) {
    try {
      let author = await Author.findAll();

      res.status(200).send(author);
    }
    catch (error) {
      res.status(500).send(error)
    };
  },


  async getById(req, res) {
    try {
      console.log(req.params.id);
      let author = await Author.findByPk(req.params.id);

      if (author)
        res.status(200).send(author);
      else
        res.status(404).send(errorMessage());
    }
    catch (error) {
      res.status(500).send(error)
    };
  }

};