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
      { id: 1, videoTitle: "Title 1", videoArtist: "Artist 1", fileName: "video1" },
      { id: 2, videoTitle: "Title 2", videoArtist: "Artist 2", fileName: "video2" },
      { id: 3, videoTitle: "Title 3", videoArtist: "Artist 3", fileName: "video3" },
      { id: 4, videoTitle: "Title 4", videoArtist: "Artist 4", fileName: "video4" },
      { id: 5, videoTitle: "Title 5", videoArtist: "Artist 5", fileName: "video5" },
      { id: 6, videoTitle: "Title 6", videoArtist: "Artist 6", fileName: "video6" },
      { id: 7, videoTitle: "Title 7", videoArtist: "Artist 7", fileName: "video7" },
      { id: 8, videoTitle: "Title 8", videoArtist: "Artist 8", fileName: "video8" },
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
