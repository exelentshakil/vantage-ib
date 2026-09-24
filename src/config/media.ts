/**
 * Auto-generated Media Assets from Pexels API
 * Project: vantage-ib
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "210437",
    "url": "https://images.pexels.com/photos/210437/pexels-photo-210437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Dramatic low-angle view of a modern skyscraper reflecting clouds, captured in monochrome.",
    "avg_color": "#6E6E6E"
},
  editorialPhotos: [
    {
    "id": "13718410",
    "url": "https://images.pexels.com/photos/13718410/pexels-photo-13718410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Dramatic view of futuristic skyscrapers and modern architecture in Dubai.",
    "avg_color": "#616F7A"
},
    {
    "id": "221489",
    "url": "https://images.pexels.com/photos/221489/pexels-photo-221489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "A striking low angle architectural perspective showcasing sleek lines and curves with a modern design.",
    "avg_color": "#8B7566"
},
    {
    "id": "39471483",
    "url": "https://images.pexels.com/photos/39471483/pexels-photo-39471483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Black and white photo of a sleek architectural design in Seoul showcasing geometry and elegance.",
    "avg_color": "#999999"
}
  ],
  ambientVideo: {
    "id": "17599632",
    "videoUrl": "https://videos.pexels.com/video-files/17599632/17599632-hd_1280_720_30fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/17599632/3d-arcadian-cgi-digital-17599632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 1280,
    "height": 720
}
};
