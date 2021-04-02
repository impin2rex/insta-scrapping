const fetch = require("request-promise");
const cheerio = require("cheerio");

(async () => {
  const USERNAME = "impin2rex";
  const BASE_URL = `https://www.instagram.com/${USERNAME}/`;
  const response = await fetch(BASE_URL, {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "accept-encoding": "gzip, deflate, br",
    "accept-language":
      "en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3",
    "cache-control": "max-age=0",
    "upgrade-insecure-requests": "1",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
  });
  /* Initiate Cheerio with the response */
  let $ = cheerio.load(response);

  /* Get the proper script of the html page which contains the json */
  let script = $("script").eq(4).html();

  /* Traverse through the JSON of instagram response */
  let {
    entry_data: {
      ProfilePage: {
        [0]: {
          graphql: { user },
        },
      },
    },
  } = JSON.parse(/window\._sharedData = (.+);/g.exec(script)[1]);

  /* Output the data */
  // console.log(user);

  const instaProfileDetails = {
    fullName: user.full_name,
    username: user.username,
    instaId: user.id,
    fbId: user.fbid,
    bio: user.biography,
    isPrivate: user.is_private,
    isVerified: user.is_verified,
    profileImage: user.profile_pic_url_hd,
    catagory: user.catagory_name,
    website: user.external_url,
    hasChannel: user.has_channel,
    followers: user.edge_followed_by,
    following: user.edge_follow,
    img: user.edge_owner_to_timeline_media.edges[0], // To check image response
    images: {
      shortcode: user.edge_owner_to_timeline_media.edges.map((x) => x.node.shortcode),
      thumbnail: user.edge_owner_to_timeline_media.edges.map((x) => x.node.thumbnail_src),
      uploadedAt: user.edge_owner_to_timeline_media.edges.map((x) => x.node.taken_at_timestamp),
      likes: user.edge_owner_to_timeline_media.edges.map((x) => x.node.edge_liked_by.count)
    }
}
console.log(instaProfileDetails);
})();

