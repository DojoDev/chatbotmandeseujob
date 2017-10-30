
  

client.addMessageReceiver(function(message){
    return message.content=="cards";
}, function (message) {
   var cards={
    "to": message.from,
    "type": "application/vnd.lime.collection+json",
    "content": {
        "itemType": "application/vnd.lime.document-select+json",
        "items": [
            {
                "header": {
                    "type": "application/vnd.lime.media-link+json",
                    "value": {
                        "title": "Titulo",
                        "text": "Este é o primeiro item",
                        "type": "image/jpeg",
                        "uri": "http://www.isharearena.com/wp-content/uploads/2012/12/wallpaper-281049.jpg"
                    }
                },
                "options": [
                    {
                        "label": {
                            "type": "application/vnd.lime.web-link+json",
                            "value": {
                                "title": "Link",
                                "uri": "https://server.com/first/link1"
                            }
                        }
                    },
                    {
                        "label": {
                            "type": "text/plain",
                            "value": "Texto 1"
                        },
                        "value": {
                            "type": "application/json",
                            "value": {
                                "key1": "value1",
                                "key2": 2
                            }
                        }
                    }
                ]
            },
            {
                "header": {
                    "type": "application/vnd.lime.media-link+json",
                    "value": {
                        "title": "Titulo 2",
                        "text": "Este é outro item",
                        "type": "image/jpeg",
                        "uri": "http://www.freedigitalphotos.net/images/img/homepage/87357.jpg"
                    }
                },
                "options": [
                    {
                        "label": {
                            "type": "application/vnd.lime.web-link+json",
                            "value": {
                                "title": "Segundo link",
                                "text": "Weblink",
                                "uri": "https://server.com/second/link2"
                            }
                        }
                    },
                    {
                        "label": {
                            "type": "text/plain",
                            "value": "Segundo texto"
                        },
                        "value": {
                            "type": "application/json",
                            "value": {
                                "key3": "value3",
                                "key4": 4
                            }
                        }
                    },
                    {
                        "label": {
                            "type": "text/plain",
                            "value": "Mais um texto"
                        },
                        "value": {
                            "type": "application/json",
                            "value": {
                                "key5": "value5",
                                "key6": 6
                            }
                        }
                    }
                ]
            }
        ]
    }
}
client.sendMessage(cards);
});

client.addMessageReceiver(function(message){
    return message.content=="face";
}, function (message) {
    var face ={
    "to": message.from,
    "type":"application/vnd.lime.select+json",
    "content":{
        "scope": "immediate",
        "text":"Escolha uma das opções do quick reply:",
        "options":[
            {
                "text": "Sim"
            },
            {
                "text": "Não"
            },
            {
                "text": "Mais informações"
            }
        ]
    }
}
client.sendMessage(face);
});


client.addMessageReceiver(function(message){
    return message.content=="Sim";
}, function (message) {
    var clientLog = message.from;
    var produtos={
    "to": message.from,
    "type": "application/vnd.lime.collection+json",
    "content": {
        "itemType": "application/vnd.lime.container+json",
        "items": [
            {
                "type": "application/vnd.lime.media-link+json",
                "value": {
                    "text": "Seja bem-vindo $clientLog a nossa loja!",
                    "type": "image/jpeg",
                    "uri": "https://i.pinimg.com/originals/25/e4/a8/25e4a8ce04bcda36e132cc058e0162bf.jpg"
                }
            },
            {
                "type": "application/vnd.lime.select+json",
                "value": {
                    "text": "Escolha o que deseja fazer",
                    "options": [
                        {
                           
                            "text": "Ver nosso estoque"
                        },
                        {
                          
                            "text": "Acompanhar um pedido"
                        }
                    ]
                }
            }           
        ]
    }
}
client.sendMessage(produtos);
});

client.addMessageReceiver(function(message){
    return message.content=="Ver nosso estoque";
}, function (message) {
    var feedBack = {
    "to": message.from,
    "type": "application/vnd.lime.web-link+json",
    "content": { 
        "uri": "http://devacademy.com.br",
        "target": "self",
        "text": "Segue o link para acessar seu estoque,posso ajudar em algo mais"       
    }
}
client.sendMessage(feedBack);
});

client.addMessageReceiver(function(message){
    return message.content=="bom dia";
}, function (message) {
    var hello ={
    "to": message.from,
    "type": "application/vnd.lime.input+json",
    "content": {
        "label": {
          "type": "text/plain",
          "value": "Olá " +message.fullName
        },
        "validation": {
          "rule": "text"         
        }
    }
}
client.sendMessage(hello);
});

client.addMessageReceiver(function(message){
return message.content=="jobs";
}, function (message) {
    var job = {
    "to": message.from,
    "type": "application/vnd.lime.document-select+json",
    "content": {
        "header": {
            "type": "application/vnd.lime.media-link+json",
            "value": {
                "title": "Seja bem-vindo ao Chapeleiro Maluco",
                "text": "Aqui temos o melhor chapéu para sua cabeça.",
                "type": "image/jpeg",
                "uri": "http://petersapparel.parseapp.com/img/item100-thumb.png",
                "aspectRatio": "1:1"
            }
        },
        "options": [
            {
                "label": {
                    "type": "application/vnd.lime.web-link+json",
                    "value": {
                        "text": "Visitar site",
                        "uri": "https://petersapparel.parseapp.com/view_item?item_id=100"
                    }
                }
            },
            {
                "label": {
                    "type": "text/plain",
                    "value": "Ver estoque"
                },
                "value": {
                    "type": "application/json",
                    "value": {
                        "action": "show-items"
                    }
                }
            }
        ]
    }
}
client.sendMessage(job);
});


client.addMessageReceiver(function (message){
    return message.content=="gato";

},function (message) {
    var cat = {
    "to": message.from,
    "type": "application/vnd.lime.media-link+json",
    "content": {
        "title": "Gato",
        "text": "Segue uma imagem de um gato",
        "type": "image/jpeg",
        "uri": "http://2.bp.blogspot.com/-pATX0YgNSFs/VP-82AQKcuI/AAAAAAAALSU/Vet9e7Qsjjw/s1600/Cat-hd-wallpapers.jpg",
        "aspectRatio": "1:1",
        "size": 227791,        
        "previewUri": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8qkelB28RstsNxLi7gbrwCLsBVmobPjb5IrwKJSuqSnGX4IzX",
        "previewType": "image/jpeg"
    }
}
 client.sendMessage(cat);
});

client.addMessageReceiver(function(message){
 return message.content=="amor";
},function (message) {
    var msg = {   type: "text/plain", 
                  content: "Amor te amo muito, vou morrer de saudades de vocês, Saudades da Maisa e naomy Também.", 
                  to: message.from, 
                  id: Lime.Guid()
              };
   client.sendMessage(msg);
});

client.addMessageReceiver(function(message){
    return message.content=="curso gratuito";

}, function (message) {
    var linkmessage = 
    {

    "to": message.from,
    "type": "application/vnd.lime.web-link+json",
    "content": { 
        "uri": "http://devacademy.com.br",
        "target": "self",
        "text": "Segue o link dos cursos online gratuitos"        
    }
}
client.sendMessage(linkmessage);
});


client.addMessageReceiver(function(message){
    return message.content =='ola'

},function (message) {
      var msg = { type: "text/plain", 
                  content: "Olá seja bem-vindo ao nosso chatbot!", 
                  to: message.from, 
                  id: Lime.Guid()}
                  ;
client.sendMessage(msg);
});
