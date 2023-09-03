/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("users_events").del();
    await knex("users_events").insert([
      {
        id: 1,
        user_id: 1,
        event_id: 1,
      },
      {
        id: 2,
        user_id: 1,
        event_id: 2,
      },
      {
        id: 3,
        user_id: 1,
        event_id: 3,
      },
      {
        id: 4,
        user_id: 2,
        event_id: 2,
      },
      {
        id: 5,
        user_id: 2,
        event_id: 3,
      },
      {
        id: 6,
        user_id: 2,
        event_id: 5,
      },
      {
        id: 7,
        user_id: 3,
        event_id: 1,
      },
      {
        id: 8,
        user_id: 3,
        event_id: 3,
      },
      {
        id: 9,
        user_id: 4,
        event_id: 3,
      },
      {
        id: 10,
        user_id: 5,
        event_id: 1,
      },    
      {
        id: 11,
        user_id: 5,
        event_id: 4,
      },
      {
        id: 12,
        user_id: 5,
        event_id: 5,
      },
    ]);
  };
  