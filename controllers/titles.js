const Title = require('../server/models').Title;
const Author = require('../server/models').Author;
const Format = require('../server/models').Format;
const AuthorTitle = require('../server/models').AuthorTitle;
const { errorMessage, successMessage } = require("../views/views")
const { Op } = require("sequelize");


module.exports = {

  async create(req, res) {
    try {

      let formatid = req.body.formatId;
      if(!formatid) {
        console.log(formatid);
        res.status(404).send(errorMessage());
      }

      let authorIds = req.body.authorIds;

      let authors = await Author.findAll({
        where: {
          id: {
            [Op.in]: authorIds
          }
        }
      });
      console.log(req.body);

      if (authors == null || authors == undefined) {
        res.status(404).send(errorMessage());
        return;
      } else if (req.body.authorIds.length !== authors.length) {
        res.status(404).send(errorMessage());
        return;
      }

      let title = await Title.create({
        isbn: req.body.isbn,
        bookName: req.body.bookName,
        description: req.body.description,
        dateOfPub: req.body.dateOfPub,
        formatId:req.body.formatId
      }); 

      await title.addAuthor(authors);

      let titleAuthors = await Title.findByPk(title.id, {
        include: [{
          model: Author,
          as: 'authors',
          attributes: ['id', 'firstName', 'lastName']
        }, {
          model: Format,
          as: 'formats',
          attributes: ['id', 'formatCode', 'formatDescription']
        }]
      });

      res.status(201).send(titleAuthors);
    }
    catch (error) {
      console.log(error)
      res.status(500).send(error.errors)
    };
  },

  ///Get Method
  async get(req, res) {
    try {

      let titles = await Title.findAll({
        include: [{
          model: Author,
          as: 'authors',
          attributes: ['id', 'firstName', 'lastName']
        }, {
          model: Format,
          as: 'formats',
          attributes: ['id', 'formatCode']
        }]
      });
      res.status(200).send(titles);
    }
    catch (error) {
      res.status(500).send(error)
    };
  },

  //Get By ID
  async getById(req, res) {
    try {
      let title = await Title.findByPk(req.params.id, {
        include: [{
          model: Author,
          as: 'authors',
          attributes: ['id', 'firstName', 'lastName']
        },{
          model: Format,
          as: 'formats',
          attributes: ['id', 'formatCode']
        }]
      });

      res.status(200).send(title);
    }
    catch (error) {
      res.status(500).send(error)
    };
  },

  ///Put
  async update(req, res) {
    try {

     // let title = await Title.findByPk(req.params.id);

      let title = await Title.findByPk(req.params.id, {
        include: [{
          model: Author,
          as: 'authors',
          attributes: ['id', 'firstName', 'lastName']
        },{
          model: Format,
          as: 'formats',
          attributes: ['id', 'formatCode']
        }]
      });

     // console.log("this is tht title", title);

      if (!title) {
        res.status(404).send(errorMessage());
      }
      else {

        if(req.body.bookName)  title.bookName = req.body.bookName;
        if(req.body.description)  title.description = req.body.description;
        if(req.body.dateOfPub)  title.dateOfPub = req.body.dateOfPub;
        if(req.body.isbn)  title.isbn = req.body.isbn;
        if(req.body.formatId)  title.formatId = req.body.formatId;

        await title.save(); //update title

        //first delete from author_titles table and re-insert
        if (req.body.authorIds) { 

          
          let authors = await Author.findAll({
            where: {
              id: {
                [Op.in]: req.body.authorIds
              }
            }
          });
          
          if(authors.length !== req.body.authorIds.length )
          {
            //some author ids are invalid
            res.status(500).send("Some of the Authors were not found!");
            return;
          } 

          await AuthorTitle.destroy({ where: { titleId: req.params.id }});     

          await title.addAuthor(authors);
         
      }

        res.status(200).send(title);
      }

    }
    catch (error) {
      res.status(500).send(error)
    };
  },

  ///DELETE 
  async delete(req, res) {
    try {

      let title = await Title.findByPk(req.params.id);

      if (!title) {
        res.status(404).send(errorMessage());
        return;
      }
      else {
       
        //first delete from author_titles table
        let title_auths = await AuthorTitle.findAll({
          where: {
            titleId: {
              [Op.eq]: req.params.id
            }
          }
        });

        if (title_auths != null && title_auths != undefined && title_auths.length > 0) {

          var pk = title_auths[0].AuthorId;

          let ats = await AuthorTitle.findByPk(pk);

          await ats.destroy();
        }

        title = await Title.findByPk(req.params.id);
        await title.destroy();

        res.status(200).send(successMessage());
      }

    }
    catch (error) {
      console.log(error);
      res.status(500).send(error)
    };
  },

};