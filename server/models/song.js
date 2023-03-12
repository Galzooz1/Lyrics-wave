const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    date: { type: Date, default: Date.now},
    title: { type: String },
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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    lyrics: [{
        type: Schema.Types.ObjectId,
        ref: 'lyric'
    }]
})


mongoose.model('song', SongSchema);
