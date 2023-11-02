# My GPS

## Descrição
My GPS é um projeto que permite capturar a localização atual do dispositivo tanto offline quanto online e sincronizá-la com um servidor quando estiver online. É uma ferramenta útil para rastreamento de localização em aplicativos móveis.

## Instalação
Certifique-se de ter o Node.js e o npm instalados em seu sistema. Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install

npm start
```

## Ferramentas
Context API: Para gerenciar o estado da aplicação e compartilhar informações sobre a localização.
Axios: Para realizar requisições HTTP ao servidor de sincronização.
Expo: Um framework de desenvolvimento de aplicativos móveis que simplifica o desenvolvimento multiplataforma.

## Conclusão

Enfrentei um pequeno problema com a API. Ela funcionou conforme o esperado durante os testes no Insomnia; no entanto, ao tentar sincronizar os dados, um erro inesperado surgiu:

```bash
javascript
Copy code
ERROR  Error in PointsRequest: [AxiosError: Network Error]
WARN  Possible Unhandled Promise Rejection (id: 19):
[AxiosError: Network Error]
```
Tentei usar tanto o Axios quanto o método fetch padrão do JavaScript, mas o problema persistiu. O que tornou a situação ainda mais estranha foi o fato de que os mesmos dados e o mesmo corpo da requisição funcionaram perfeitamente no Insomnia.

Essa situação é incomum para mim, pois estou habituado a fazer esse tipo de requisição e nunca tinha encontrado um problema semelhante anteriormente.

Resolvi usar o expo, por conta do prazo e da facilidade.



CONSEGUIIII, mas vou deixar registrado o que eu passei

Tinha que colocar o ip local do expo na request, quando coloquei ele deu certo.

Por aqui funcionou muito bem!!

Obrigado demais pela oportunidade!!


## Images

![Home](https://github.com/jonnypaulino/MyLocation/blob/main/assets/home.jpeg)
![Status](https://github.com/jonnypaulino/MyLocation/blob/main/assets/status.jpeg)
