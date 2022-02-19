const mongoose = require('mongoose');
const { SongSchema } = require('../models/song');
const { UserSchema } = require('../models/user');
const { LyricSchema } = require('../models/lyric');
const User = mongoose.model('user', UserSchema);
const Song = mongoose.model('song', SongSchema);
const Lyric = mongoose.model('lyric', LyricSchema);

exports.getLyrics = async () => {
    try {
        const lyrics = await Lyric.find({});
        return lyrics;
    } catch (err) {
        console.log(err);
        return new Error('There was a problem');
    }
}

exports.getLyric = async (id) => {
    try {
        const lyric = await Lyric.findById(id);
        return lyric;
    } catch (err) {
        console.log(err);
        return new Error('There was a problem');
    }
}

exports.addLyric = async(args, req) => {
    try {
        if (!req.user) {
            return new Error('You must login to add lyric');
        }
        const lyric = new Lyric(args)
        return await User.findById(req.user)
            .then(async user => {
                lyric.user = user;
                user.lyrics.push(lyric);
                user.save();
                try {
                    const song = await Song.findById(args.songId);
                    song.lyrics.push(lyric);
                    song.save();
                    lyric.song = song;
                    return await lyric.save();
                } catch (err) {
                    console.log(err);
                    return new Error('song not found');
                }
                })
    } catch (err) {
        console.log(err)
        return new Error('There was a problem');
    }
}