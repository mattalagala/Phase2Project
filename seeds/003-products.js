
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {products_id: 1, category_id: 1, products_manufacturer: 'Fender', products_model: 'American Professional Stratocaster', products_color: 'Daphne Blue', products_price: '$1,499.99',products_picture: '',},
        {products_id: 2, category_id: 1, products_manufacturer: 'Fender', products_model: 'American Telecaster', products_color: '2-Color Sunburst', products_price: '$1,549.99',products_picture: '',},
        {products_id: 3, category_id: 1, products_manufacturer: 'Paul Reed Smith (PRS)',products_model: 'Silver Sky', products_color: 'Dodgem Blue', products_price: '$2,229.99',products_picture: '',},
        {products_id: 4, category_id: 2, products_manufacturer: 'Martin',products_model: 'D18', products_color: 'Natural', products_price: '$2,499.99', products_picture: '',},
        {products_id: 5, category_id: 2, products_manufacturer: 'Taylor',products_model: 'GS Mini', products_color: 'Koa', products_price: '$799.99', products_picture: '',},
        {products_id: 6, category_id: 2, products_manufacturer: 'Gibson',products_model: 'SJ-200', products_color: '', products_price: '$5,049.99', products_picture: '',},
        {products_id: 7, category_id: 3, products_manufacturer: 'Fender',products_model: '65 Deluxe Reverb', products_color: 'Tweed', products_price: '$1,249.99', products_picture: '',},
        {products_id: 8, category_id: 3, products_manufacturer: 'Fender',products_model: 'Blues Junior', products_color: 'Tweed', products_price: '$599.99', products_picture: '',},
        {products_id: 9, category_id: 3, products_manufacturer: 'Orange',products_model: 'Crush 35RT', products_color: 'Orange', products_price: '$269.99', products_picture: '',},
        {products_id: 10, category_id: 3, products_manufacturer: 'Vox',products_model: 'AC30 2X12', products_color: 'Black', products_price: '$1,399.99', products_picture: '',},
        {products_id: 11, category_id: 4, products_manufacturer: 'Fender',products_model: 'American Professional Precision Bass 4-String', products_color: '2-Color Sunburst', products_price: '$1,949.99', products_picture: '',},
        {products_id: 12, category_id: 4, products_manufacturer: 'Fender',products_model: 'American Professional Jazz Bass 4-String', products_color: '2-Color sunburst', products_price: '$1,999.99', products_picture: '',},
        {products_id: 13, category_id: 5, products_manufacturer: 'Ableton',products_model: 'Push 2', products_color: 'Black', products_price: '$799.99', products_picture: '',},
        {products_id: 14, category_id: 5, products_manufacturer: 'Native Instruments',products_model: 'Maschine MK3', products_color: 'Black', products_price: '$649.99', products_picture: '',},
        {products_id: 15, category_id: 5, products_manufacturer: 'Akai Professional',products_model: 'MPC Live', products_color: 'Black', products_price: '$1,199.99', products_picture: '',},
        {products_id: 16, category_id: 1, products_manufacturer: 'Gibson',products_model: 'ES-335', products_color: 'Satin Vintage Burst', products_price: '$2,599.99', products_picture: '',},
       
      ]);
    });
};
