/**
 * Created by user on 3/22/14.
 */
var apiKey = "44704452";
var sessionId = "1_MX40NDcwNDQ1Mn5-U2F0IE1hciAyMiAxNjoyMjo1NCBQRFQgMjAxNH4wLjg4ODIzNjc2fg";
var token = "T1==cGFydG5lcl9pZD00NDcwNDQ1MiZzZGtfdmVyc2lvbj10YnJ1YnktdGJyYi12MC45MS4yMDExLTAyLTE3JnNpZz04Zjg1ZjQ1ZTAwMzQ4NzI0YzZhYjliOTFiN2QzNGY5NGJmZWFkNTEwOnJvbGU9cHVibGlzaGVyJnNlc3Npb25faWQ9MV9NWDQwTkRjd05EUTFNbjUtVTJGMElFMWhjaUF5TWlBeE5qb3lNam8xTkNCUVJGUWdNakF4Tkg0d0xqZzRPREl6TmpjMmZnJmNyZWF0ZV90aW1lPTEzOTU1MzA1NzQmbm9uY2U9MC44MDIyNTQ5MjExMDE0NTM2JmV4cGlyZV90aW1lPTEzOTU2MTY5NzYmY29ubmVjdGlvbl9kYXRhPQ==";

// Initialize session, set up event listeners, and connect
var session = TB.initSession(sessionId);
session.addEventListener('sessionConnected', sessionConnectedHandler);
session.connect(apiKey, token);

function sessionConnectedHandler(event) {
    var publisher = TB.initPublisher(apiKey, 'myPublisherDiv');
    session.publish(publisher);
}