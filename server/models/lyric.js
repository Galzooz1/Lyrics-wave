const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LyricSchema = new Schema({
    content: { type: String },
    likes: { type: Number, default: 0 },
    usersLike: [{
        type: Schema.Types.ObjectId,
        ref:'user'
    }],
    dislikes: { type: Number, default: 0 },
    usersDislike: [{
        type: Schema.Types.ObjectId,
        ref:'user'
    }],
    song: {
        type: Schema.Types.ObjectId,
        ref:'song'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
})

mongoose.model('lyric', LyricSchema);