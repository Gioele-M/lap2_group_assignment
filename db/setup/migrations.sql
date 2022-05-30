DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(50) NOT NULL,
    name varchar(50) NOT NULL,
    body varchar(200) NOT NULL
);
