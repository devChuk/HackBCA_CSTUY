<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 3/22/14
 * Time: 9:50 PM
 */

?>

<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script src="http://static.opentok.com/webrtc/v2.0/js/TB.min.js" ></script>

</head>
<body>
<p>asfsadfsa</p>
<script type="text/javascript">
    var apiKey = "44704452";
    var sessionId = "1_MX40NDcwNDQ1Mn5-U2F0IE1hciAyMiAxNjo0ODozMCBQRFQgMjAxNH4wLjgwNjU5ODM3fg";
    var token = "T1==cGFydG5lcl9pZD00NDcwNDQ1MiZzZGtfdmVyc2lvbj10YnJ1YnktdGJyYi12MC45MS4yMDExLTAyLTE3JnNpZz1iZGIyMmE2NzkxYjE3ZWY1MzJjMWE3ZTU2MmMyOGVjY2IyNmUxYmU2OnJvbGU9c3Vic2NyaWJlciZzZXNzaW9uX2lkPTFfTVg0ME5EY3dORFExTW41LVUyRjBJRTFoY2lBeU1pQXhOam8wT0Rvek1DQlFSRlFnTWpBeE5INHdMamd3TmpVNU9ETTNmZyZjcmVhdGVfdGltZT0xMzk1NTMyMTQyJm5vbmNlPTAuODk0NjIyNjU5MDM3OTU4MiZleHBpcmVfdGltZT0xMzk1NTM1NjE2JmNvbm5lY3Rpb25fZGF0YT0=";

    function sessionConnectedHandler (event) {
        session.publish( publisher );
        subscribeToStreams(event.streams);
    }
    function subscribeToStreams(streams) {
        for (var i = 0; i < streams.length; i++) {
            var stream = streams[i];
            if (stream.connection.connectionId
                != session.connection.connectionId) {
                session.subscribe(stream);
            }
        }
    }
    function streamCreatedHandler(event) {
        subscribeToStreams(event.streams);
    }

    var publisher = TB.initPublisher(apiKey);
    var session   = TB.initSession(sessionId);

    session.connect(apiKey, token);
    session.addEventListener("sessionConnected",
        sessionConnectedHandler);

    session.addEventListener("streamCreated",
        streamCreatedHandler);
</script>
</body>
</html>