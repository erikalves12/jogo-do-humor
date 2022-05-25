const btmpa = document.querySelector("#btmpa");
const imgpa = document.querySelector("#imgpa");
const h3pa = document.querySelector("#h3pa");
const ppa = document.querySelector("#ppa");
const palmeiras = document.querySelector("#Palmeiras");

const btmva = document.querySelector("#btmva");
const imgva = document.querySelector("#imgva");
const h3va = document.querySelector("#h3va");
const pva = document.querySelector("#pva");
const vasco = document.querySelector("#Vasco");

const btmga = document.querySelector("#btmga");
const imgga = document.querySelector("#imgga");
const h3ga = document.querySelector("#h3ga");
const pga = document.querySelector("#pga");
const galo = document.querySelector("#Galo");

btmpa.addEventListener("click", function () {
  if (btmpa.value == "p1") {
    imgpa.src =
      "https://th.bing.com/th/id/R.9b567e51e0718b37b66b3302070e6bdd?rik=gK6S6sGuchDtBw&pid=ImgRaw&r=0";
    h3pa.innerText = "Quase pedindo música no fantástico kkkk!";
    ppa.innerText =
      "O Palmeiras foi rebaixado duas vezes e faz parte dos times rebaixados do Brasileirão. A primeira em 2002, e a segunda em 2012. Curiosamente, no mesmo ano em que foi rebaixado pela segunda vez no campeonato brasileiro, o Palmeiras sagrou-se campeão da copa do Brasil, torneio de mata-mata que era jogado paralelamente ao brasileirão.";
    btmpa.value = "p2";
  } else if (btmpa.value == "p2") {
    imgpa.src = "https://i.ytimg.com/vi/ZP17CAkiPQU/hqdefault.jpg";
    h3pa.innerText =
      "Isso sim é fazer história, mas um recorde alcançado, Parabéns kkk ";
    ppa.innerText =
      "O Palmeiras sofreu ontem uma goleada de 4 x 1 para o Água Santa, de Diadema.Com isso, o Palmeiras chega a 22 goleadas sofridas no século. Quase o dobro do que os rivais Corinthians e São Paulo, que levaram 12 goleadas. O Santos sofreu 19 goleadas. ";
    btmpa.value = "p3";
  } else {
    imgpa.src = "https://pbs.twimg.com/media/Et93SGqWgAAb8S4.jpg";
    h3pa.innerText = "Tadinhos, Mamãe Leila vai comprar um mundial pra vocês?";
    ppa.innerText =
      " A questão é polêmica até mesmo entre os palmeirenses. Enquanto o comentarista Edmundo afirma que sim, o ex-goleiro Marcos acha que não. E que inclusive é por sua culpa, devido à falha que culminou no gol da vitória do Manchester United da final de 1999. Claro que os torcedores rivais fazem questão de não reconhecer a conquista. Aliás, a piada de que o Palmeiras não tem Mundial começou em 2012, quando o Corinthians venceu a Copa do Mundo de Clubes contra o Chelsea.";
    btmpa.value = "p1";
  }
});

