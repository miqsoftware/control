CREATE TABLE "mercadoria" (
	"codun" VARCHAR(13) NOT NULL,
	"nomeun" VARCHAR(255) NOT NULL,
	"vendaun" FLOAT NOT NULL,
	"custoun" FLOAT NOT NULL,
	"estoqueun" integer NOT NULL,
	"codcj" VARCHAR(255) NOT NULL,
	"nomecj" VARCHAR(255) NOT NULL,
	"vendacj" FLOAT NOT NULL,
	"custocj" FLOAT NOT NULL,
	"estoquecj" integer NOT NULL,
	"qtdporcj" integer NOT NULL,
	"st" integer NOT NULL,
	"compra" FLOAT NOT NULL,
	"codforn" integer NOT NULL,
	"depart" VARCHAR(255) NOT NULL,
	"acesso" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "fornecedor" (
	"codforn" integer NOT NULL,
	"fornecedor" VARCHAR(255) NOT NULL,
	"endereco" VARCHAR(255) NOT NULL,
	"fone" VARCHAR(255) NOT NULL,
	"cidade" VARCHAR(255) NOT NULL,
	"estado" VARCHAR(255) NOT NULL,
	"contato" VARCHAR(255) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "user" (
	"coduser" serial NOT NULL,
	"pseudonimo" VARCHAR(255) NOT NULL,
	"senha" VARCHAR(255) NOT NULL,
	"nome" VARCHAR(255) NOT NULL,
	"perfil" VARCHAR(255) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("coduser")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Untitled" (

) WITH (
  OIDS=FALSE
);



ALTER TABLE "mercadoria" ADD CONSTRAINT "mercadoria_fk0" FOREIGN KEY ("codforn") REFERENCES "fornecedor"("codforn");




