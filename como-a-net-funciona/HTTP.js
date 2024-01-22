//REQUISIÇÃO HTTP

//PROTOCOLO=conjunto de regras que estabelece como dois computadores devem se comunicar.È a linguagem entre maquinas
//VERBO   ação que deseja realizar:GET,HEAD,POST,PUT,PATCH,DELETE ou OPTIONS
//RECURSO   a parte da URL que vem depois do dominio:/livro/84/capitulo/2?lang=pt
//CABEÇALHOS  conjunto de caracteristicas do cliente,para o servidor se contextualizar
//CONTEUDO dados enviados

// VERBOS HTTP

//GET  o cliete quer obter este recurso(ler ou baixar);
//HEAD  o cliente quer ver apenas as caracteristicas deste recurso,mas não quer ver o recurso em si;
//POST  o cliente quer enviar um novo recurso para o servidor;
//PUT   o cliente quer substituir um recurso que talvez já exista;
//PATCH   o cliente quer editar um recurso que ja existe;
//DELETE   o cliente quer deletar um recurso;
//OPTIONS  o cliente quer saber o que ele pode fazer com um recurso;

//RESPOSTA HTTP

//CODIGO DE STATUS   codigo que indica se deu certo ou não,e o motivo;
//CABEÇALHOS   conjunto de caracteristicas desse recurso,para o cliente se contextualizar
//CONTEUDO   dados recebidos

//STATUS HTTP

//2XX  REPRESENTA SUCESSO.POR EXEMPLO:
//     200 - ok,deu certo.segue o conteudo.
//     201 - ok,criei o que voce pediu.
//     204 - ok,deu certo,mas não tenho nada para te enviar.

//3xx   representa que o recurso esta em outro lugar.por exemplo:
//      301 - recurso foi removiddo permanentemente.Segue a nova URL;
//      302 - recurso nçao esta aqui temporariamente.Sege a nova URL;

//4xx   representa um erro por conta do cliente.Por exemplo:
//      401 - voce não tem autorização para fazer isto.
//      404 - o recurso que voce pediu não existe.
//      429 - voce esta enviando um numero excessivo de requisições.

//5xx   represneta um erro por conta do servidor.Por exemplo:
//      500 - deu ruim.Não sei nem explicar o que houve.
//      503 - estou com um problema técnico e não consigo operar.
//      507 - não tenho espaço sufucuente para armazenar estes dados.