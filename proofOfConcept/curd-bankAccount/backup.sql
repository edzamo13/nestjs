--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.7
-- Dumped by pg_dump version 9.5.7

-- Started on 2022-07-07 16:32:33 -05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12623)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2425 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 190 (class 1259 OID 150336)
-- Name: metrics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE metrics (
    coverage numeric NOT NULL,
    bug integer NOT NULL,
    vulnerabilities integer NOT NULL,
    hotspot integer NOT NULL,
    code_smells integer NOT NULL,
    "idRepositoryIdRepository" integer NOT NULL,
    id_repository integer
);


ALTER TABLE metrics OWNER TO postgres;

--
-- TOC entry 189 (class 1259 OID 150334)
-- Name: metrics_idRepositoryIdRepository_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "metrics_idRepositoryIdRepository_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "metrics_idRepositoryIdRepository_seq" OWNER TO postgres;

--
-- TOC entry 2426 (class 0 OID 0)
-- Dependencies: 189
-- Name: metrics_idRepositoryIdRepository_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "metrics_idRepositoryIdRepository_seq" OWNED BY metrics."idRepositoryIdRepository";


--
-- TOC entry 182 (class 1259 OID 150300)
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE migrations OWNER TO postgres;

--
-- TOC entry 181 (class 1259 OID 150298)
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE migrations_id_seq OWNER TO postgres;

--
-- TOC entry 2427 (class 0 OID 0)
-- Dependencies: 181
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE migrations_id_seq OWNED BY migrations.id;


--
-- TOC entry 184 (class 1259 OID 150311)
-- Name: organization; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE organization (
    id_organization integer NOT NULL,
    name character(50) NOT NULL,
    status integer NOT NULL
);


ALTER TABLE organization OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 150309)
-- Name: organization_id_organization_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE organization_id_organization_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE organization_id_organization_seq OWNER TO postgres;

--
-- TOC entry 2428 (class 0 OID 0)
-- Dependencies: 183
-- Name: organization_id_organization_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE organization_id_organization_seq OWNED BY organization.id_organization;


--
-- TOC entry 188 (class 1259 OID 150327)
-- Name: repository; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE repository (
    id_repository integer NOT NULL,
    name character varying(50) NOT NULL,
    state character(1) NOT NULL,
    create_time timestamp with time zone DEFAULT now() NOT NULL,
    status character(1) NOT NULL,
    "idTribeIdTribe" integer
);


ALTER TABLE repository OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 150325)
-- Name: repository_id_repository_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE repository_id_repository_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE repository_id_repository_seq OWNER TO postgres;

--
-- TOC entry 2429 (class 0 OID 0)
-- Dependencies: 187
-- Name: repository_id_repository_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE repository_id_repository_seq OWNED BY repository.id_repository;


--
-- TOC entry 186 (class 1259 OID 150319)
-- Name: tribe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE tribe (
    id_tribe integer NOT NULL,
    name character(50) NOT NULL,
    status integer NOT NULL,
    "idOrganizationIdOrganization" integer
);


ALTER TABLE tribe OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 150317)
-- Name: tribe_id_tribe_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE tribe_id_tribe_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tribe_id_tribe_seq OWNER TO postgres;

--
-- TOC entry 2430 (class 0 OID 0)
-- Dependencies: 185
-- Name: tribe_id_tribe_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE tribe_id_tribe_seq OWNED BY tribe.id_tribe;


--
-- TOC entry 2278 (class 2604 OID 150339)
-- Name: idRepositoryIdRepository; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY metrics ALTER COLUMN "idRepositoryIdRepository" SET DEFAULT nextval('"metrics_idRepositoryIdRepository_seq"'::regclass);


--
-- TOC entry 2273 (class 2604 OID 150303)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY migrations ALTER COLUMN id SET DEFAULT nextval('migrations_id_seq'::regclass);


--
-- TOC entry 2274 (class 2604 OID 150314)
-- Name: id_organization; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY organization ALTER COLUMN id_organization SET DEFAULT nextval('organization_id_organization_seq'::regclass);


--
-- TOC entry 2276 (class 2604 OID 150330)
-- Name: id_repository; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY repository ALTER COLUMN id_repository SET DEFAULT nextval('repository_id_repository_seq'::regclass);


--
-- TOC entry 2275 (class 2604 OID 150322)
-- Name: id_tribe; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tribe ALTER COLUMN id_tribe SET DEFAULT nextval('tribe_id_tribe_seq'::regclass);


