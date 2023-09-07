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


//API to check whether the user is registered for the event they want to register
const registerEvent = (req, res) => {
  console.log(req.params.eventId);

  knex("users_events")
    .where("users_events.user_id", req.params.id)
    .where("users_events.event_id", req.params.eventId)
    .then((events) => {
      // console.log(events);
      if (events.length > 0) {
        res.status(200).json({ message: 'You have already registered for this event', events });
        console.log("registered", events);
      } else {
        // TODO insert new record into user_events table
        knex("users_events").insert({
          user_id: req.params.id,
          event_id: req.params.eventId
        }).then(response => {
          res.status(200).json({ message: 'thank you for registering', events });
          console.log("thank you for registering reponse", events);
        });

      }

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
  registerEvent
};


