const mongoose = require('mongoose');
const { SongSchema } = require('../models/song');
const { UserSchema } = require('../models/user');
const User = mongoose.model('user', UserSchema);
const Song = mongoose.model('song', SongSchema);

exports.getSongs = async() => {
    try {
        const songs = await Song.find({});
        return songs;
    } catch (err) {
        console.log(err);
    }
}

exports.getSong = async(id) => {
    try {
        const song = await Song.findById(id);
        return song;
    } catch (err) {
        console.log(err);
    }
}

exports.addSong = async(args, req) => {
    try {
        if(!req.user) {
            throw new Error('You must login to add song');
        }
        return await User.findById(req.user)
                .then(user => {
                    const song = new Song(args)
                    song.likes = 0;
                    song.user = user;
                    user.songs.push(song);
                    user.save();
                    const newSong = song.save();
                    return newSong;
                })
    } catch (err) {
        console.log(err)
    }
}

exports.deleteSong = async(args, req) => {
    try {
        const id = args.id;
        if(id) {
            const currentSong = await this.getSong(id);
            if(!currentSong){
                return new Error('Song not found');
            }
            if(!req.user) {
                return new Error('You must login to delete song');
            }
            if(String(req.user._id) !== String(currentSong.user._id)){
                return new Error('You must login to delete song');
            }
            const song = await Song.deleteOne({ _id: id });
            return song;
        }
    } catch (err) {
        console.log(err);
    }
}