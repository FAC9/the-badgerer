var Bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
var pass = 'test_password';

Bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) {
                return console.error(err);
        }
        console.log(salt);
        Bcrypt.hash(pass, salt, function(err, hash) {
                if(err) {
                        return console.error(err);
                }
                console.log('salt',salt);
                console.log(pass);
                console.log(hash);

                Bcrypt.compare(pass, hash, function(err, isMatch) {
                        if(err) {
                                return console.error(err);
                        }

                        console.log('do they match?', isMatch);
                });

        });
})
