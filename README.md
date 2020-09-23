# FilebotSupportBot
Often times in the FileBot discord, users will come in asking for help. This bot will help ease the support effort, by providing commands, to supply answers to commonly asked questions

The following environment variables MUST be set:

CLIENT_TOKEN
PREFIX
FUZZY_MATCH_CUTOFF

CLIENT_TOKEN - this is your bot api token provided by discord
PREFIX - this is the command prefix, you would like your users to input
FUZZY_MATCH_CUTOFF - this is the stringSimilarity bestMatch rating, used to determine possible command matches, when an input command is not an exact match
