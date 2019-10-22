let myYouTubeVideo = {
    title: 'My Video Title',
    videoLength: 15,
    desc: 'This is my video description'
}

console.log(myYouTubeVideo);
console.log(myYouTubeVideo.title);
console.log(myYouTubeVideo.videoLength);

//Assignment
myYouTubeVideo.title = 'My New Title'
console.log(myYouTubeVideo.title);

let changeVideoLength = function (myObject){
    //console.log(`Time of this video is ${myObject.videoLength}`);
    myObject.videoLength += 2;
    return {
        'A': `Time of this video is Changed to ${myObject.videoLength}`,
        'B': "Hello"
    }
}

let a = changeVideoLength(myYouTubeVideo);
console.log(a)