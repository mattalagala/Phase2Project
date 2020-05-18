const createSupplierTable = `
create table supplier (
id serial primary key,
"category" text,
"name" text unique,
"address" text unique,
"city" text, 
"state" text,
"zip" text,
ctime timestamptz,
mtime timestamptz default current_timestamp
)
`
const dropSupplierTable = `
drop table supplier;
`

exports.up = function(knex) {
return knex.raw(createSupplierTable)
};

exports.down = function(knex) {
return knex.raw(dropSupplierTable)
  
};
