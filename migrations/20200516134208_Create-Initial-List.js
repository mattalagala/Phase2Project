const createTestList1 = `
create table test_list1 (
id serial primary key,
"name" text, 
ctime timestamptz,
mtime timestamptz default current_timestamp
)
`
const dropTestList1 = `
drop table test_list1;
`

exports.up = function(knex) {
return knex.raw(createTestList1)
};

exports.down = function(knex) {
return knex.raw(dropTestList1)
  
};
