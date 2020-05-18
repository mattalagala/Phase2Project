exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('supplier').del()
    .then(function () {
      // Inserts seed entries
      return knex('supplier').insert([
        {id: 1, category: 'Masks', name: '3M', address: 'someAddress', city: 'Houston', state: 'TX', zip: '77004'},
        {id: 2, category: 'Goggles', name: 'DOW', address: 'someAddress2', city: 'Dallas', state: 'TX', zip: '77004'},
        {id: 3, category: 'Sanitizers', name: 'Aquagel', address: 'someAddress3', city: 'Austin', state: 'TX', zip: '77004'},

      ]);
    });
};