var Bcrypt = require('bcrypt');
const cookieAuth = require('hapi-auth-cookie');
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
// ---------------------------------------
// simplified

let password = 'whatever'

var hash = Bcrypt.hashSync(`${password}`, 10);


let one = Bcrypt.compareSync("whatever", hash); // true
let two = Bcrypt.compareSync("everwhat", hash); // false

console.log('one: ', one, 'two: ', two);
