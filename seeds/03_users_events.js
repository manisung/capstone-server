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
        user_id: 1,
        event_id: 4,
      },
      {
        id: 5,
        user_id: 1,
        event_id: 5,
      },
      {
        id: 6,
        user_id: 2,
        event_id: 1,
      },
      {
        id: 7,
        user_id: 2,
        event_id: 2,
      },
      {
        id: 8,
        user_id: 2,
        event_id: 3,
      },
      {
        id: 9,
        user_id: 2,
        event_id: 4,
      },
      {
        id: 10,
        user_id: 2,
        event_id: 5,
      },
      {
        id: 11,
        user_id: 3,
        event_id: 1,
      },
      {
        id: 12,
        user_id: 3,
        event_id: 2,
      },
      {
        id: 13,
        user_id: 3,
        event_id: 3,
      },
      {
        id: 14,
        user_id: 3,
        event_id: 4,
      },
      {
        id: 15,
        user_id: 3,
        event_id: 5,
      },
      {
        id: 16,
        user_id: 4,
        event_id: 1,
      },
      {
        id: 17,
        user_id: 4,
        event_id: 2,
      },
      {
        id: 18,
        user_id: 4,
        event_id: 3,
      },
      {
        id: 19,
        user_id: 4,
        event_id: 4,
      },
      {
        id: 20,
        user_id: 4,
        event_id: 5,
      },
      {
        id: 21,
        user_id: 5,
        event_id: 1,
      },
      {
        id: 22,
        user_id: 5,
        event_id: 2,
      },
      {
        id: 23,
        user_id: 5,
        event_id: 3,
      },
      {
        id: 24,
        user_id: 5,
        event_id: 4,
      },
      {
        id: 25,
        user_id: 5,
        event_id: 5,
      },
    ]);
  };
  