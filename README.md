# ModBot


Please note, config.json file is not included in repository. This file should contain necessary API keys for ModBot to function, and connect to Discord servers/channels.



Modbot.js
-Contains main class that calls methods of other classes
-Contains login function to discord server
-Contains listener function for events, such as messages

ReactiveTools.js
-Contains prefix of "!" command methods upon receiving such messages

AdminTools.js
-Contains debugging methods for administrator

ChannelTools.js
-Contains methods for bot to communicate in the channel

htttprequest.js
-Contains REST methods (POST,GET, etc) for bot to communicate via HTTP
