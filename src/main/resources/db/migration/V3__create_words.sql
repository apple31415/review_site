CREATE TABLE words (
id SERIAL PRIMARY KEY,
word VARCHAR NOT NULL,
definition VARCHAR,
language_id INTEGER REFERENCES languages(id) NOT NULL
);