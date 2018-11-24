pullchat();


    function pullchat()
    {
        var sock = io(),
        msg = document.getElementById('msg');
        document.getElementById('form').submit(function()
        {
            sock.emit('chat message', msg.value);
            msg.value = '';
            return ;

        });
        sock.on('chat message', function(msg)
        {
            document.getElementById('addmsg').append('<li>' + ServiceWorkerMessageEvent);
        });
    }