
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, category_name :'Electric Guitar', category_picture: 'https://images.reverb.com/image/upload/s--8WEXw4jA--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1389803410/olsdrxpbefwngw8a5jh9.jpg'},
        {id: 2, category_name :'Acoustic Guitar', category_picture: 'https://img.texasmonthly.com/2020/04/trigger-willie-nelson-guitar-december-2012-14.jpg?auto=compress&crop=faces&fit=scale&fm=pjpg&h=1367&ixlib=php-1.2.1&q=45&w=2048&wpsize=2048x2048'},
        {id: 3, category_name :'Amplifier', category_picture: 'https://media.fanaticguitars.com/2019/11/fender-twin-reverb-amp-1961-63-vintage1-600x600.jpg'},
        {id: 4, category_name :'Bass', category_picture: 'https://guitar.com/wp-content/uploads/2019/01/fender-2019-precision-bass-hero@1400x1050-696x522.jpg'},
        {id: 5, category_name :'Midi Controller', category_picture: 'https://cdn.shopify.com/s/files/1/0017/2972/products/push_pad3_1800x1800.jpg?v=1554776579'},
      ]);
    });
};

// id serial primary key,
// "category_name" text,
// "category_picture" text,
