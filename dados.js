/*Criação de lista com objetos*/ 
let dados = [
    {
        titulo: "Rio de Janeiro",
        descricao: "carinhosamente chamado de Cidade Maravilhosa, é um dos destinos turísticos mais famosos do mundo, conhecido por suas praias exuberantes, paisagens deslumbrantes, cultura vibrante e um povo acolhedor.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/rio-de-janeiro.pt-br.html",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303506-Activities-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Rio_de_Janeiro ",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags: "carioca carioka rio praia carnaval samba favela Cristo Redentor Copacabana Ipanema natureza montanhas" 
    },
    {
        titulo: "Curitiba",
        descricao: "Curitiba é uma cidade que encanta pela organização, natureza exuberante e cultura vibrante, sendo conhecida como a 'capital ecológica' do Brasil.",
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/curitiba.pt-br.html?aid=1702940;label=curitiba-bu_qO7wuOfBF0k2KkTscDAS479842228308:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-696591906:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI9ZThuvOwiAMVsWJIAB1KYxmUEAAYASAAEgJ9MPD_BwE",
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g303441-Activities-Curitiba_State_of_Parana.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Curitiba",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags: "organização frio ecologia capital jardim botânico parques ciclovia cultura europeia imigração pinheiros inverno"
 
    },
    {
        titulo: "Salvador",
        descricao: "Salvador é um caldeirão cultural que mescla a história colonial com a vibração afro-brasileira, oferecendo praias paradisíacas, um centro histórico rico e uma culinária irresistível.",
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/salvador.pt.html?aid=1702940;label=salvador-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIiaXWwfewiAMV8VlIAB2lbAsgEAAYAiAAEgIxyfD_BwE",
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303272-zfg11873-Salvador_State_of_Bahia.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Salvador",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags: "afro quilombo axé cultura antepassados praia bahia Bahia carnaval tradição capital negro afrodescentes gastronomia Pelourinho capoeira candomblé acarajé miscigenação história colonial festas populares"

    },
    
    {  
        titulo: "São Paulo",  
        descricao: "São Paulo é a maior cidade do Brasil e oferece uma rica vida cultural, com museus, teatros e uma gastronomia diversificada, além de ser um centro financeiro e de negócios.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/sao-paulo.pt.html?aid=1702940;label=sao-paulo-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIoJmE2-YewiAMV4LIAh0PjwESEAAYAiAAEgIAQ_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303631-zfg11873-Sao_Paulo_State_of_Sao_Paulo.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags: "museu saopaulo sao teatro gastronomia capital negocios negócios metrópole negócios cultura diversidade gastronomia internacional vida noturna"
  
    },  
    {  
        titulo: "Brasília",  
        descricao: "A capital federal do Brasil, projetada por Oscar Niemeyer e Lúcio Costa, é conhecida por sua arquitetura moderna e planejamento urbano inovador.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/brasilia.pt.html?aid=1702940;label=brasilia-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI3bqtr7-yewiAMVDBNAB5GwgPEAAYAiAAEgI_2fD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303322-zfg11873-Brasilia_Federal_District.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Bras%C3%ADlia",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :  "arquitetura moderna urbanismo política monumentos lago Paranoá negocios negócio negócios"
    },  
    {  
        titulo: "Fortaleza",  
        descricao: "Fortaleza é famosa por suas belas praias e pela cultura cearense vibrante, com destaque para o Centro Dragão do Mar de Arte e Cultura e a vida noturna animada.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/fortaleza.pt.html?aid=1702940;label=fortaleza-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIpN6yoeG5ewiAMVwAEB2xFQwCEAQYASABEgL8w_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303293-zfg11873-Fortaleza_State_of_Ceara.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Fortaleza",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags : "praias jangadas artesanato culinária nordestina forró capital praia"
    },  
    {  
        titulo: "Recife",  
        descricao: "Recife é conhecida por suas pontes e rios, além de ter um rico patrimônio histórico e cultural, com destaque para o bairro do Recife Antigo e o Frevo.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/recife.pt.html?aid=1702940;label=recife-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI4I3x3eG5ewiAMVwBEB2VxQwCEAQYASABEgJ4ffD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g304560-zfg11873-Recife_State_of_Pernambuco.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Recife",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags : "arquitetura colonial rios pontes frevo carnaval Recife Antigo praia capital"
    },  
    {  
        titulo: "Natal",  
        descricao: "Natal é famosa pelas suas dunas e praias de areia branca, e o Parque das Dunas é um dos principais atrativos da cidade.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/natal.pt.html?aid=1702940;label=natal-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI9dP9-eG5ewiAMVwAEB2liQwCEAQYASABEgKu2_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303518-zfg11873-Natal_State_of_Rio_Grande_do_Norte.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Natal_(Rio_Grande_do_Norte)",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :  "dunas litoral turismo sol mar jangadas praia capital"
    },  
    {  
        titulo: "Manaus",  
        descricao: "Localizada na Amazônia, Manaus é a porta de entrada para a floresta tropical e oferece experiências únicas com a natureza e a cultura indígena.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/manaus.pt.html?aid=1702940;label=manaus-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI7r_s9OG5ewiAMVwAEAh_FwCIEAAYAiAAEgIMw_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303235-zfg11873-Manaus_State_of_Amazonas.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Manaus",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags : "Amazônia floresta rio Amazonas capital botos índios natureza açaí rio negro solimoes solimões encontro das aguás caprichoso garantido"
    },  
    {  
        titulo: "Belém",  
        descricao: "Belém é conhecida por sua rica culinária amazônica e o Mercado Ver-o-Peso, um dos maiores mercados ao ar livre da América Latina.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/belem.pt.html?aid=1702940;label=belem-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIotnD9eG5ewiAMVwAEAh_mgCIEAAYAiAAEgLoT_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303404-zfg11873-Belem_State_of_Para.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Bel%C3%A9m",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :  "Ver-o-Peso castanhas açaí cultura paraense folclore praia"
    },  
    {  
        titulo: "Porto Alegre",  
        descricao: "Porto Alegre é um importante centro cultural e econômico do sul do Brasil, com muitos museus, teatros e uma rica cena gastronômica.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/porto-alegre.pt.html?aid=1702940;label=porto-alegre-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI6cmn1eG5ewiAMVwAEB2J4wCIEAAYAiAAEgKr3_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303546-zfg11873-Porto_Alegre_State_of_Rio_Grande_do_Sul.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Porto_Alegre",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :  "gaúcho churrasco tango cultura alemã italiana vinhos chimarrão chimarrao capital frio"
    },  
    {  
        titulo: "Florianópolis",  
        descricao: "Florianópolis, também conhecida como a Ilha da Magia, é famosa por suas praias deslumbrantes e por ser um destino popular para esportes aquáticos.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/florianopolis.pt.html?aid=1702940;label=florianopolis-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI-bnX3uG5ewiAMVwAEAh1bQwCEAQYASABEgKcB_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303576-zfg11873-Florianopolis_State_of_Santa_Catarina.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Florian%C3%B3polis",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "praias natureza ecoturismo esportes aquáticos ilha praia october fest chop chope capital"
    },  
    {  
        titulo: "Maceió",  
        descricao: "Maceió é conhecida por suas belas praias e lagoas, como a Lagoa do Mundaú e a Lagoa do Jacarecica, além de uma culinária rica em frutos do mar.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/maceio.pt.html?aid=1702940;label=maceio-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIh9i2heG5ewiAMVwAEB2S3QwCEAQYASABEgLo2fD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303216-zfg11873-Maceio_State_of_Alagoas.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Macei%C3%B3",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :  "praias lagoas coqueiros artesanato culinária nordestina forró capital"
    },  
    {  
        titulo: "João Pessoa",  
        descricao: "João Pessoa é famosa por suas praias tranquilas e seu centro histórico bem preservado, além de ser a cidade mais oriental do Brasil.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/joao-pessoa.pt.html?aid=1702940;label=joao-pessoa-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIj_6D5uG5ewiAMVwAEB2ltQwCEAQYASABEgK3P_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303428-zfg11873-Joao_Pessoa_State_of_Paraiba.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Pessoa",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :  "praias história arquitetura colonial tranquilidade praia"
    },  
    {  
        titulo: "Cuiabá",  
        descricao: "Cuiabá é conhecida como a porta de entrada para o Pantanal e a Chapada dos Guimarães, oferecendo experiências únicas na natureza e na fauna selvagem.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/cuiaba.pt.html?aid=1702940;label=cuiaba-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI7pv1vOG5ewiAMVwAEB2FiQwCEAQYASABEgJ9l_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g488170-Activities-Cuiaba_State_of_Mato_Grosso.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Cuiab%C3%A1",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :  "Pantanal Chapada dos Guimarães natureza fauna ecoturismo terere tereré tererê quente"
    },  
    {  
        titulo: "Vitória",  
        descricao: "Vitória é uma cidade portuária com belas praias e um centro histórico encantador, além de ser um importante polo comercial do Espírito Santo.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/vitoria.pt.html?aid=1702940;label=vitoria-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI9N7G9uG5ewiAMVwAEB2l0QwCEAQYASABEgIrd_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303320-zfg11873-Vitoria_State_of_Espirito_Santo.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Vit%C3%B3ria_(Esp%C3%ADrito_Santo)",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :  "praias cultura história culinária centro histórico praia capital"
    },  
    {  
        titulo: "Aracaju",  
        descricao: "Aracaju é conhecida por suas praias tranquilas e por seu rico patrimônio cultural, incluindo o Museu da Gente Sergipana e o Mercado Municipal.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/aracaju.pt.html?aid=1702940;label=aracaju-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIkM7B5-G5ewiAMVwAEB2RywCEAQYASABEgJsyfD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303636-zfg11873-Aracaju_State_of_Sergipe.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Aracaju",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :  "praias rios manguezais artesanato culinária praia capital forró mangabá"
    },  
    {  
        titulo: "Ouro Preto",  
        descricao: "Ouro Preto é uma cidade histórica com um rico legado colonial, famosa por suas igrejas barrocas e seu centro histórico, que é Patrimônio Mundial da UNESCO.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/ouro-preto.pt.html?aid=1702940;label=ouro-preto-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI8LzP5uG5ewiAMVwAEB2V2wCIEAAYAiAAEgLejfD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303389-zfg11873-Ouro_Preto_State_of_Minas_Gerais.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Ouro_Preto",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :  "barroco história arquitetura colonial mineração ouro"
    },  
    {  
        titulo: "Petrópolis",  
        descricao: "Petrópolis, também conhecida como a Cidade Imperial, é famosa por seu rico patrimônio histórico e cultural, incluindo o Palácio de Cristal e o Museu Imperial.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/petropolis.pt.html?aid=1702940;label=petropolis-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIk7Wf4uG5ewiAMVwAEB2G4QwCEAQYASABEgKJKvD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303286-zfg11873-Petropolis_State_of_Rio_de_Janeiro.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Petr%C3%B3polis",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :  "história imperial natureza montanhas Palácio de Cristal"
    },  
    {  
        titulo: "Campos do Jordão",  
        descricao: "Campos do Jordão é um popular destino de montanha, conhecido pelo seu clima ameno, arquitetura estilo europeu e o Festival de Inverno.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/campos-do-jordao.pt.html?aid=1702940;label=campos-do-jordao-jz5FicNOWj9PCRY5ZbvVcAS479845114681:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-4383818716:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI9Z3Yz8G5ewiAMVwAEB2GJQwCEAQYASABEgIbqfD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attraction_Products-g303603-zfg11873-Campos_do_Jordao_State_of_Sao_Paulo.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Campos_do_Jord%C3%A3o",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :  "montanha frio inverno chocolate arquitetura europeia"
    },  
    {  
        titulo: "Caldas Novas",  
        descricao: "É famosa por suas águas termais, que atraem milhares de turistas em busca de relaxamento e diversão. Localizada em Goiás, a cidade oferece uma variedade de parques aquáticos, hotéis com piscinas quentes e outras atrações que prometem momentos de lazer e bem-estar.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/caldas-novas.pt.html?aid=1702940;label=caldas-novas-O1iAmEwIUG0L41mT2HVF7wS528791903266:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-3630801879:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMItP3zjbyxiAMVlnJ_AB1DljGUEAAYASAAEgKA_vD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g1012170-Activities-Caldas_Novas_State_of_Goias.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Caldas_Novas",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "Águastermais relaxamento Parquesaquáticos lagodecorumba diroma"
    },
    {  
        titulo: "Fernando de Noronha",  
        descricao: " é um arquipélago paradisíaco localizado no Oceano Atlântico, pertencente ao estado de Pernambuco. Conhecido mundialmente por suas praias de águas cristalinas, recifes de corais vibrantes e uma rica biodiversidade marinha, Noronha é um destino ideal para quem busca tranquilidade, aventura e contato com a natureza.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/fernando-de-noronha.pt.html?aid=1702940;label=fernando-de-noronha-0*D0r3fGlE*RUCl5xcBAkQS650580594454:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-10440971750:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIm-X3uNexiAMVk1RIAB3SGyD4EAAYASAAEgLubPD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g616328-Activities-Fernando_de_Noronha_State_of_Pernambuco.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Fernando_de_Noronha",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "baíadesancho baiadesancho baíadosporcos baiadosporcos golfinhos praiadaconceição praidaconceicao ilha praiadoleão praiadoleao praquenacionalmarinho morrodoisirmãos morrodoisirmaos praiadocachorro"
    },
    {  
        titulo: "Parintins",  
        descricao: "é uma cidade localizada no Amazonas, famosa mundialmente por ser o palco do maior festival folclórico do mundo: o Festival de Parintins. A cidade, com suas raízes indígenas e influência portuguesa, possui uma rica cultura e história.",  
        linkPesquisaDeHoteis : "https://www.booking.com/searchresults.pt-br.html?aid=1702940&label=parintins-3JcV2txwVnbp1Sws6iSTPwS594373501672%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-11577442196%3Alp9100333%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ&gclid=EAIaIQobChMI5prf_N6xiAMVL0FIAB2yYjjQEAAYASAAEgJr7vD_BwE&dest_type=city&redirected=1&dest_id=-659629&source=city&redirected_from_city=1&keep_landing=1&sid=7161fe90bf1194930c47f6b8b70bd8b9",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g1074268-Activities-Parintins_State_of_Amazonas.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Parintins",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "bumbameuboi bumbódromo bumbodromo boicaprichoso boigarantido lagoparananema festival praiaitaracuera balneariocantalago serravaleria"
    } ,
    {  
        titulo: "Porto de Galinhas",  
        descricao: " é um destino paradisíaco localizado no litoral sul de Pernambuco, Brasil. Famosa por suas praias de águas cristalinas e areia branca, a cidade atrai turistas do mundo todo em busca de sol, mar e muita natureza.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/porto-de-galinhas.pt.html?aid=1702940;label=city-porto-de-galinhas-J8pxNjUmvCO4xxmMWf8FKQS525510289089:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-1602189840:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIx7PihOCxiAMVGhqtBh02kRXGEAAYASAAEgI9P_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g303461-Activities-Porto_de_Galinhas_Ipojuca_State_of_Pernambuco.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Porto_de_Galinhas",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "belezanatural praia sol mar jangadas litoral PasseiodeBuggy passeiodebuggy nordeste"
    } ,
    {  
        titulo: "Ilhéus",  
        descricao: "Ilhéus: A Bahia que Jorge Amado amou. Sabores, histórias e paisagens: tudo isso é Ilhéus. Descubra o encanto de Ilhéus, a terra do cacau. Sol, mar e cultura: a combinação perfeita em Ilhéus. Ilhéus: onde a história se encontra com a natureza.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/ilheus.pt.html?aid=1702940;label=ilheus-EntSwRocvjdaaMkzCyTIqgS479842232763:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-433876952150:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIpPue9OGxiAMVkyCtBh0auA65EAAYASAAEgKp_PD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g303262-Activities-Ilheus_State_of_Bahia.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Ilh%C3%A9us",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "cacau chocolate turismo praia jorgeamado bahia sol mar historia história"
    } ,
    {  
        titulo: "Porto Seguro",  
        descricao: "É um destino turístico icônico no litoral sul da Bahia, conhecido por suas praias paradisíacas, história rica e vida noturna agitada. Localizada no local onde os portugueses chegaram ao Brasil, a cidade oferece uma mistura perfeita de natureza exuberante, cultura vibrante e opções de lazer para todos os gostos.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/porto-seguro.pt-br.html",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g303270-Activities-Porto_Seguro_State_of_Bahia.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Porto_Seguro",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "passeiosdebarco praia Snorkeling snorkeling mergulho gastronomia axe axé cultura afro indigena indígena"
    } ,
    {  
        titulo: "Gramado",  
        descricao: "Gramado é um destino que encanta por sua beleza natural e atmosfera aconchegante. Inverno europeu, com charme brasileiro: Gramado te espera.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/gramado-br.pt.html?aid=1702940;label=gramado-br-9mdxOgHEKdF*HFJRwSmC1gS479842228224:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-117383643:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIgLbDq-WxiAMVzNTCBB2VyQmNEAAYASAAEgKIIfD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g303536-Activities-Gramado_State_of_Rio_Grande_do_Sul.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Gramado",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "cultura gastronomia chocolate vinho frio trilhas caminhada"
    }  ,
    {  
        titulo: "Ipojuca",  
        descricao: "Ipojuca é um município brasileiro localizado no estado de Pernambuco, conhecido mundialmente por abrigar o complexo turístico de Porto de Galinhas, um dos destinos mais procurados do Brasil. Além de suas belas praias, a cidade oferece diversas opções de lazer, como piscinas naturais, passeios de jangada e trilhas ecológicas.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/ipojuca",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g644402-Activities-Ipojuca_State_of_Pernambuco.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Ipojuca",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "Ipojuca PortodeGalinhas Pernambuco Praias PiscinasNaturais Nordeste Brasil Turismo Viagem Férias Relaxar Sol Mar"
    } ,
    {  
        titulo: "Foz do Iguaçu",  
        descricao: "Foz do Iguaçu é uma cidade brasileira localizada no estado do Paraná, famosa por abrigar as Cataratas do Iguaçu, uma das Sete Maravilhas Naturais do Mundo. Além das cataratas, a cidade oferece diversas opções de turismo de aventura, como rafting e trilhas ecológicas, além de um rico patrimônio histórico e cultural.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/foz-do-iguacu.pt.html?aid=1702940;label=foz-do-iguacu-Ms9y2zWW0Ohu85SoLeg9NAS528791902765:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-10996545212:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI8aT8q-exiAMVblRIAB1pMCg5EAAYASAAEgIXdfD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g303444-Activities-Foz_do_Iguacu_State_of_Parana.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Foz_do_Igua%C3%A7u",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "FozdoIguaçu CataratasdoIguaçu Paraná Brasil TurismoAventura Natureza Paisagem MaravilhaNatural Trilhas Rafting História #Cultura"
    } ,
    {  
        titulo: "Bonito",  
        descricao: "Bonito é um município brasileiro localizado no estado do Mato Grosso do Sul, conhecido mundialmente por suas belezas naturais e águas cristalinas. A cidade oferece diversas opções de ecoturismo, como mergulho em rios, flutuação em cavernas e trilhas em meio à natureza exuberante.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/bonito.pt.html?aid=1702940;label=bonito-aeiwXGvNVs0pCfGYULeWYwS479842232520:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-350181108902:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIkMKYgOmxiAMVMVVIAB28uQALEAAYASAAEgLfe_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g303349-Activities-Bonito_State_of_Mato_Grosso_do_Sul.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Bonito_(Mato_Grosso_do_Sul)",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "Bonito MatoGrossoDoSul Brasil Ecoturismo Natureza ÁguasCristalinas Mergulho Flutuação Cavernas Trilhas TurismoSustentável"
    } ,
    {  
        titulo: "Maragogi",  
        descricao: "Maragogi é um município brasileiro localizado no estado de Alagoas, famoso por suas piscinas naturais, formadas por bancos de areia que emergem com a maré baixa. A cidade oferece diversas opções de lazer, como mergulho, snorkeling e passeios de barco.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/maragoji.pt.html?aid=1702940;label=maragoji-PQ20oUmthvml_HWGQQhF1AS479842232154:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-6715734515:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIndb38OmxiAMVMROtBh0UAgGZEAAYASAAEgIUh_D_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g644400-Activities-Maragogi_State_of_Alagoas.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Maragogi",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "Maragogi Alagoas Brasil PiscinasNaturais Mergulho Snorkeling Praias Nordeste Turismo Viagem Férias"
    } ,
    {  
        titulo: "Chapada dos Veadeiros",  
        descricao: ": A Chapada dos Veadeiros é um parque nacional localizado no estado de Goiás, conhecido por sua rica biodiversidade e paisagens exuberantes. A região oferece diversas opções de ecoturismo, como trilhas, cachoeiras e observação de aves.",  
        linkPesquisaDeHoteis : "https://www.booking.com/region/br/chapada-dos-veadeiros.pt.html?aid=1874385;label=chapada-dos-veadeiros-0CLmioCMguQJzCyUNrOnAAS468127131966:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-3472130000:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YSoO9VWsFCsboSiHsPRZAYk;ws=&gclid=EAIaIQobChMIzPubteuxiAMVmVNIAB2t_y25EAAYASAAEgLdoPD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g2620862-Activities-Chapada_dos_Veadeiros_National_Park_State_of_Goias.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Chapada_dos_Veadeiros",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "ChapadadosVeadeiros Goiás Brasil ParqueNacional Natureza Biodiversidade Trilhas Cachoeiras Ecoturismo Aventura"
    } ,
    {  
        titulo: "Lençóis Maranheses",  
        descricao: "Os Lençóis Maranhenses são um parque nacional localizado no estado do Maranhão, famoso por suas lagoas cristalinas formadas entre dunas de areia branca. A região oferece diversas opções de turismo de aventura, como trilhas, passeios de barco e banho nas lagoas.",  
        linkPesquisaDeHoteis : "https://www.booking.com/city/br/barreirinhas.pt.html?aid=1702940;label=barreirinhas-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI2vbsmuyxiAMVPW1_AB0HaChqEAAYASAAEgIMrfD_BwE",  
        linkPontosTuristicos : "https://www.tripadvisor.com.br/Attractions-g671558-Activities-Barreirinhas_State_of_Maranhao.html",  
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Parque_Nacional_dos_Len%C3%A7%C3%B3is_Maranhenses",
        linkBuscarViagemTerrestre : "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea : "https://www.decolar.com/",
        tags :   "LençóisMaranhenses Maranhão Brasil ParqueNacional Lagoas Dunas Natureza Paisagem Aventura Ecoturismo"
    },

    {
        titulo: "Morro São Paulo",
        descricao: "Morro São Paulo é uma charmosa vila localizada na Ilha de Tinharé, na Bahia. Famosa por suas praias paradisíacas, como a Praia do Forte e a Praia do Amor, oferece uma vida noturna vibrante e diversas atividades ao ar livre, como mergulho e passeios de barco.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/morro-de-sao-paulo.pt.html?aid=1702940;label=morro-de-sao-paulo-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIipqb4MLxjAMV9mP-AB2D8gF-6AAYAiAAEgLZP_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g488168-Activities-Morro_de_Sao_Paulo_State_of_Bahia.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Morro_de_S%C3%A3o_Paulo",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "MorroSãoPaulo Bahia Praia Ilhas Natureza Turismo VidaNoturna"
    },
    {
        titulo: "Paraty",
        descricao: "Paraty é uma cidade histórica localizada no estado do Rio de Janeiro. Conhecida por seu centro histórico bem preservado, ruas de pedra e arquitetura colonial, a cidade também oferece belas praias e uma rica cultura local.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/paraty.pt.html?aid=1702940;label=paraty-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIw5v4o7GxjAMVNiOAB0F5AW2uEAAYASAAEgIFlvD_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303503-Activities-Paraty_State_of_Rio_de_Janeiro.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Paraty",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Paraty RioDeJaneiro História CentroHistórico Praias Cultura Colonial"
    },
    {
        titulo: "Búzios",
        descricao: "Búzios é uma famosa cidade litorânea localizada no estado do Rio de Janeiro, conhecida por suas praias deslumbrantes, vida noturna animada e atmosfera charmosa. É um destino popular para turistas em busca de relaxamento e diversão.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/buzios.pt.html?aid=1702940;label=buzios-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI-tbU6uHxiAMV8FPAB0ArvAwrEAAYASAAEgIMRfD_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303492-Activities-Buzios_State_of_Rio_de_Janeiro.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Arma%C3%A7%C3%A3o_dos_B%C3%BAzios",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Búzios RioDeJaneiro Praias VidaNoturna Lazer Turismo Relaxamento"
    },
    {
        titulo: "Uberaba",
        descricao: "Cidade do saudoso médium Chico Xavier. Uberaba é uma cidade situada no estado de Minas Gerais, conhecida por sua rica tradição cultural e eventos como a Expozebu. A cidade oferece uma mistura de atrativos turísticos e culturais, com destaque para sua arquitetura histórica e eventos regionais.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/uberaba.pt.html?aid=1702940;label=uberaba-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIw9H9rMXjAMV8HhVAB0cJAQJwEAAYASAAEgIuDvD_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303363-Activities-Uberaba_State_of_Minas_Gerais.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Uberaba",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Uberaba MinasGerais Cultura Eventos Arquitetura História ChicoXavier religião espírita espiritismo alankardec kardec"
    },{
        titulo: "Chapada dos Guimarães",
        descricao: "Chapada dos Guimarães é um município e parque nacional localizado no estado de Mato Grosso, conhecido por suas impressionantes formações geológicas, cachoeiras e trilhas. É um destino popular para ecoturismo e aventura.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/chapada-dos-guimaraes.pt.html?aid=1702940;label=chapada-dos-guimaraes-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI7J-X_O_xjAMV9ZXAB0BmrgDTEAAYAiAAEgLlP_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303340-Activities-Chapada_dos_Guimaraes_State_of_Mato_Grosso.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Chapada_dos_Guimar%C3%A3es",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        tags: "Chapada Chapadadosguimarães Chapadadosguimaraes guimaraes geografia trilha cachoeira"
    },
    {
        titulo: "Tiradentes",
        descricao: "Tiradentes é uma cidade histórica localizada no estado de Minas Gerais, conhecida por seu bem preservado centro colonial e arquitetura barroca. É um destino popular para turismo cultural e gastronômico, oferecendo diversas opções de restaurantes e eventos culturais.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/tiradentes.pt.html?aid=1702940;label=tiradentes-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIx5vT2MHxjAMV2kXAB0YJtQFS6AAYAiAAEgIv3_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303369-Activities-Tiradentes_State_of_Minas_Gerais.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Tiradentes_(Minas_Gerais)",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Tiradentes MinasGerais História Arquitetura Colonial Cultura Gastronomia"
    },
    {
        titulo: "Belo Horizonte",
        descricao: "Belo Horizonte é a capital do estado de Minas Gerais, conhecida por sua vida cultural vibrante, arquitetura moderna e deliciosas opções gastronômicas. A cidade oferece uma combinação de atrações urbanas e naturais, com parques, museus e centros culturais.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/belo-horizonte.pt.html?aid=1702940;label=belo-horizonte-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIh4fLz6_xjAMVHZ7AB0D7VA0REAAYASAAEgK3T_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303374-Activities-Belo_Horizonte_State_of_Minas_Gerais.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Belo_Horizonte",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "BeloHorizonte MinasGerais Cultura Gastronomia Arquitetura Parques"
    },
    {
        titulo: "Ilha Bela",
        descricao: "Ilha Bela é um município localizado no litoral norte do estado de São Paulo, conhecido por suas praias paradisíacas, trilhas e rica biodiversidade. É um destino ideal para quem busca natureza, aventura e relaxamento.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/ilha-bela.pt.html?aid=1702940;label=ilha-bela-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI0__2v7_lxjAMUrbAB0RwmQwZEAAYAiAAEgK9_3_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303634-Activities-Ilhabela_State_of_Sao_Paulo.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Ilhabela",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "IlhaBela SãoPaulo Praias Natureza Trilhas Ecoturismo Aventura"
    },
    {
        titulo: "Canoa Quebrada",
        descricao: "Canoa Quebrada é uma conhecida vila de praia localizada no estado do Ceará, famosa por suas dunas, falésias coloridas e vida noturna animada. É um destino popular para quem busca praias exóticas e atividades de aventura.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/canoa-quebrada.pt.html?aid=1702940;label=canoa-quebrada-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIq5SPtqPxjAMVxM4AB0YcEEylEAAYASAAEgITtfD_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303291-Activities-Canoa_Quebrada_State_of_Ceara.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Canoa_Quebrada",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "CanoaQuebrada Ceará Praias Dunas Falésias VidaNoturna Aventura"
    },
    {
        titulo: "Navegantes",
        descricao: "Navegantes é uma cidade localizada no estado de Santa Catarina, conhecida por suas praias e ambiente descontraído. É um destino ideal para quem procura relaxar à beira-mar e aproveitar as atrações naturais da região.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/navegantes.pt.html?aid=1702940;label=navegantes-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI1I6YrqD1xjAMWQfAB0YHGw2V6AAYASAAEgIF6_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Tourism-g303587-Navegantes_State_of_Santa_Catarina-Vacations.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Navegantes_(Santa_Catarina)",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "sul praia beiramar mar litoral"
    },
    {
        titulo: "Campinas",
        descricao: "Campinas é uma cidade localizada no interior do estado de São Paulo, conhecida por seu dinamismo econômico e cultural. Oferece uma variedade de atrações, como centros culturais, parques e uma rica gastronomia.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/campinas.pt.html?aid=1702940;label=campinas-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIhPjP8uKxjAMVliHAB0GQeAR2EAAYAiAAEgIJrfD_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303605-Activities-Campinas_State_of_Sao_Paulo.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Campinas",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Campinas SãoPaulo Economia Cultura Gastronomia Parques"
    },
    {
        titulo: "Santos",
        descricao: "Santos é uma cidade portuária localizada no estado de São Paulo, famosa por seu extenso litoral e pelo histórico Porto de Santos. A cidade oferece atrações como o Museu do Café e o Jardim da Orla.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/santos.pt.html?aid=1702940;label=santos-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIvKD-v6qxjAMVHTfAB0D3fAW6EAAYAiAAEgK4gvD_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303625-Activities-Santos_State_of_Sao_Paulo.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Santos_(S%C3%A3o_Paulo)",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Santos SãoPaulo Praia Porto Cultura JardimMuseu"
    },
    {
        titulo: "Cariacica",
        descricao: "Cariacica é um município localizado no estado do Espírito Santo, conhecido por sua proximidade com Vitória e pelas suas belezas naturais. A cidade oferece opções de lazer e contato com a natureza.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/cariacica.pt.html?aid=1702940;label=cariacica-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIxPf-6crxjAMV5dHAB0YkKQp1EAAYAiAAEgKpI_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303374-Activities-Cariacica_State_of_Espirito_Santo.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Cariacica",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Cariacica EspíritoSanto Naturaleza ProximidadeVitória Lazer"
    },
    {
        titulo: "São João Del Rey",
        descricao: "São João Del Rey é uma cidade histórica localizada em Minas Gerais, famosa por seu patrimônio colonial e eventos culturais. A cidade é um destino popular para quem aprecia história e arquitetura barroca.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/sao-joao-del-rei.pt.html?aid=1702940;label=sao-joao-del-rei-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIxG_j78fxjAMVRO9AB0Yu8AKtEAAYASAAEgIUl_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303376-Activities-Sao_Joao_del_Rei_State_of_Minas_Gerais.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/S%C3%A3o_Jo%C3%A3o_del-Rei",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "SãoJoãoDelRei MinasGerais História Colonial Arquitetura Cultural"
    },
    {
        titulo: "Barretos",
        descricao: "Barretos é uma cidade localizada no interior do estado de São Paulo, famosa por seu rodeio anual, o Festa do Peão de Barretos. A cidade oferece um ambiente vibrante e diversas atrações relacionadas à cultura country.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/barretos.pt.html?aid=1702940;label=barretos-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI-pH84NHxjAMVFB7AB0YBYe9gEAAYASAAEgJjt_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303349-Activities-Barretos_State_of_Sao_Paulo.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Barretos",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Barretos SãoPaulo Rodeio FestaDoPeão Cultura Country rodeio"
    },
    {
        titulo: "Boa Vista",
        descricao: "Boa Vista é a capital do estado de Roraima, localizada no norte do Brasil. É conhecida por sua rica diversidade cultural e belezas naturais, incluindo a proximidade com a floresta amazônica e o Rio Branco.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/boa-vista.pt.html?aid=1702940;label=boa-vista-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI_7T15LvxjAMV4WfAB0Y4Nw7VEAAYAiAAEgIkd_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303374-Activities-Boa_Vista_Roraima_State.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Boa_Vista_(Roraima)",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "BoaVista Roraima Amazônia Cultura Natureza Diversidade"
    },
    {
        titulo: "Londrina",
        descricao: "Londrina é uma cidade localizada no norte do estado do Paraná, conhecida por sua qualidade de vida e desenvolvimento econômico. Oferece diversas opções culturais, parques e eventos ao longo do ano.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/londrina.pt.html?aid=1702940;label=londrina-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI2rjW2MfxjAMV9ZYAB0YjrkK6EAAYAiAAEgKgb_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303377-Activities-Londrina_State_of_Parana.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Londrina",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Londrina Paraná Cultura Parques Economia QualidadeDeVida"
    },
    {
        titulo: "Chapada da Diamantina",
        descricao: "Chapada da Diamantina é uma região montanhosa na Bahia, conhecida por suas paisagens deslumbrantes, cachoeiras e trilhas. É um destino popular para o ecoturismo e para quem busca contato com a natureza.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/chapada-da-diamantina.pt.html?aid=1702940;label=chapada-da-diamantina-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIqKj46NfxjAMVq-9AB0YBEEXHEAAYASAAEgK6gfD_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303269-Activities-Chapada_Diamantina_State_of_Bahia.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Chapada_da_Diamantina",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "ChapadaDaDiamantina Bahia Natureza Cachoeiras Trilhas Ecoturismo"
    },
    {
        titulo: "Serra Negra",
        descricao: "Serra Negra é uma cidade localizada no interior do estado de São Paulo, conhecida por seu clima ameno e suas opções de turismo rural e ecoturismo. A cidade é famosa por suas fontes de água mineral e áreas verdes.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/serra-negra.pt.html?aid=1702940;label=serra-negra-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI9pHj_9_xjAMVWoAAB0YlNQzZEAAYAiAAEgJI4_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303606-Activities-Serra_Negra_State_of_Sao_Paulo.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Serra_Negra",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "SerraNegra SãoPaulo TurismoRural Ecoturismo ClimaAmeno ÁguaMineral"
    },
    {
        titulo: "Palmas",
        descricao: "Palmas é a capital do estado do Tocantins, situada no norte do Brasil. A cidade é conhecida por seu planejamento urbano moderno, áreas verdes e como ponto de partida para explorar a região amazônica.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/palmas.pt.html?aid=1702940;label=palmas-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIwprc9b3_xjAMV93AB0YlVoJhEAAYAiAAEgJ1L_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303309-Activities-Palmas_State_of_Tocantins.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Palmas_(Tocantins)",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Palmas Tocantins PlanejamentoUrbano Natureza RegiãoAmazônica"
    },
    {
        titulo: "Cachoeira de Emas - GO",
        descricao: "Cachoeira de Emas é um pequeno município no estado de Goiás, conhecido por suas atrações naturais e pela tranquilidade do interior. É um destino ideal para quem busca contato com a natureza e relaxamento.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/cachoeira-de-emas.pt.html?aid=1702940;label=cachoeira-de-emas-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIhYPjxtm_xjAMV6YAB0YkSAGsEAAYAiAAEgIK8_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g442855-Activities-Cachoeira_de_Emas_Goias_State.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Parque_Nacional_das_Emas",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "CachoeiraDeEmas Goiás Natureza Interior Relaxamento"
    },
    {
        titulo: "Goiânia",
        descricao: "Goiânia é a capital do estado de Goiás e é conhecida por seu planejamento urbano e áreas verdes. A cidade combina modernidade com rica cultura e oferece diversas opções de lazer e eventos culturais.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/goiania.pt.html?aid=1702940;label=goiania-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI_eKdvZT_yAMVbVVAB0YHEn8uEAAYAiAAEgK9r_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303320-Activities-Goiania_State_of_Goias.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Goi%C3%A2nia",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Goiânia Goiás PlanejamentoUrbano Cultura Lazer Eventos"
    },
    {
        titulo: "Caraguatatuba",
        descricao: "Caraguatatuba é uma cidade litorânea localizada no estado de São Paulo, conhecida por suas praias e belezas naturais. A cidade é um destino popular para o turismo de verão e oferece diversas atividades ao ar livre.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/caraguatatuba.pt.html?aid=1702940;label=caraguatatuba-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIh_KDvP7y_yAMVqPAB0YEqA9gEAAYASAAEgKgP_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303497-Activities-Caraguatatuba_State_of_Sao_Paulo.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Caraguatatuba",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Caraguatatuba SãoPaulo Praias Natureza TurismoVerão"
    },
    {
        titulo: "Guarapari",
        descricao: "Guarapari é uma cidade litorânea no estado do Espírito Santo, famosa por suas praias de águas claras e quentes. É um destino popular para turismo de praia e oferece diversas opções de lazer e entretenimento.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/guarapari.pt.html?aid=1702940;label=guarapari-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIu9jmx8OxjAMV5sfAB0YH4gEGEAAYAiAAEgJ0z_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303320-Activities-Guarapari_State_of_Espirito_Santo.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Guarapari",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Guarapari EspíritoSanto Praias TurismoVerão Lazer"
    },
    {
        titulo: "Pelotas",
        descricao: "Pelotas é uma cidade localizada no estado do Rio Grande do Sul, conhecida por sua arquitetura histórica e tradições culturais. A cidade é famosa por suas confeitarias e festas tradicionais.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/pelotas.pt.html?aid=1702940;label=pelotas-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIx5zvxbq_8AMVSaRAB0YjrLzFEAAYAiAAEgKrVD_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303368-Activities-Pelotas_State_of_Rio_Grande_do_Sul.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Pelotas",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Pelotas RioGrandeDoSul Arquitetura História Gastronomia Cultural"
    },
    {
        titulo: "Cachoeira de Emas - SP",
        descricao: "Cachoeira de Emas é um pequeno município no interior de São Paulo, conhecido por suas atrações naturais e tranquilidade. A cidade é ideal para quem busca relaxamento e contato com a natureza.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/cachoeira-de-emas.pt.html?aid=1702940;label=cachoeira-de-emas-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMIhYPjxtm_xjAMV6YAB0YkSAGsEAAYAiAAEgIK8_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g442855-Activities-Cachoeira_de_Emas_Sao_Paulo_State.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Cachoeira_de_Emas",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "CachoeiraDeEmas SãoPaulo Natureza Relaxamento Tranquilidade"
    },
    {
        titulo: "Jaguariúna",
        descricao: "Jaguariúna é uma cidade localizada no interior de São Paulo, conhecida por suas áreas verdes e eventos culturais. É famosa pela Festa do Peão de Jaguariúna, um dos maiores eventos de rodeio do Brasil.",
        linkPesquisaDeHoteis: "https://www.booking.com/city/br/jaguariuna.pt.html?aid=1702940;label=jaguariuna-ZBuySKGSmQyAgbNgL*X8HwS479845113256:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-302161241932:lp9100333:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gclid=EAIaIQobChMI5tHCz8y8_xjAMV9kAB0YwEX5EAAYASAAEgKzY_D_BwE",
        linkPontosTuristicos: "https://www.tripadvisor.com.br/Attractions-g303611-Activities-Jaguariuna_State_of_Sao_Paulo.html",
        linkMaisInformacoes: "https://pt.wikipedia.org/wiki/Jaguari%C3%BAna",
        linkBuscarViagemTerrestre: "https://www.clickbus.com.br/?gad_source=1&gclid=EAIaIQobChMI2beh5tuxiAMVbV5IAB0YETWQEAAYAyAAEgLs_fD_BwE",
        linkBuscarViagemAerea: "https://www.decolar.com/",
        tags: "Jaguariúna SãoPaulo Eventos Cultura Rodeio ÁreasVerdes Rodeio"
    }
];

