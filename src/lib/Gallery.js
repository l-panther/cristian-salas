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
      { id: 1, videoTitle: "Example 1", videoArtist: "video1", fileName: "video1" },
      { id: 2, videoTitle: "Example 2", videoArtist: "video2", fileName: "video2" },
      { id: 3, videoTitle: "Example 3", videoArtist: "video3", fileName: "video3" },
      { id: 4, videoTitle: "Example 4", videoArtist: "video4", fileName: "video4" },
      { id: 5, videoTitle: "Example 5", videoArtist: "video5", fileName: "video5" },
      { id: 6, videoTitle: "Example 6", videoArtist: "video6", fileName: "video6" },
      { id: 7, videoTitle: "Example 7", videoArtist: "video7", fileName: "video7" },
      { id: 8, videoTitle: "Example 8", videoArtist: "video8", fileName: "video8" },
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