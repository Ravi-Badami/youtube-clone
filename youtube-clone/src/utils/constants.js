const YOUR_API_KEY = "AIzaSyC6SHt52AcjoycmEmOhx5Xz5CmZ4PGI_00";

export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUR_API_KEY;

export const SEARCH_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
