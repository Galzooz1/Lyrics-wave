const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    title: { type: String },
    likes: { type: Number },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    // lyrics: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'lyric'
    // }]
})

// SongSchema.statics.like = function(id) {
//     const Song = mongoose.model('song');

//     return Song
// }

// SongSchema.statics.findUser = async function(id) {
//     return await this.findById(id)
//       .populate('user')
//       .then(song => song.user);
//   }
  

mongoose.model('song', SongSchema);
