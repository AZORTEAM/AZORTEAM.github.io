
(function(){
    
  // Inicia o firebase Firebase
  var config = {
  apiKey: "AIzaSyCVKx-Qz39MMyHpAqUD_f3CEGX7d4Xcy9M",
  authDomain: "pristine-lodge-248100.firebaseapp.com",
  databaseURL: "https://pristine-lodge-248100.firebaseio.com",
  projectId: "pristine-lodge-248100",
  storageBucket: "pristine-lodge-248100.appspot.com",
  messagingSenderId: "759752779255",
  appId: "1:759752779255:web:af8d28bea85ea508df3af2"
  };
  firebase.initializeApp(config);

  var db = firebase.database();

  // Cria os listeners dos dados no firebase
  var tempRef = db.ref('temperature');
  var umidRef = db.ref('humidity');
  var presenceRef = db.ref('presence');
  
  var varanda = db.ref('cargas/varanda');
  var sala = db.ref('cargas/sala');
  var banheiro = db.ref('cargas/banheiro');
  var cozinha = db.ref('cargas/cozinha');
  var quarto = db.ref('cargas/quarto');
  var ventilador = db.ref('cargas/tomada');
  var quintal = db.ref('cargas/quintal');
  var tv = db.ref('cargas/frente');


  // Registra as funções que atualizam os gráficos e dados atuais da telemetria
  tempRef.on('value', onNewData('currentTemp', 'tempLineChart' , 'Temperatura', 'C°'));
  umidRef.on('value', onNewData('currentUmid', 'umidLineChart' , 'Umidade', '%'));


  // Registrar função ao alterar valor de presença
  presenceRef.on('value', function(snapshot){
    var value = snapshot.val();
    var el = document.getElementById('currentPresence')
    if(value){
      el.classList.add('green-text');
    }else{
      el.classList.remove('green-text');
    }
  });

//==================================================================

  // Registrar função ao alterar valor da lampada
  var varandavalue = false;
  var salavalue = false;
  var banheirovalue = false;
  var cozinhavalue = false;
  var quartovalue = false;
  var ventiladorvalue = false;
  var quintalvalue = false;
  var tvvalue = false;
  
varanda.on('value', function(snapshot)
  {
    var value = snapshot.val();
    var el = document.getElementById('varanda')
    if(value)
	{
      el.classList.add('amber-text');
    }
	else
	{
      el.classList.remove('amber-text');
    }
    varandavalue = !!value;
  });

  // Registrar função de click no botão de lampada
  var btnVaranda = document.getElementById('btn-varanda');
  btnVaranda.addEventListener('click', function(evt){
  varanda.set(&quot!varandavalue&quot);
  });

sala.on('value', function(snapshot)
  {
    var value = snapshot.val();
    var el = document.getElementById('sala')
    if(value)
	{
      el.classList.add('amber-text');
    }
	else
	{
      el.classList.remove('amber-text');
    }
    salavalue = !!value;
  });

  // Registrar função de click no botão de lampada
  var btnSala = document.getElementById('btn-sala');
  btnSala.addEventListener('click', function(evt){
  sala.set(!salavalue);
  });
  
banheiro.on('value', function(snapshot)
  {
    var value = snapshot.val();
    var el = document.getElementById('banheiro')
    if(value)
	{
      el.classList.add('amber-text');
    }
	else
	{
      el.classList.remove('amber-text');
    }
    banheirovalue = !!value;
  });

  // Registrar função de click no botão de lampada
  var btnBanheiro = document.getElementById('btn-banheiro');
  btnBanheiro.addEventListener('click', function(evt){
  banheiro.set(!banheirovalue);
  });
  
cozinha.on('value', function(snapshot)
  {
    var value = snapshot.val();
    var el = document.getElementById('cozinha')
    if(value)
	{
      el.classList.add('amber-text');
    }
	else
	{
      el.classList.remove('amber-text');
    }
    cozinhavalue = !!value;
  });

  // Registrar função de click no botão de lampada
  var btnCozinha = document.getElementById('btn-cozinha');
  btnCozinha.addEventListener('click', function(evt){
  cozinha.set(!cozinhavalue);
  });
  
quarto.on('value', function(snapshot)
  {
    var value = snapshot.val();
    var el = document.getElementById('quarto')
    if(value)
	{
      el.classList.add('amber-text');
    }
	else
	{
      el.classList.remove('amber-text');
    }
    quartovalue = !!value;
  });

  // Registrar função de click no botão de lampada
  var btnQuarto = document.getElementById('btn-quarto');
  btnQuarto.addEventListener('click', function(evt){
  quarto.set(!quartovalue);
  });
  
ventilador.on('value', function(snapshot)
  {
    var value = snapshot.val();
    var el = document.getElementById('ventilador')
    if(value)
	{
      el.classList.add('amber-text');
    }
	else
	{
      el.classList.remove('amber-text');
    }
    ventiladorvalue = !!value;
  });

  // Registrar função de click no botão de lampada
  var btnVentilador = document.getElementById('btn-ventilador');
  btnVentilador.addEventListener('click', function(evt){
  ventilador.set(!ventiladorvalue);
  });
  
quintal.on('value', function(snapshot)
  {
    var value = snapshot.val();
    var el = document.getElementById('quintal')
    if(value)
	{
      el.classList.add('amber-text');
    }
	else
	{
      el.classList.remove('amber-text');
    }
    quintalvalue = !!value;
  });

  // Registrar função de click no botão de lampada
  var btnQuintal = document.getElementById('btn-quintal');
  btnQuintal.addEventListener('click', function(evt){
  quintal.set(!quintalvalue);
  });
  
tv.on('value', function(snapshot)
  {
    var value = snapshot.val();
    var el = document.getElementById('tv')
    if(value)
	{
      el.classList.add('amber-text');
    }
	else
	{
      el.classList.remove('amber-text');
    }
    tvvalue = !!value;
  });

  // Registrar função de click no botão de lampada
  var btnTv = document.getElementById('btn-tv');
  btnTv.addEventListener('click', function(evt){
  tv.set(!tvvalue);
  });
  

})();





