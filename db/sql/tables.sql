create table mercadoria(
	    codUn Varchar(13),
        nomeUn Varchar(255),
  		  vendaUn Float,
        custoUn Float,
        estoqueUn Integer,
        codCj varchar(13),
        nomeCj varchar(255),
        VendaCj Float,
        custoCj Float,
        estoqueCj Int,
        qtdPorCj Int,
        ST Int,
        compra Float,
        codForn Integer,
        depart varchar(30),
        acesso Integer
)

create table fornecedor(
	codforn serial NOT NULL,
	fornecedor varchar(255),
	endereco varchar(255),
	fone varchar(15),
	cidade varchar(50),
	estado varchar(2),
	contato varchar(50)
)