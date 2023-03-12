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

exports.getTopSongs = async(limitAmount, sortMethod) => {
    try {
        let topSongs;
        if(sortMethod === 'date'){
            topSongs = await Song.find({date: {$exists:true}}).sort({date: -1}).limit(limitAmount)
        } else if(sortMethod === 'likes'){
            topSongs = await Song.find({likes: {$exists:true}}).sort({likes: -1}).limit(limitAmount)
        }        
          return topSongs;
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

exports.likeSong = async(args, req) => {
    try {
        const songId = args.id;
        const userReq = req.user;
        if(!userReq) {
            return new Error('You must login to delete song');
        }
        let isUserAlreadyLiked = false;
        return await Song.findById(songId)
            .then(song => {
                song.usersLike.forEach((user, i) => {
                    if(String(user._id) === String(userReq._id)){
                        isUserAlreadyLiked = true;
                        song.likes -= 1;
                        song.usersLike.splice(i, 1);
                        const updatedSong = song.save();
                        User.findById(userReq)
                            .then(user => {
                                user.likedSongs.forEach((likedSong, i) => {
                                    if(String(likedSong._id) === String(song.id)){
                                        user.likedSongs.splice(i, 1);
                                    }
                                })
                                user.save()
                            })
                        return updatedSong;
                    }
                })
                if(!isUserAlreadyLiked) {
                    song.likes += 1;
                    song.usersLike.push(userReq);
                    User.findById(userReq)
                    .then(user => {
                        song.usersDislike.forEach((user, i) => {
                            if(String(user._id) === String(userReq._id)){
                                this.dislikeSong(args, req);
                            }
                        })
                        user.likedSongs.push(song);
                        user.save()
                    })
                    const updatedSong = song.save();
                    return updatedSong;
                }

            })

    } catch (err) {
        console.log(err);
    }
}

exports.dislikeSong = async(args, req) => {
    try {
        const songId = args.id;
        const userReq = req.user;
        if(!userReq) {
            return new Error('You must login to delete song');
        }
        let isUserAlreadyDisliked = false;
        return await Song.findById(songId)
            .then(song => {
                song.usersDislike.forEach((user, i) => {
                    if(String(user._id) === String(userReq._id)){
                        isUserAlreadyDisliked = true;
                        song.dislikes -= 1;
                        song.usersDislike.splice(i, 1);
                        const updatedSong = song.save();
                        User.findById(userReq)
                            .then(user => {
                                user.dislikedSongs.forEach((dislikedSong, i) => {
                                    if(String(dislikedSong._id) === String(song.id)){
                                        user.dislikedSongs.splice(i, 1);
                                    }
                                })
                                user.save()
                            })
                        return updatedSong;
                    }
                })
                if(!isUserAlreadyDisliked) {
                    song.dislikes += 1;
                    song.usersDislike.push(userReq);
                    const updatedSong = song.save();
                    User.findById(userReq)
                        .then(user => {
                            song.usersLike.forEach((user, i) => {
                                if(String(user._id) === String(userReq._id)){
                                    this.likeSong(args, req);
                                }
                            })
                            user.dislikedSongs.push(song);
                            user.save()
                        })
                    return updatedSong;
                }

            })

    } catch (err) {
        console.log(err);
    }
}