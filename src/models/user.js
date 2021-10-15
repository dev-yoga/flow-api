import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { genSalt, hash, compare } = bcrypt;

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.pre('save', function(next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        genSalt(10).then((salt) => {
            hash(user.password, salt).then((pw_hash) => {
                user.password = pw_hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function(password, next) {
    compare(password, this.password).then((isMatch) => {
        next(null, isMatch);
    });
};

export default mongoose.model('User', UserSchema);

