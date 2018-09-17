//The class is used for back end devs
	
var AdminToolsMethods = {

	//This function prints a list of servers the bot is connected to
	listBotServers: function(theClientObj) {
		console.log("Servers:")
	    theClientObj.guilds.forEach((guild) => {
			console.log(" - " + guild.name)
		})
	}, // end listBotServers() method

	listServerChannels: function(theClientObj) {
		console.log("Channels:")
		theClientObj.channels.forEach((channel) => {
			console.log(` - ${channel.name} (${channel.type}) - ${channel.id}`)
			
		})
	}//end listServerChannels() method

};//end AdminToolsMethods object


exports.AdminToolsMethods = AdminToolsMethods //need this so we can use this object's functions in other files