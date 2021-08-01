DROP TABLE t_users;
DROP SEQUENCE table_name_id_seq;
CREATE SEQUENCE table_name_id_seq;

create table t_users (
  iduser INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username varchar(20) not null unique,
  email varchar(255) not null unique,
  password varchar(255) not null,
  isactive char(1) not null,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

create table t_todos (
  idtodo INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  iduser int not null,
  todo_title varchar(1000) not null,
  todo_desc varchar(1000) not null, 
  created_at timestamp default now(),
  updated_at timestamp default now(),
  FOREIGN KEY(iduser) REFERENCES t_users(iduser)
);


