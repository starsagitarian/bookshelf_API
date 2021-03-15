const Format = require('../server/models').Format;
const { errorMessage, successMessage } = require("../views/views")

module.exports = {
  async create(req, res) {
    try {
      let format = await Format.create({
        formatCode: req.body.formatCode,
        formatDescription: req.body.formatDescription,
      });

      res.status(201).send(format);
    }
    catch (error) {
      res.status(500).send(error)
    };
  },


  async update(req, res) {
    try {
      console.log(req.params.id);
      let format = await Format.findByPk(req.params.id);

      if (!format) {
        res.status(404).send(errorMessage());
      }
      else {

        format.formatCode = req.body.formatCode;
        format.formatDescription = req.body.formatDescription;

        await format.save();

        res.status(200).send(format);
      }

    }
    catch (error) {
      res.status(500).send(error)
    };
  },


  async delete(req, res) {
    try {

      let format = await Format.findByPk(req.params.id);

      if (!format) {
        res.status(404).send(errorMessage());
      }
      else {

        await format.destroy();

        res.status(200).send(successMessage());
      }

    }
    catch (error) {
      res.status(500).send(error)
    };
  },


  async get(req, res) {
    try {
      let format = await Format.findAll();

      res.status(200).send(format);
    }
    catch (error) {
      res.status(500).send(error)
    };
  },


  async getById(req, res) {
    try {
      console.log(req.params.id);
      let format = await Format.findByPk(req.params.id);

      if (format)
        res.status(200).send(format);
      else
        res.status(404).send(errorMessage());
    }
    catch (error) {
      res.status(500).send(error)
    };
  }
}
