
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {products_id: 1, category_id: 1, products_manufacturer: 'Fender', products_model: 'American Professional Stratocaster', products_color: 'Daphne Blue', products_price: '$1,499.99',products_picture: 'https://cdn.shopify.com/s/files/1/1339/6367/products/10149962304_gtr_frt_001_rr_copy_1024x.jpg?v=1570405868',},
        {products_id: 2, category_id: 1, products_manufacturer: 'Fender', products_model: 'American Telecaster', products_color: '2-Color Sunburst', products_price: '$1,549.99',products_picture: 'https://media.sweetwater.com/api/i/q-82__ha-abafa53e5b29853f__hmac-192581dcc4e2b5284c300d6b5f10ed55c042f0f9/images/items/750/TeleAPM2SB-large.jpg',},
        {products_id: 3, category_id: 1, products_manufacturer: 'Paul Reed Smith (PRS)',products_model: 'Silver Sky', products_color: 'Dodgem Blue', products_price: '$2,229.99',products_picture: 'https://guitar-compare.com/wp-content/uploads/2017/07/Dean-Icon-X-Silverburst-2017_02.jpg',},
        {products_id: 4, category_id: 2, products_manufacturer: 'Martin',products_model: 'D18', products_color: 'Natural', products_price: '$2,499.99', products_picture: 'https://media.sweetwater.com/api/i/f-webp__q-85__ha-286c1685fd14caed__hmac-6cf8452b06b520eb6e3a4891044bfae6d00a8b85/images/items/1800/MD18-xlarge.jpg',},
        {products_id: 5, category_id: 2, products_manufacturer: 'Taylor',products_model: 'GS Mini', products_color: 'Koa', products_price: '$799.99', products_picture: 'https://cdn.shopify.com/s/files/1/0916/0836/products/32891_Taylor_GS_Mini-e_Koa_ES-B_1_4000x@2x.progressive.jpg?v=1590695554',},
        {products_id: 6, category_id: 2, products_manufacturer: 'Gibson',products_model: 'SJ-200', products_color: '', products_price: '$5,049.99', products_picture: 'https://images.reverb.com/image/upload/s--gRpKfM7p--/f_auto,t_supersize/v1538148076/f9nueldf23ryg8zrgouh.jpg',},
        {products_id: 7, category_id: 3, products_manufacturer: 'Fender',products_model: '65 Deluxe Reverb', products_color: 'Tweed', products_price: '$1,249.99', products_picture: 'https://images.reverb.com/image/upload/s--fCg1vX3B--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1458083848/b87eassgmobzrnygkkyp.jpg',},
        {products_id: 8, category_id: 3, products_manufacturer: 'Fender',products_model: 'Blues Junior', products_color: 'Tweed', products_price: '$599.99', products_picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gear4music.com%2FGuitar-and-Bass%2FFender-Blues-Junior-LTD-Combo-Lacquered-Tweed%2F16VA&psig=AOvVaw038Y0t0NZN6yAi7eLMPmLo&ust=1591230564385000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCM8vax5OkCFQAAAAAdAAAAABAK',},
        {products_id: 9, category_id: 3, products_manufacturer: 'Orange',products_model: 'Crush 35RT', products_color: 'Orange', products_price: '$269.99', products_picture: 'https://cdn.shopify.com/s/files/1/2015/7205/products/Orange_Crush35RTCombo_3_800x.jpg?v=1505313669',},
        {products_id: 10, category_id: 3, products_manufacturer: 'Vox',products_model: 'AC30 2X12', products_color: 'Black', products_price: '$1,399.99', products_picture: 'https://media.sweetwater.com/api/i/q-82__ha-ed5ecf3059ac5eba__hmac-5ef58e68a3624a555831c1895920c2a5b8d96714/images/items/750/V212C-large.jpg',},
        {products_id: 11, category_id: 4, products_manufacturer: 'Fender',products_model: 'American Professional Precision Bass 4-String', products_color: '2-Color Sunburst', products_price: '$1,949.99', products_picture: 'https://images.reverb.com/image/upload/s--7kx-EFOM--/f_auto,t_supersize/v1548373958/zwn5agbjsg8afugfwyki.jpg',},
        {products_id: 12, category_id: 4, products_manufacturer: 'Fender',products_model: 'American Professional Jazz Bass 4-String', products_color: '2-Color sunburst', products_price: '$1,999.99', products_picture: 'https://images.reverb.com/image/upload/s--7kx-EFOM--/f_auto,t_supersize/v1548373958/zwn5agbjsg8afugfwyki.jpg',},
        {products_id: 13, category_id: 5, products_manufacturer: 'Ableton',products_model: 'Push 2', products_color: 'Black', products_price: '$799.99', products_picture: 'https://i.pcmag.com/imagery/reviews/026WYE4XN99dDtWflTxyi5l-9.fit_scale.size_1028x578.v_1569472898.jpg',},
        {products_id: 14, category_id: 5, products_manufacturer: 'Native Instruments',products_model: 'Maschine MK3', products_color: 'Black', products_price: '$649.99', products_picture: 'https://d1aeri3ty3izns.cloudfront.net/media/47/478949/600/preview.jpg',},
        {products_id: 15, category_id: 5, products_manufacturer: 'Akai Professional',products_model: 'MPC Live', products_color: 'Black', products_price: '$1,199.99', products_picture: 'https://images.reverb.com/image/upload/s--MlblAZ_O--/f_auto,t_large/v1539099485/fq9rew3xskln468sj5if.png',},
        {products_id: 16, category_id: 1, products_manufacturer: 'Gibson',products_model: 'ES-335', products_color: 'Satin Vintage Burst', products_price: '$2,599.99', products_picture: 'https://cdn.shopify.com/s/files/1/0916/0836/products/39451_Gibson_ES-335_120790208_1_4000x@3x.progressive.jpg?v=1584393222',},
       
      ]);
    });
};