btmva.addEventListener("click", function () {
  if (btmva.value == "v1") {
    imgva.src =
      "https://th.bing.com/th/id/R.88939be8a38a032754824ddcc3d2fb96?rik=dsfrlkQGRS5wdg&riu=http%3a%2f%2fimages.performgroup.com%2fdi%2flibrary%2fGoal_Brasil%2f29%2f4a%2fmeme-vasco_v41nbkzhhqte1w2q96td1peix.jpg%3ft%3d2035529585%26w%3d940&ehk=d2aFNSxWMP1GN0fMPs8QOnJmPJLCx56OR%2fVBkIaDQEs%3d&risl=&pid=ImgRaw&r=0";
    h3va.innerText = "O que estava ruim ainda poderia piorar?";
    pva.innerText =
      " O Estádio de São Januário teve a energia cotada nesta terça-feira. Pelo não pagamento da conta do mês de julho, a Light, concessionária de energia, interrompeu o fornecimento na parte da manhã, e a casa cruzmaltina precisou operar por meio de um gerador de energia. Em nota, a assessoria da Light reforça que cumpriu todos os procedimentos regulatórios que antecedem a suspensão do fornecimento, incluindo a emissão ao cliente da notificação de suspensão de energia, em 15 de agosto, recebida pelo mesmo no dia seguinte.";
    btmva.value = "v2";
  } else if (btmva.value == "v2") {
    imgva.src = "https://i.ytimg.com/vi/z4FHPOlJAg0/maxresdefault.jpg";
    h3va.innerText = "Esse pediu música no fantástico kkkkkkkkk ";
    pva.innerText =
      "O Vasco foi rebaixado para a Série B pela quarta vez na sua história. Nesta quinta-feira, mesmo com vitória por 3 a 2 sobre o Goiás, o time de São Januário teve a queda matematicamente confirmada e bateu um triste recorde.Ao repetir a marca negativa de 2008, 2013 e 2015, o Vasco se tornou a equipe com mais rebaixamentos para a Segunda Divisão dentro do G-12 - grupo que reúne os quatro clubes principais de São Paulo (Corinthians, Palmeiras, Santos e São Paulo) e do Rio (Botafogo, Flamengo, Fluminense e Vasco), além dos dois de Porto Alegre (Grêmio e Internacional) e Belo Horizonte (Atlético-MG e Cruzeiro). ";
    btmva.value = "v3";
  } else {
    imgva.src =
      "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/08/u7-590x330.jpg";
    h3va.innerText = "Freguês tem sempre razão kkkkkk";
    pva.innerText =
      "O clássico dos milhões é considerado por muitos o principal confronto carioca. Ao todo, Flamengo e Vasco disputaram 404 jogos, com 150 vitórias rubro-negras, 117 empates e 137 vitórias pelo lado cruzmaltino. O primeiro encontro entre as equipes ocorreu no dia 29 de abril de 1923, pelo Campeonato Carioca, com vitória vascaína por 3×1. O maior artilheiro do lado rubro-negro no duelo é o Zico, com 19 gols. Se considerarmos os gols marcados e sofridos, a vantagem é flamenguista com 524 contra 512.";
    btmva.value = "v1";
  }
});

btmga.addEventListener("click", function () {
  if (btmga.value == "g1") {
    imgga.src =
      "https://th.bing.com/th/id/R.89311b491a57fda5298b437db58c0f58?rik=Lvl0nAPprauRpw&pid=ImgRaw&r=0";
    h3ga.innerText = "Time grande cai, está um que acha ser grande kkk";
    pga.innerText =
      "O dia 27 de novembro de 2005 entrou para a história do Atlético de uma maneira que o torcedor prefere nem lembrar. O Galo empatou em 0 a 0 com o Vasco, no Mineirão, e foi rebaixado no Campeonato Brasileiro. Com uma campanha pífio de apenas 37% dos pontos conquistados, o time alvinegro caiu com uma rodada de antecedência. Cada clube jogou 42 vezes no Brasileirão daquele ano, que contou com 22 participantes.";
    btmga.value = "g2";
  } else if (btmga.value == "g2") {
    imgga.src =
      "https://th.bing.com/th/id/R.dcf393198a94a09210b0b07680c43bb9?rik=znUdEM24ZLImrA&pid=ImgRaw&r=0";
    h3ga.innerText = "Chocolate no domingo de Páscoa..kkkkkk ";
    pga.innerText =
      "Todo cruzeirense ou atleticano se lembra de onde estava ou o que estava fazendo no dia 4 de dezembro de 2011. Se apenas a data não ficou marcada, é bem simples para sintonizar, foi neste dia que o Cruzeiro aplicou a maior goleada de sua história sobre o Atlético.Disputada em Sete Lagoas, na Arena do Jacaré, já que o Mineirão estava em reforma para a Copa do Mundo de 2014, a partida teve torcida única do Cruzeiro, que festejou cada gol sobre o rival. Com o resultado, a equipe celeste escapou do rebaixamento, ficando em 16º lugar, com 43 pontos. ";
    btmga.value = "g3";
  } else {
    imgga.src =
      "https://img.r7.com/images/memes-atletico-mg-passa-vexame-e-e-eliminado-da-copa-do-brasil-pelo-afogados-27022020122414010?dimensions=771x420&no_crop=true?dimensions=151x93";
    h3ga.innerText = "Vexame!!! kkkkkkkk";
    pga.innerText =
      "Galo é eliminado pelo Afogados no maior vexame do time na Copa do Brasil Após empate em 2 a 2, time mineiro é derrotado por 7 a 6 nas penalidades e dá adeus à segunda competição em duas semanas";
    btmga.value = "g1";
  }
});
