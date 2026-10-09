// src/lib/Website.js

class Designer {
  constructor() {
    this.images = [];
    this.media = [];
  }

  getImages() {
    this.images = ["placeholder", "placeholder"];
    return this.images;
  }

  getMedia() {
    this.media = [
      { id: 1, videoTitle: "Project 01", videoArtist: "Video Showcase 01", fileName: "video1" },
      { id: 2, videoTitle: "Project 02", videoArtist: "Video Showcase 02", fileName: "video2" },
      { id: 3, videoTitle: "Project 03", videoArtist: "Video Showcase 03", fileName: "video3" },
      { id: 4, videoTitle: "Project 04", videoArtist: "Video Showcase 04", fileName: "video4" },
      { id: 5, videoTitle: "Project 05", videoArtist: "Video Showcase 05", fileName: "video5" },
      { id: 6, videoTitle: "Project 06", videoArtist: "Video Showcase 06", fileName: "video6" },
      { id: 7, videoTitle: "Project 07", videoArtist: "Video Showcase 07", fileName: "video7" },
      { id: 8, videoTitle: "Project 08", videoArtist: "Video Showcase 08", fileName: "video8" },
    ];
    return this.media;
  }
}

class Gallery extends Designer {
  constructor() {
    super();
  }

  // Get Gallery (returning array of video data)
  getGallery() {
    return this.getMedia(); // Return media data directly as an array
  }
}

export default new Gallery();
