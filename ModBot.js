
//Following code block logs the bot into its added servers.
const Discord = require('discord.js')
const client = new Discord.Client()

//Includes json file with tokens
const fs = require('fs') //fs is a native module
let rawdata = fs.readFileSync('config.json');
let tokenObj= JSON.parse(rawdata); //turns the data into a JavaScript object called "tokenObj"

// Get bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on application -> Bot -> Token -> "Click to Reveal Token"
client.login(tokenObj.botSecretKey) //bot login Discord

	
//includes AdminTools.js file
var AdminTools = require('./AdminTools.js') 
//includes ChannelToolsjs
var ChannelTools = require('./ChannelTools.js') 
//includes ReactiveTools.js
var ReactiveTools = require('./ReactiveTools.js')
//includes httprequest.js
var httprequest = require('./httprequest.js')

//console.log(AdminTools) //prints list of functions in that object





//bot takes action uppon connection using client.on('ready') event
//The following block is for developers information
client.on('ready',() => {
	console.log("Connected as " + client.user.tag)
	AdminTools.AdminToolsMethods.listBotServers(client) //shows list of servers bot is connected to
	AdminTools.AdminToolsMethods.listServerChannels(client) //shows list of channels bot is connected to
}) //end client.on ready event


client.on('message',(receivedMessage) => {
	//The following commented line shows the full structured data of the message
	//console.log(receivedMessage)
	//console.log(receivedMessage.channel.id)

	var messageContent = receivedMessage.content
	const prefix = "!"; //prefix cannot be changed

	//Prevent bot from responding to itself by returning nothing
	if (receivedMessage.author === client.user) {
		return 
	}
	else {
	    //checks if !help command is printed
		if ( receivedMessage.content.includes(prefix + "help") || receivedMessage.content.includes (prefix + "Help") ) {
			ReactiveTools.CommandsMethods.helpCommand(receivedMessage)
		}
		//checks if !pepe command is printed
		else if (  receivedMessage.content.startsWith(prefix + "pepe") || receivedMessage.content.startsWith(prefix + "Pepe") )  {
			ReactiveTools.CommandsMethods.pepeCommand( receivedMessage, client, receivedMessage.channel.id, "https://ih1.redbubble.net/image.409410989.4197/flat,750x1000,075,t.u1.jpg", Discord )
			//receivedMessage.channel.id
		}
		//checks if URL is safe using virustotal.com API
		else {
			
		}
		// else if ( receivedMessage.content.includes(".com") || receivedMessage.content.includes(".org") ) {
		// 	httprequest.POSTRequest.req.write()
		
		// }
		
	}


}) // end client.on message even









