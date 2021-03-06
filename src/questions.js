const questions = [

	// Perguntas sobre Home Office
	"Você tem alguma “companhia de trabalho” (parceiros, pessoas que morem com você, irmãos, familiares, animais de estimação)?",
	"Seu horário de trabalho sofreu alterações depois que você passou a trabalhar de casa?",
	"Você prefere trabalhar remotamente ou no escritório?",
	"Qual é o melhor acessório que você usa para trabalhar remotamente?",
	"Qual é a sua bebida favorita para trabalhar remotamente? Prefere café ou chá?",
	"Existe algum lugar na sua casa em que você se sinta mais produtivo(a)?",
	"Se você pudesse fazer qualquer melhoria no seu local de trabalho remoto, qual seria?",
	"Qual é a sua rotina matinal?",
	"Com que frequência você trabalha de pijama?",
      
	// Perguntas sobre o passado
	"Você tem irmãos? Quem é mais velho ou mais novo?",
	"Onde você morava na infância?",
	"Você tinha, ou queria ter, algum animal de estimação?",
	"Você praticava algum esporte na infância? Pratica atualmente?",
	"Você fala alguma outra língua?",
	"Qual é o seu lugar favorito no mundo?",
	"Qual foi o seu primeiro trabalho?",
	"Qual era o seu desenho favorito na infância? E o personagem favorito? Se não forem os mesmos, por quê?",
	"Quem foi (ou é) a sua maior inspiração na vida?",
	"Existe alguma tradição familiar que você gostaria de transmitir aos seus filhos? Qual?",
	"Existe algum conselho recebido dos seus pais ou avós que você deseje transmitir? Qual?",
	"Quais eram as suas matérias favoritas na escola?",
	"Você tinha algum amigo imaginário na infância? Como era?",
	"Você já foi confundido(a) com alguém famoso?",
      
	// Perguntas divertidas
	"Quem é a pessoa mais famosa que você já conheceu? Como foi que vocês se conheceram?",
	"Há algo que você adora, mas que tem vergonha ou constrangimento de assumir?",
	"Qual era o seu medo mais incoerente/infantil/insensato no passado?",
	"Qual é o papel de parede que você está usando na tela do seu computador ou celular agora? Por que essa imagem?",
	"Descreva um dia na sua vida em que nada parecia dar certo.",
	"Que nome você daria ao seu carro?",
	"Qual é a sua piadinha inofensiva favorita?",
	"Se você pudesse apresentar um programa de televisão, qual seria?",
	"Qual foi a sua melhor fantasia de Halloween/Carnaval? E a pior?",
	"Conte uma situação constrangedora que tenha acontecido com você.",
	"Qual foi a última vez que você levou uma bronca?",
	"Qual seria o título da sua autobiografia?",
	"Se você pudesse adicionar um verbete ao dicionário, qual seria essa palavra e o seu significado?",
	"Se você pudesse reavivar qualquer tendência da moda ou uma gíria antiga, qual seria?",
	"Se você tivesse que falar como um personagem de desenho animado pelo resto da sua vida, qual personagem você escolheria? Consegue imitá-lo agora?",
	"Qual foi o pior conselho que você já recebeu na vida?",
	"Se você tivesse que comer um giz de cera, qual cor você escolheria?",
      
	// Perguntas populares
	"Qual é a sua leitura atual? E qual é o seu livro favorito?",
	"Qual é o seu programa de TV favorito?",
	"Qual é o seu filme favorito?",
	"Qual é a sua música favorita?",
	"Qual foi o primeiro show da sua vida? Qual foi o melhor show que você já viu?",
	"Se você estivesse sozinho(a) em uma ilha deserta, qual livro ou objeto levaria consigo?",
	"Se você pudesse jantar com uma personalidade histórica, quem seria? E se fosse uma celebridade contemporânea?",
	"Qual é o melhor presente que você já recebeu na vida? E o melhor que você já deu a alguém?",
	"Você tem algum talento pouco conhecido?",
	"Quando era mais jovem, o que você queria ser na idade adulta?",
	"Se você tivesse direito a três desejos, quais seriam?",
	"Se ganhasse um milhão de dólares, qual seria a primeira coisa que você faria?",
	"Fora do contexto do trabalho, quais são as suas paixões e motivações?",
	"Se você tivesse uma hora a mais por dia, o que faria nesse tempo?",
	"Qual é o seu estilo musical favorito?",
	"Você gosta mais de cães, gatos, ou não tem preferência?",
	"O que está na sua lista de desejos a fazer antes de morrer?",
      
	// Perguntas incomuns
	"Se você fosse sair vencedor(a) de algum programa de competição na TV, qual seria?",
	"Se você só pudesse usar um único emoji para o resto da sua vida, qual seria?",
	"Qual é a sua frase favorita de um filme?",
	"Há algo que você considera ser totalmente superestimado?",
	"Se você fosse atleta, qual seria a sua música de encerramento de carreira?",
	"Qual livro você gostaria de poder ler pela primeira vez novamente?",
	"Diga um filme que, na sua opinião, merecia ter continuação.",
	"Se você tivesse que enviar um emoji por e-mail para o CEO da sua empresa, qual seria?",
	"Qual foi a primeira coisa que lhe passou pela cabeça ao acordar?",
	"Qual foi o melhor dia da sua vida?",
	"Se a Terra fosse visitada por extraterrestres, com quem você recomendaria que eles falassem?",
	"Para você, cachorro-quente é um sanduíche?",
      
	// Sobre viagens
	"Qual foi sua viagem preferida?",
	"Você já viajou para o exterior? Como foi?",
	"Prefere montanha ou mar? Por quê?",
	"Prefere neve ou areia da praia? Por quê?",
	"Qual foi o seu primeiro destino de viagem (ou o primeiro de que você se lembre)?",
	"O que você mais gosta de fazer na sua cidade?",
	"Se precisasse se mudar de país, para onde você iria?",
	"Qual foi o maior perrengue em viagens que você se lembra de ter passado?",
      
	// Perguntas gastronômicas
	"Qual é a sua comida preferida?",
	"Quais são seus sabores de pizza preferidos?",
	"Qual é o seu sabor de sorvete preferido?",
	"Qual é a sua bebida preferida num happy-hour?",
	"Se você fosse “batizar” uma bebida, que nome daria a ela?",
	"Prefere comida doce ou salgada?",
	"Qual é o seu fast-food preferido?",
	"Existe alguma comida que você não queria provar, mas que adorou quando a provou?",
      
	// Quebra-gelos ao estilo “o que você prefere?”
	"O que você prefere para as férias: descanso ou aventura?",
	"O que você prefere: fazer parte dos Vingadores ou da Liga da Justiça?",
	"O que você prefere: participar de um reality show romântico ou de aventura?",
	"O que você prefere: ser um super-herói ou o melhor chef de cozinha do mundo?",
	"O que você prefere: competir nas Olimpíadas ou dirigir um filme indicado ao Oscar?",
      
	// Perguntas hipotéticas
	"Se você tivesse que viver em um videogame, qual seria a sua escolha?",
	"Se você pudesse ter qualquer superpoder, qual escolheria?",
	"Se você pudesse eliminar uma palavra do dicionário, qual seria?",
	"Se você pudesse ser qualquer animal, qual seria?",
	"Se você pudesse ter controle sobre um elemento (ar, água, terra ou fogo), qual escolheria e por quê?",
	"Se você tivesse que viver em um filme da Disney, qual seria a sua escolha?",
	"Se você pudesse enviar uma mensagem para o mundo todo, o que você diria?",
	"Se você só pudesse assistir a um único filme pelo resto da vida, qual seria?",
	"Se você só pudesse escutar um único álbum musical pelo resto da vida, o que escolheria?",
	"Se você fosse uma batata, como gostaria de ser preparada?",
	"Se você tivesse 20 minutos para se preparar para um apocalipse zumbi, o que você faria? E se tivesse 24 horas?",
      
	// Para pequenos grupos
	"Qual é o seu restaurante local favorito, e por quê?",
	"Cite algo que você sempre quis fazer, mas ainda não teve oportunidade. E por que não?",
	"Qual foi a última vez que você fez algo pela primeira vez?",
	"O que você faz para combater o estresse?",
	"Qual é a coisa mais surpreendente que aconteceu com você em outro país?",
	"Conte-nos algo sobre você que surpreenderia a maioria das pessoas no seu círculo de convivência.",
	"Descreva uma experiência de vida que mudou os seus valores."
];

export default questions;
