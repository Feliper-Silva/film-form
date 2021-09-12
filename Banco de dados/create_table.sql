CREATE TABLE filme
(
    id integer NOT NULL DEFAULT nextval('filme_id_seq'::regclass),
    titulo character(40) COLLATE pg_catalog."default" NOT NULL,
    diretor character(40) COLLATE pg_catalog."default" NOT NULL,
    minutos smallint NOT NULL,
    CONSTRAINT filme_pkey PRIMARY KEY (id)
);