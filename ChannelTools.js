//This class is used for front end clients

var ChannelToolsMethods = {


    //Prints a string in the channel
	OutputString: function(theClientObj, channelID) {
		var theChannel = theClientObj.channels.get(channelID)
		theChannel.send("Testing string output...")

	}, // end OutputString function

	//Prints an image from URL
	OutputImage: function(receivedMessage, theClientObj, channelID, URLorDIR, DiscordObj) {
		var theChannel = theClientObj.channels.get(channelID)
		const Image = new DiscordObj.Attachment(URLorDIR)
		theChannel.send(receivedMessage.author, Image)
	}



}; //end ChannelToolsMethods object





exports.ChannelToolsMethods = ChannelToolsMethods //need this so we can use this object's functions in other files