// Retorna uma função que de acordo com as mudanças dos dados
// Atualiza o valor atual do elemento, com a metrica passada (currentValueEl e metric)
// e monta o gráfico com os dados e descrição do tipo de dados (chartEl, label)
function onNewData(currentValueEl, chartEl, label, metric){
  return function(snapshot){
    var readings = snapshot.val();
    if(readings){
        var currentValue;
        var data = [];
        for(var key in readings){
          currentValue = readings[key]
          data.push(currentValue);
        }

        document.getElementById(currentValueEl).innerText = currentValue + ' ' + metric;
        buildLineChart(chartEl, label, data);
    }
  }
}

// Constroi um gráfico de linha no elemento (el) com a descrição (label) e os
// dados passados (data)
function buildLineChart(el, label, data){
  var elNode = document.getElementById(el);
  new Chart(elNode, {
    type: 'line',
    data: {
        labels: new Array(data.length).fill(""),
        datasets: [{
            label: label,
            data: data,
            borderWidth: 1,
            fill: false,
            spanGaps: false,
            lineTension: 0.1,
            backgroundColor: "#F9A825",
            borderColor: "#F9A825"
        }]
    }
  });
}

 var start = function ()
		{
            var inc = document.getElementById('incomming');
            var wsImpl = window.WebSocket || window.MozWebSocket;
            var form = document.getElementById('sendForm');
            var input = document.getElementById('sendText');
	//=========================================================================================================		
		    var ws = new WebSocket('ws://localhost:8081');
            window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
            let finalTranscript = '';
            let recognition = new window.SpeechRecognition();
        	recognition.lang = 'pt-BR';
            recognition.interimResults = true;
            recognition.maxAlternatives = 1;
            recognition.continuous = false;
     //======================================================================================================== 
			
    recognition.onresult = (event) => 
	{
      let interimTranscript = '';
      for (let i = event.resultIndex, len = event.results.length; i < len; i++)
	  {
        let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) 
		{
			 ws.send(transcript + ".");
             finalTranscript += transcript;
        } 
		 else 
		{
          interimTranscript += transcript;
		  ws.send(interimTranscript);   
        }

      }
	   //inc.innerHTML += '.. connection closed<br/>';
      // inc.innerHTML += finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>' + '<br/>';
    }
    //recognition.start();
				
            //inc.innerHTML += "TENTANDO CONECTAR AO SERVIDOR...<br/>";

            // create a new websocket and connect
            window.ws = new wsImpl('ws://localhost:2022/');

            // when data is comming from the server, this metod is called
            ws.onmessage = function (evt) 
			{
               // inc.innerHTML += evt.data + '<br/>';
				if (evt.data === 'reconhecimento de voz')
                {
				  
                     recognition.start();
                   
                  
                }
				
				if (evt.data === 'Pesquisa')
                {
                   recognition.continuous = true;
				   recognition.start();
                }
				
				if (evt.data === 'quit')
                {
                   window.close();
                }
				
				if (evt.data === 'stop')
                {
                 
				   recognition.stop();
				   
                }
            };

            // when the connection is established, this method is called
            ws.onopen = function () 
			{
                //inc.innerHTML += 'CONEXÃO ESTABELECIDA.<br/>';
            };

            // when the connection is closed, this method is called
            ws.onclose = function () 
			{
                //inc.innerHTML += 'CONEXÃO FECHADA.<br/>';
				//window.location.reload();
				
            }
            
			form.addEventListener('submit', function(e)
			{
				e.preventDefault();
				var val = input.value;
				ws.send(val);
				input.value = "";
			});
				
			recognition.addEventListener('audioend', function()
			{ 
              ws.send("!");
			});
			
			recognition.addEventListener('audiostart', function()
			{ 
              ws.send("#");
			});
			
			recognition.addEventListener('nomatch', function() 
			{ 
				//ws.send("Fala náo reconhecida");
            });
			
			recognition.addEventListener('error', function(event)
			{ 
               ws.send("&&");
            });
			
			recognition.addEventListener('speechend', function(event)
			{ 
               //ws.send("&&");
            });
            
        }
        window.onload = start;
