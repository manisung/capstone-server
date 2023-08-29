/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("users").del();
    await knex("users").insert([
      {
        id: 1,
        user_name: "jsmith",
        name: "James Smith",
        age: "22",
        address: "103 Queen's Way Central",
        city: "Hong Kong",
        country: "Hong Kong",
        contact_phone: "+852-60593456",
        contact_email: "jsmith@yumichung.com",
      },
      {
        id: 2,
        user_name: "dmacdonald",
        name: "Dan Macdonald",
        age: "25",
        address: "112 Causeway Bay East",
        city: "Hong Kong",
        country: "Hong Kong",
        contact_phone: "+852-54367868",
        contact_email: "dmacdonald@yumichung.com",
      },
      {
        id: 3,
        user_name: "rloveless",
        name: "Rose Loveless",
        age: "18",
        address: "323 Graville Street",
        city: "Vancouver",
        country: "Canada",
        contact_phone: "+1-6045650980",
        contact_email: "rloveless@yumichung.com",
      },
      {
        id: 4,
        user_name: "sbillgate",
        name: "Sam Billgate",
        age: "26",
        address: "343 Smithe Street",
        city: "Toronto",
        country: "Canada",
        contact_phone: "+1-2345650980",
        contact_email: "sbillgate@yumichung.com",
      },
      {
        id: 5,
        user_name: "bmax",
        name: "Bill Max",
        age: "19",
        address: "876 Bay Street",
        city: "San Francisco",
        country: "US",
        contact_phone: "+1-5145234980",
        contact_email: "bmax@yumichung.com",
      },
    ]);
  };
  