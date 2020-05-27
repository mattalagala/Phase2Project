const createCategoryTable = `
create table category (
"category_id" serial primary key,
"category_name" text,
"category_picture" text,
ctime timestamptz,
mtime timestamptz default current_timestamp
)
`
const dropCategoryTable = `
drop table Category;
`

exports.up = function(knex) {
return knex.raw(createCategoryTable)
};

exports.down = function(knex) {
return knex.raw(dropCategoryTable)
  
};
      