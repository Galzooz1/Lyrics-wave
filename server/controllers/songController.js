const mongoose = require('mongoose');
const { SongSchema } = require('../models/song');
const { getUser } = require('./userController');
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
        const song = new Song(args);
        song.user = req.user;
        const newSong = await song.save();
        return newSong;
    } catch (err) {
        console.log(err)
    }
}

exports.deleteSong = async(id, userid, req) => {
    try {
        if(id) {
            console.log(userid)
            console.log(id)
            if(req.user._id !== userid){
                throw new Error('You must login to delete song');
            }
            if(!req.user) {
                throw new Error('You must login to delete song');
            }
            const song = await Song.findByIdAndRemove(id);
            return song;
        }
    } catch (err) {
        
    }
}