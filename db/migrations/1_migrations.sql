DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(250) NOT NULL,
    name varchar(50) NOT NULL,
    body varchar(2500) NOT NULL
);
