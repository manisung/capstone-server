const knex = require("knex")(require("../knexfile"));

//API to find one specific user

const findOneUser = (req, res) => {
    knex("users")
      .where({ id: req.params.id })
      .then((userFound) => {
        if (userFound.length === 0) {
          return res
            .status(404)
            .json({ message: `User with ID: ${req.params.id} not found` });
        }
  
        const userData = userFound[0];
  
        res.status(200).json(userData);
      })
      .catch(() => {
        res.status(500).json({
          message: `Unable to retrieve user data for user with ID: ${req.params.id}`,
        });
      });
  };

  //API to fetch events related to the specific user
const userEvents = (req, res) => {
    knex("users")
      .innerJoin("users_events", "users.id", "users_events.user_id")
      .innerJoin("events", "users_events.event_id", "events.id")
      .where( "users.id",  req.params.id )
      .then((events) => {
        res.status(200).json(events);
      })
      .catch((error) => {
        res.status(500).json({
          message: `Unalbe to retrieve events for user with ID: ${req.params.id} ${error}`,
        });
      });
  };



module.exports = {
    findOneUser,
    userEvents,
  };
  