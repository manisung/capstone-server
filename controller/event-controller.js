const knex = require("knex")(require("../knexfile"));

//API to find all events
//this is the events page
//so here needs event card grabbing information from backend
//then one button user can click and register for event
const eventsList = (_req, res) => {
    // console.log("eventsList");
    knex("events")
      .then((data) => {
        // console.log(data);
        res.status(200).json(data);
      })
      .catch((error) =>
        res.status(400).send(`Error retrieving events: ${error}`)
      );
  };

//API to find one specific event

const findOneEvent = (req, res) => {
    knex("events")
      .where({ id: req.params.id })
      .then((eventFound) => {
        if (eventFound.length === 0) {
          return res
            .status(404)
            .json({ message: `Event with ID: ${req.params.id} not found` });
        }
  
        const eventData = eventFound[0];
  
        res.status(200).json(eventData);
      })
      .catch(() => {
        res.status(500).json({
          message: `Unable to retrieve event data for event with ID: ${req.params.id}`,
        });
      });
  };

  //API to fetch users related to the specific event
const eventUsers = (req, res) => {
    knex("events")
      .innerJoin("users_events", "events.id", "users_events.event_id")
      .innerJoin("users", "users_events.user_id", "users.id")
      .where( "events.id",  req.params.id )
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((error) => {
        res.status(500).json({
          message: `Unalbe to retrieve users for event with ID: ${req.params.id} ${error}`,
        });
      });
  };

// here need to use junction table, need help tomorrow

module.exports = {
    findOneEvent,
    eventUsers,
    eventsList
  };
  