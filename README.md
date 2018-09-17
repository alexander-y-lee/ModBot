# ModBot

Modbot contains features to help moderate a channel, such as enabling commands and virus scanning. Code is written with JavaScript/Node.js. 

# How to Use

1. Create config.json file with bot token API key
2. Install node.js and discord.js (npm install discord.js)
3. Run Modbot in node (node Modbot.js)

# File Contents

Modbot.js
-Contains main class that calls methods of other classes. Master contains login function to discord server. Contains listener function for events, such as messages

ReactiveTools.js
-Contains prefix of "!" command methods upon receiving such messages

AdminTools.js
-Contains debugging methods for administrator

ChannelTools.js
-Contains methods for bot to communicate in the channel

httprequest.js
-Contains REST methods (POST,GET, etc) for bot to communicate via HTTP

Please note, config.json file is not included in repository. This file should contain necessary API keys for ModBot to function, and connect to Discord servers/channels. 

Please do NOT share your API keys with others.
