const createProductsTable = `
create table products (
"Products_id" serial primary key,
"category_id" integer REFERENCES category (category_id),
"Products_manufacturer" text,
"Products_model" text,
"Products_color" text,
"Products_picture" text,
ctime timestamptz,
mtime timestamptz default current_timestamp
)
`
const dropProductsTable = `
drop table Products;
`

exports.up = function(knex) {
return knex.raw(createProductsTable)
};

exports.down = function(knex) {
return knex.raw(dropProductsTable)
  
};
      