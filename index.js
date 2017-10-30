let MessagingHub = require('messaginghub-client');
let WebSocketTransport = require('lime-transport-websocket');
let Lime = require('lime-js');

let client = new MessagingHub.ClientBuilder()
    .withIdentifier('mandeseujob')
    .withAccessKey('TktlV1d4dVh2dzJNNTQ3V3FRbEc=')
    .withTransportFactory(() => new WebSocketTransport())
    .build();


client.addMessageReceiver(true, function (message) {
    console.log(message);
});

client.addMessageReceiver(function(message){
    return message.content=="Mandar Job"
}, function (message) {
    var jobs={
    "to": message.from,
    "type": "application/vnd.lime.collection+json",
    "content": {
        "itemType": "application/vnd.lime.container+json",
        "items": [
            {
                "type": "application/vnd.lime.media-link+json",
                "value": {
                    "text": "Seja bem-vindo ao Mande Seu Job",
                    "type": "image/jpeg",
                    "uri": "http://www.innovationiseverywhere.com/wp-content/uploads/2016/12/robot-customer-service.png"
                }
            },
            {
                "type": "application/vnd.lime.select+json",
                "value": {
                    "text": "Gostaria de Mandar o Seu Job?",
                    "options": [
                        {
                           
                            "text": "Sim"
                        },
                        {
                          
                            "text": "Não"
                        },
                        {
                          
                            "text": "Outros Assuntos"
                        }
                    ]
                }
            }           
        ]
    }
}
client.sendMessage(jobs);
});

client.addMessageReceiver(function(message){
    return message.content=="Sim"
},function (message) {
    var face ={
    "to": message.from,
    "type":"application/vnd.lime.select+json",
    "content":{
        "scope": "immediate",
        "text":"Qual o job que vocês precisa?",
        "options":[
            {
                "text": "Arte Para Post"
            },
            {
                "text": "Arte Para Display"
            },
            {
                "text": "Arte Para Cardápio"
            }
        ]
    }
}
client.sendMessage(face);
});
client.addMessageReceiver(function(message){
    return message.content=="Arte Para Post"
},function (message) {
    var artePost = 
    {
    "to": message.from,
    "type": "text/plain",
    "content": "Maravilha, escolheu Arte para Post, agora mande toda as informações para confecção do seu post! E envie FINALIZAR para fechar o pedido."
}
client.sendMessage(artePost);
});

client.addMessageReceiver(function(message){
    return message.content=="FINALIZAR"
}, function (message) {
    var jobs={
    "to": message.from,
    "type": "application/vnd.lime.collection+json",
    "content": {
        "itemType": "application/vnd.lime.container+json",
        "items": [
            {
                "type": "application/vnd.lime.media-link+json",
                "value": {
                    "text": "Thank You",
                    "type": "image/jpeg",
                    "uri": "https://y2krhyy3jn-flywheel.netdna-ssl.com/assets/thank-you-540x358.jpg"
                }
            },
            {
                "type": "application/vnd.lime.select+json",
                "value": {
                    "text": "Perfeito, recebi aqui o seu pedido,em breve retornaremos.Gostaria de mais alguma coisa?",
                    "options": [
                        {
                           
                            "text": "Sim, Gostaria de fazer mais um pedido!"
                        },
                        {
                          
                            "text": "Não, obrigado!"
                        }
                    ]
                }
            }           
        ]
    }
}
client.sendMessage(jobs);
});
client.addMessageReceiver(function(message){
    return message.content=="Não, obrigado!"
},function (message) {
    var artePost = 
    {
    "to": message.from,
    "type": "text/plain",
    "content": "Obrigado, e volte sempre!"
}
client.sendMessage(artePost);
});


client.connect()
    .then(function (session) {
        console.log('Bot Connectado =)');
    })
    .catch(function (err) {
        console.log(err);
    });