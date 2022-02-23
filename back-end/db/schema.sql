DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS jewelry;

CREATE TABLE jewelry (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    category TEXT,
    description TEXT NOT NULL,
    price INT,
    image TEXT,
);
