//This class is used for reactive actions of bots to various events

//Includes json file with tokens
const fs = require('fs') //fs is a native module
let rawdata = fs.readFileSync('config.json');
let tokenObj= JSON.parse(rawdata); //turns the data into a JavaScript object called "tokenObj"



var ChannelTools = require('./ChannelTools.js') 

var CommandsMethods = {


	helpCommand: function(receivedMessage) {

		receivedMessage.channel.send(receivedMessage.author + ", here is a list of commands you can call upon: ")

			receivedMessage.channel.send("!help \n!pepe")
	},

	pepeCommand: function(receivedMessage, theClientObj, channelID, URLorDIR, DiscordObj) {
		receivedMessage.channel.send( ChannelTools.ChannelToolsMethods.OutputImage(receivedMessage, theClientObj, channelID, URLorDIR, DiscordObj) )
	}

}; //end CommandsMethods


var ScanMethods = {

	virusTotalScan: function() {



		// let params = {"api" : tokenObj.virusTotalSecretKey, "url" : receivedMessage.content}

		// console.log( request.post(params) )


	} //end virusTotalScan function
};





exports.CommandsMethods = CommandsMethods
exports.ScanMethods = ScanMethods