/**
 * Created by Guanyu on 7/5/2016.
 */


module.exports = {
    getAllIOs: function() {
        return [
            'sendMessage'
        ];
    },

    sendMessage: function(socket, msg) {
        socket.emit('broadcastMessage', "Sent");
        socket.in("room1").emit('broadcastMessage', msg);
    }
};