--
-- TOC entry 2417 (class 0 OID 150336)
-- Dependencies: 190
-- Data for Name: metrics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY metrics (coverage, bug, vulnerabilities, hotspot, code_smells, "idRepositoryIdRepository", id_repository) FROM stdin;
\.


--
-- TOC entry 2431 (class 0 OID 0)
-- Dependencies: 189
-- Name: metrics_idRepositoryIdRepository_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"metrics_idRepositoryIdRepository_seq"', 1, false);


--
-- TOC entry 2409 (class 0 OID 150300)
-- Dependencies: 182
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY migrations (id, "timestamp", name) FROM stdin;
1	1657226870508	createDbOne1657226870508
\.


--
-- TOC entry 2432 (class 0 OID 0)
-- Dependencies: 181
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('migrations_id_seq', 1, true);


--
-- TOC entry 2411 (class 0 OID 150311)
-- Dependencies: 184
-- Data for Name: organization; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY organization (id_organization, name, status) FROM stdin;
1	name organization                                 	1
2	name organization test                            	1
\.


--
-- TOC entry 2433 (class 0 OID 0)
-- Dependencies: 183
-- Name: organization_id_organization_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('organization_id_organization_seq', 2, true);


--
-- TOC entry 2415 (class 0 OID 150327)
-- Dependencies: 188
-- Data for Name: repository; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY repository (id_repository, name, state, create_time, status, "idTribeIdTribe") FROM stdin;
\.


--
-- TOC entry 2434 (class 0 OID 0)
-- Dependencies: 187
-- Name: repository_id_repository_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('repository_id_repository_seq', 1, false);


--
-- TOC entry 2413 (class 0 OID 150319)
-- Dependencies: 186
-- Data for Name: tribe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY tribe (id_tribe, name, status, "idOrganizationIdOrganization") FROM stdin;
\.


--
-- TOC entry 2435 (class 0 OID 0)
-- Dependencies: 185
-- Name: tribe_id_tribe_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('tribe_id_tribe_seq', 1, false);


--
-- TOC entry 2286 (class 2606 OID 150333)
-- Name: PK_431a174129d882e2c5398a9f420; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY repository
    ADD CONSTRAINT "PK_431a174129d882e2c5398a9f420" PRIMARY KEY (id_repository);


--
-- TOC entry 2280 (class 2606 OID 150308)
-- Name: PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- TOC entry 2282 (class 2606 OID 150316)
-- Name: PK_c1137363ad9deea0a4e9c6ff32b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY organization
    ADD CONSTRAINT "PK_c1137363ad9deea0a4e9c6ff32b" PRIMARY KEY (id_organization);


--
-- TOC entry 2284 (class 2606 OID 150324)
-- Name: PK_c165ed5e52b4e2ff2af9a7d0fb6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tribe
    ADD CONSTRAINT "PK_c165ed5e52b4e2ff2af9a7d0fb6" PRIMARY KEY (id_tribe);


--
-- TOC entry 2288 (class 2606 OID 150344)
-- Name: PK_ca7300693f3c5a00c0c49989fcd; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY metrics
    ADD CONSTRAINT "PK_ca7300693f3c5a00c0c49989fcd" PRIMARY KEY ("idRepositoryIdRepository");


--
-- TOC entry 2290 (class 2606 OID 150346)
-- Name: REL_c3d911b1d911a990e617041947; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY metrics
    ADD CONSTRAINT "REL_c3d911b1d911a990e617041947" UNIQUE (id_repository);


--
-- TOC entry 2292 (class 2606 OID 150352)
-- Name: FK_6151470ec9f87c4ae5ce4615f24; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY repository
    ADD CONSTRAINT "FK_6151470ec9f87c4ae5ce4615f24" FOREIGN KEY ("idTribeIdTribe") REFERENCES tribe(id_tribe);


--
-- TOC entry 2291 (class 2606 OID 150347)
-- Name: FK_71db8b8090c3661ea9ab8270eb4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tribe
    ADD CONSTRAINT "FK_71db8b8090c3661ea9ab8270eb4" FOREIGN KEY ("idOrganizationIdOrganization") REFERENCES organization(id_organization);


--
-- TOC entry 2293 (class 2606 OID 150357)
-- Name: FK_c3d911b1d911a990e617041947b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY metrics
    ADD CONSTRAINT "FK_c3d911b1d911a990e617041947b" FOREIGN KEY (id_repository) REFERENCES repository(id_repository);


--
-- TOC entry 2424 (class 0 OID 0)
-- Dependencies: 7
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2022-07-07 16:32:33 -05

--
-- PostgreSQL database dump complete
--

