const user = document.querySelector('#txtUser');
const pass = document.querySelector('#txtPass');
const btn = document.querySelector("input[type='button']");
const small = document.querySelector('small');



console.log(user.parentElement);

btn.addEventListener('click', () => {
    show();
});



function show(){
  const url = 'http://10.0.0.105:9000/graphql';

const h = new Headers();
h.append('Content-Type', 'application/json')
// h.append('Accept','application/json');
// h.append('Access-Control-Request-Headers', '*')
// h.append("Access-Control-Request-Method", "*")
// h.append('Access-Control-Allow-Origin', '*')
h.append('authorization', 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpbmZvIjoibWlxdWVpYXMiLCJleHAiOjE2MTg2MjUwODEuMzUyfQ.xMgNP244pTWi2A3nOXyn6kvhEarD7Ny_SKo15GU45AkKSl1cFSHL4Ir0Q-UAWru_5EPSNdg1eKFiYVZEp3rw8Q')


const req = new Request(url,{
  method: 'POST',
  headers: h,
  mode: 'cors',
  body: JSON.stringify({
    query: `      
    query{
      user(input:{nome: "${user.value}", password
        :"${pass.value}"}){
        coduser
        senha    
        pseudonimo
        nome
        perfil{
          descricao
        }
        token
      } 
      }`
})
});
    fetch(req)
      .then((response) => {
        if(response.ok){
          return response.json();  
        }else{
          throw new Error ("BAD HTTP stuff"); 
        }
      })
      .then((jsonData) => {
        const u = jsonData.data.user.nome;
        const p = jsonData.data.user.senha;
        
        if(user.value === u && pass.value === p ){
          window.location.href = './login/pagina.html';
        }        
      })
      .catch((e) => {
        small.className = 'error';
        console.log('ERRO: ', e.message);
      })
    }
//show();
