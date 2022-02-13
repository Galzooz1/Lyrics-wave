const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    title: { type: String },
    likes: { type: Number },
    user: {
        id: String,
        nickname: String
    }
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'user',
    // },
    // lyrics: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'lyric'
    // }]
})

// SongSchema.statics.like = function(id) {
//     const Song = mongoose.model('song');

//     return Song
// }

mongoose.model('song', SongSchema);
