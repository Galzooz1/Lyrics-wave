const mongoose = require('mongoose');
const { SongSchema } = require('../models/song');
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

exports.addSong = async(req) => {
    try {
        const song = new Song(req);
        const newSong = await song.save();
        return newSong;
    } catch (err) {
        console.log(err)
    }
}