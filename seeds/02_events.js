/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("events").del();
    await knex("events").insert([
        {
            id: 1,
            event_name: "Chang Chau Event",
            description:
                'This is an event cooperated with a little music matter. Fans gathering after event.',
            status: "Open",
            location: "Chang Chau Island",
            date: "Aug 27, 2023, 1:30:00 PM",
            deadline: "Aug 25, 2023, 11:59:59 PM ",
        },
        {
            id: 2,
            event_name: "Po Leung Event",
            description:
                'This is an event cooperated with Po Leung Charity for fund raising. Fans gathering after event.',
            status: "Open",
            location: "Airport Expo Hong Kong",
            date: "Sep 03, 2023, 2:30:00 PM",
            deadline: "Sep 01, 2023, 11:59:59 PM",
        },
        {
            id: 3,
            event_name: "Award Ceremony Event",
            description:
                'This is an event for an award ceremony. Fans gathering after event.',
            status: "Open",
            location: "TVB Hong Kong",
            date: "Sep 09, 2023, 7:30:00 PM",
            deadline: "Sep 07, 2023, 11:59:59 PM",
        },
        {
            id: 4,
            event_name: "Mall Event",
            description:
                'This is an event for Nikon promotion. Fans gathering after event.',
            status: "Open",
            location: "Landmark Mall",
            date: "Oct 12, 2023, 11:00:00 AM",
            deadline: "Oct 10, 2023, 11:59:59 PM",
        },
        {
            id: 5,
            event_name: "School Event",
            description:
                'This is an event for Hope Primary School. Fans gathering after event.',
            status: "Open",
            location: "Hope Primary School",
            date: "Oct 23, 2023, 3:00:00 PM",
            deadline: "Oct 21, 2023, 11:59:59 PM",
        },
    ]);
};
