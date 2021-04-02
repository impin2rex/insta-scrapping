# Instagram-Scrapper
## _Using Cheerio and instagram GhaphQL_

[![impin2rex|workwithme](https://workwithme.in/assets/images/favicon.svg)](https://workwithme.in/)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/impin2rex)

This is a simple instagram scrapper using cheerio and request-promise by targeting instagram public data DB GraphQL.
NodeJS-powered API.

- Put username on scrapper.js
- Get response containg profile detals.
- ✨Magic ✨

## Features

- Get all public data of a profile if the profile isn't private.
- Get MAX 12 images of a profile.

Cheerio parses markup and provides an API for traversing/manipulating the resulting data structure. It does not interpret the result as a web browser does. Specifically, it does not produce a visual rendering, apply CSS, load external resources, or execute JavaScript.
Here you can checkout [cheerio].

> Note: You can't check private profile data using this code.

## Used

Insta-Scrapper uses a number of open source projects to work properly:

- [Cheerio] - Fast, flexible & lean implementation of core jQuery designed specifically for the server.
- [node.js] - Run the backend.
- [request-promise] - The simplified HTTP request client 'request' with Promise support. Powered by Bluebird.
- [nodemon] - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

You can send pull request from [git-repo-url].
 on GitHub.

## Installation

Scarpper requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
npm install insta-scrap --save
```

## Usage

```sh
const instascrap = require("insta-scrap");
const USERNAME = "charlieputh"; // Instagram profile username
(async() => {
    const profile = await instascrap(USERNAME);
    console.log(profile);
})();
```

## Response
```sh
{
  fullName: 'Charlie Puth',
  username: 'charlieputh',
  instaId: '7555881',
  fbId: '17841400116430118',
  bio: '',
  isPrivate: false,
  isVerified: true,
  profileImage: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-19/s320x320/166201623_877144016192818_6168422840401155348_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_ohc=se-SpIjp_0oAX87yXlb&edm=ABfd0MgAAAAA&ccb=7-4&oh=0b46d64cf9ca1e01bf53642cdbd398a4&oe=608B761E&_nc_sid=7bff83',
  catagory: undefined,
  website: null,
  hasChannel: false,
  followers: { count: 15317093 },
  following: { count: 271 },
  images: [
    {
      __typename: 'GraphVideo',
      id: '2540896407189390781',
      shortcode: 'CNDE9HxlwW9',
      dimensions: [Object],
      display_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/e35/167544600_1432912233710253_1544826733989511464_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=TOSqvdsbIvQAX9u5z-l&edm=ABfd0MgAAAAA&ccb=7-4&oh=8128d9ce58f1d1ce6f85619396c1c8b5&oe=6068F02A&_nc_sid=7bff83',
      edge_media_to_tagged_user: [Object],
      fact_check_overall_rating: null,
      fact_check_information: null,
      gating_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: 'ACoqyMlavRX+1NjgOO2e1VZFquBmkMcW5puacFpMUxDc0uDS4pwoAnkIPI79f/re1VxVqaIx8sQATj/GpLy2jgRXRid5xzj0z2FSMqqMnAp7RlTzViGOIrv5bJ2/MMc9yMH8s099nHmbh2BAznJ9M9KLlculyskYIyfwq6JZf7//AI6v+FVQRzjpT8mgkWdGmYEAgDsePyokhkMYXrjHU5/Grj05/uigCisbIg7dQVxkU8QE/N1wcDPUen+e3SrA6U/P86QzPW3kzxil+yye351fFGTTEf/Z',
      owner: [Object],
      is_video: true,
      accessibility_caption: null,
      dash_info: [Object],
      has_audio: true,
      tracking_token: 'eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiNDJmODIzNGJkN2E4NDYxMjhiNWMyM2Y2NjAxODQ3ZDMyNTQwODk2NDA3MTg5MzkwNzgxIn0sInNpZ25hdHVyZSI6IiJ9',
      video_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t50.2886-16/166358699_1142774829496161_5012851468825918443_n.mp4?_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=LrnlMeQdTBMAX_zXad0&edm=ABfd0MgAAAAA&ccb=7-4&oe=6068D499&oh=9a6e2d580756486928783509a422ba58&_nc_sid=7bff83',
      video_view_count: 1023516,
      edge_media_to_caption: [Object],
      edge_media_to_comment: [Object],
      comments_disabled: false,
      taken_at_timestamp: 1617118556,
      edge_liked_by: [Object],
      edge_media_preview_like: [Object],
      location: null,
      thumbnail_src: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/167544600_1432912233710253_1544826733989511464_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=TOSqvdsbIvQAX9u5z-l&edm=ABfd0MgAAAAA&ccb=7-4&oh=6fb113586d4e78ea0a4ad5593ea6a8f3&oe=6068D831&_nc_sid=7bff83',
      thumbnail_resources: [Array],
      felix_profile_grid_crop: null,
      product_type: 'feed',
      clips_music_attribution_info: null
    },
    {
      __typename: 'GraphVideo',
      id: '2539423451711912442',
      shortcode: 'CM92CzFlbn6',
      dimensions: [Object],
      display_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/e35/165104725_821413028449091_5801909520846720783_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=kkfMsjadZwwAX8fqVpi&edm=ABfd0MgAAAAA&ccb=7-4&oh=329927acb27e494b6790a5bbf79e470f&oe=60692843&_nc_sid=7bff83',
      edge_media_to_tagged_user: [Object],
      fact_check_overall_rating: null,
      fact_check_information: null,
      gating_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: 'ACEq2mjDHJ3D6Hinkkdifpj/ABp1FIY0EnsR+X+NLilopiEopaKACiignFIAopqNuAPcgGnUAFFFFABVdyQee3P9KsUyX7p/z3oAhXIOB9P++ef61ZHvTE7/AO8afQAUUUUAf//Z',
      owner: [Object],
      is_video: true,
      accessibility_caption: null,
      dash_info: [Object],
      has_audio: true,
      tracking_token: 'eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiNDJmODIzNGJkN2E4NDYxMjhiNWMyM2Y2NjAxODQ3ZDMyNTM5NDIzNDUxNzExOTEyNDQyIn0sInNpZ25hdHVyZSI6IiJ9',
      video_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t50.2886-16/166017520_708290613200728_1121012978109661921_n.mp4?_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=O8bFE-fTXysAX88iZ6B&edm=ABfd0MgAAAAA&ccb=7-4&oe=60692A0D&oh=6f3fb44d8a649c837ae118988f8e854a&_nc_sid=7bff83',
      video_view_count: 767351,
      edge_media_to_caption: [Object],
      edge_media_to_comment: [Object],
      comments_disabled: false,
      taken_at_timestamp: 1616942944,
      edge_liked_by: [Object],
      edge_media_preview_like: [Object],
      location: null,
      thumbnail_src: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.90.720.720a/s640x640/165104725_821413028449091_5801909520846720783_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=kkfMsjadZwwAX8fqVpi&edm=ABfd0MgAAAAA&ccb=7-4&oh=e514e2715171816ea45a6b9081f40ebe&oe=606921B0&_nc_sid=7bff83',
      thumbnail_resources: [Array],
      felix_profile_grid_crop: null,
      product_type: 'feed',
      clips_music_attribution_info: null
    },
    {
      __typename: 'GraphImage',
      id: '2538711033188845815',
      shortcode: 'CM7UDvolgj3',
      dimensions: [Object],
      display_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/163605793_1837834453036576_8505959201129320560_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=CyJaXyv9QvwAX_VtkM6&edm=ABfd0MgAAAAA&ccb=7-4&oh=cd1153019ca9d69cacc3b5607eb02e07&oe=608DA0DC&_nc_sid=7bff83',
      edge_media_to_tagged_user: [Object],
      fact_check_overall_rating: null,
      fact_check_information: null,
      gating_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: 'ACEqhBwQKiuZzFhF+8w6+lKxxUyxj/XMQCSFBIzj1x7npzgAZrlS11Ot7aFIyXEeGcEKfUDB/wA/hVrduUH1q5cqzRPnBXGVx/n/AD2rNtTmM/Wqe1yVo7bi0U7FFSaEqwbid/T2qWV1SMK2doYdOSOtRs5OVA3DHuP17/hQq4KjAHPTtzW1tDnu76lt5cR5T2A3e5qngAYH1+pPU1flTcmB2OR+Haqgw3Xoaz5bmvNyvUr0VP5C+poo5WPmRAjHYrHrjJ/HmrJ5Kn3H86qj7g/3V/kKsj+v+FbHOa3lgHk5/Ss6ZQshHbqPxrSNULr734D+tFrbBdvcrZ+tFPoqRn//2Q==',
      owner: [Object],
      is_video: false,
      accessibility_caption: 'Photo by Charlie Puth on March 27, 2021. May be an image of 1 person and standing.',
      edge_media_to_caption: [Object],
      edge_media_to_comment: [Object],
      comments_disabled: false,
      taken_at_timestamp: 1616857960,
      edge_liked_by: [Object],
      edge_media_preview_like: [Object],
      location: null,
      thumbnail_src: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/163605793_1837834453036576_8505959201129320560_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=CyJaXyv9QvwAX_VtkM6&edm=ABfd0MgAAAAA&ccb=7-4&oh=e733f40de7e7253bac34271f4904abf7&oe=608A5D9F&_nc_sid=7bff83',
      thumbnail_resources: [Array]
    },
    {
      __typename: 'GraphVideo',
      id: '2533805097726981292',
      shortcode: 'CMp4k_MFzSs',
      dimensions: [Object],
      display_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/e35/161713078_453336412650392_4672327955654811111_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=KZUHglmymvcAX_0E1_l&edm=ABfd0MgAAAAA&ccb=7-4&oh=c0fdf8eb66619dfff5c9ef65d74abea5&oe=606911E5&_nc_sid=7bff83',
      edge_media_to_tagged_user: [Object],
      fact_check_overall_rating: null,
      fact_check_information: null,
      gating_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: 'ACEqkvbwRY8shm5BHbt+o/xqgurS9OD3yarsPOlPQAHvxV77NGo2nGTWdzRK5aiuVu02NwwOfY/j/Op1hCowA5YYrAtSY5gvPXBx3A9q6J1OCozk4NUQyn9jPoKKn8k+pooApS2ywuzZyJOQB29RnvTso57jFNmWMqEQtuHvkdfrgHvx+NNUFTuYseMDcf6VButNCMx7JjMOAoLHHXgY/OraXRkAKueeeaIAInL4y0g49MDGf1qwZE7p+WP8Koze5F5sn94/kP8ACipd0X90/wCfxooJKKqePMbYAh4HXg4x+J/lTVhJIAPJ459amdR9lVsDO489/vVBISGX61J08v6ll42g/dqSwkHJA5yOcLz+ftVjDOvmcrnsecnoR9SegI/GlXlo/wDdb/2Ws2NiS4JON/TPuaNhW5tH/Wtv0L25qKh8xvU/maKdzPk8z//Z',
      owner: [Object],
      is_video: true,
      accessibility_caption: null,
      dash_info: [Object],
      has_audio: true,
      tracking_token: 'eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiNDJmODIzNGJkN2E4NDYxMjhiNWMyM2Y2NjAxODQ3ZDMyNTMzODA1MDk3NzI2OTgxMjkyIn0sInNpZ25hdHVyZSI6IiJ9',
      video_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t50.2886-16/162069395_195803358624388_1702194955768521020_n.mp4?_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=hPK4rCOoZYcAX9B_1z3&edm=ABfd0MgAAAAA&ccb=7-4&oe=60694025&oh=e75188c50ad965e12fa5b3e709bdb6ba&_nc_sid=7bff83',
      video_view_count: 1266097,
      edge_media_to_caption: [Object],
      edge_media_to_comment: [Object],
      comments_disabled: false,
      taken_at_timestamp: 1616273176,
      edge_liked_by: [Object],
      edge_media_preview_like: [Object],
      location: null,
      thumbnail_src: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.89.720.720a/s640x640/161713078_453336412650392_4672327955654811111_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=KZUHglmymvcAX_0E1_l&edm=ABfd0MgAAAAA&ccb=7-4&oh=553050549d5fbe1f9bf1e4b9e7b20d6f&oe=60695F71&_nc_sid=7bff83',
      thumbnail_resources: [Array],
      felix_profile_grid_crop: null,
      product_type: 'feed',
      clips_music_attribution_info: null
    },
    {
      __typename: 'GraphSidecar',
      id: '2525649707986157139',
      shortcode: 'CMM6QcnlX5T',
      dimensions: [Object],
      display_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/158862971_432529067804812_6922402903458713558_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=V_uoMQg2RDAAX_M7Li3&edm=ABfd0MgAAAAA&ccb=7-4&oh=b268bf694dcf722b58b3cf1f83e1f100&oe=608CB01E&_nc_sid=7bff83',
      edge_media_to_tagged_user: [Object],
      fact_check_overall_rating: null,
      fact_check_information: null,
      gating_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: null,
      owner: [Object],
      is_video: false,
      accessibility_caption: 'Photo by Charlie Puth on March 09, 2021. May be an image of 2 people.',
      edge_media_to_caption: [Object],
      edge_media_to_comment: [Object],
      comments_disabled: false,
      taken_at_timestamp: 1615300929,
      edge_liked_by: [Object],
      edge_media_preview_like: [Object],
      location: [Object],
      thumbnail_src: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/158862971_432529067804812_6922402903458713558_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=V_uoMQg2RDAAX_M7Li3&edm=ABfd0MgAAAAA&ccb=7-4&oh=4d0a3c62d720fea8d85357f76c96b232&oe=608AAA3A&_nc_sid=7bff83',
      thumbnail_resources: [Array],
      edge_sidecar_to_children: [Object]
    },
    {
      __typename: 'GraphVideo',
      id: '2520690222351912243',
      shortcode: 'CL7SmbsFg0z',
      dimensions: [Object],
      display_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/e35/155223171_449992743003800_6381824774454128866_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=P1DNdO-iIjwAX_u0kZD&edm=ABfd0MgAAAAA&ccb=7-4&oh=3e4e15f311547f3137ea73da693eb39b&oe=6068D38C&_nc_sid=7bff83',
      edge_media_to_tagged_user: [Object],
      fact_check_overall_rating: null,
      fact_check_information: null,
      gating_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: 'ACEqs3Y/en6CqMkoTpya07jmY59BVM24klwx4xuA74/xz+OKyt1Nk9EjNEzZyfxq/DDHKpYsVPbFLJbEqVGBux+QNNtykbFWO1cDBwTz+FO1xNtDvssf94/lRUvmRf3v0P8AhRT5SeZ9x2o5RfNU4YkflWRFO6PvHJ56960L6USJtzz1/KoLDB+TaHJ9fT61S1E9LEE07SEH7uPQ1qafIZlII+6evrkcj8KhuSFGx1WNWP3hzgA84x39qdFIAm2AgEcA4/Uj3puy0FZyNTaP8/8A6qKyt9z/AH1/75opXQuVlb7NK2WIHQn7y/4+4p1vbSRZ37cEEDLA9Dj9Dx9auYGDQoGf8/X+dStCnqU7i1lkOAVC/exu9gSeB6c//qpkMDRbm3IeMDljz26DPbqO/HerD8P9KcGPrVeYJ9CD99/fg/76ein7j6migR//2Q==',
      owner: [Object],
      is_video: true,
      accessibility_caption: null,
      dash_info: [Object],
      has_audio: true,
      tracking_token: 'eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiNDJmODIzNGJkN2E4NDYxMjhiNWMyM2Y2NjAxODQ3ZDMyNTIwNjkwMjIyMzUxOTEyMjQzIn0sInNpZ25hdHVyZSI6IiJ9',
      video_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t50.2886-16/155145541_3864570710302127_2266926250324755841_n.mp4?_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=vggqMHF_-f0AX_s4iCC&edm=ABfd0MgAAAAA&ccb=7-4&oe=6068DA04&oh=3283c6ae388751311b15aaf4ac9e49be&_nc_sid=7bff83',
      video_view_count: 790518,
      edge_media_to_caption: [Object],
      edge_media_to_comment: [Object],
      comments_disabled: false,
      taken_at_timestamp: 1614709747,
      edge_liked_by: [Object],
      edge_media_preview_like: [Object],
      location: null,
      thumbnail_src: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.90.720.720a/s640x640/155223171_449992743003800_6381824774454128866_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=P1DNdO-iIjwAX_u0kZD&edm=ABfd0MgAAAAA&ccb=7-4&oh=14c7850bfc4bc8ee44e8fb0d3bf5075d&oe=60690C27&_nc_sid=7bff83',
      thumbnail_resources: [Array],
      felix_profile_grid_crop: null,
      product_type: 'feed',
      clips_music_attribution_info: null
    },
    {
      __typename: 'GraphImage',
      id: '2519160847840133360',
      shortcode: 'CL123GrlUDw',
      dimensions: [Object],
      display_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/154698982_137995281528658_7562348313775762792_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=t0pEdT5J_0EAX9Roqo0&edm=ABfd0MgAAAAA&ccb=7-4&oh=0bc66a6822b8ceca0e1bf6e95d3170ed&oe=608BE292&_nc_sid=7bff83',
      edge_media_to_tagged_user: [Object],
      fact_check_overall_rating: null,
      fact_check_information: null,
      gating_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: 'ACEqxlhyPmPPoOT/AEFNkiIwQc546YNWVLKMc0Y3dajmKsW5bVBbfL978Ox5P1x/hWfC2w+2D1GatEkjGT+dMEVHMOw7zl9v++RRRsX2/I0UXQrMm2cVegtlxlhkmmwRF8KegHJ/z61aKbTwdo7Vmk2rou6WjKFzEsZBXoxwR/UVFsxzWmsYY5Ybh2J9fYf59qp4wSOlNppXEmmVtpoqztHrRU3KsTxuYzn8xV5HV/u8+3f8qpUneiMmvQHG5clbYM9D2FUgKf1FJ2pylcErDaKSioKP/9k=',
      owner: [Object],
      is_video: false,
      accessibility_caption: 'Photo by Charlie Puth on February 28, 2021. May be an image of coffee and indoor.',
      edge_media_to_caption: [Object],
      edge_media_to_comment: [Object],
      comments_disabled: false,
      taken_at_timestamp: 1614527396,
      edge_liked_by: [Object],
      edge_media_preview_like: [Object],
      location: null,
      thumbnail_src: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/154698982_137995281528658_7562348313775762792_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=t0pEdT5J_0EAX9Roqo0&edm=ABfd0MgAAAAA&ccb=7-4&oh=9fa197cafc93b49d1d2dbbe6822ac93c&oe=608AFAB6&_nc_sid=7bff83',
      thumbnail_resources: [Array]
    },
    {
      __typename: 'GraphImage',
      id: '2518396123192109838',
      shortcode: 'CLzI-5WlisO',
      dimensions: [Object],
      display_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/154679991_1118401031955329_4248844336950282978_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=4KjnV-SJ8KEAX-hulEa&edm=ABfd0MgAAAAA&ccb=7-4&oh=d6c1d5059a19ca4f1c75b0d76105c1e8&oe=608B0050&_nc_sid=7bff83',
      edge_media_to_tagged_user: [Object],
      fact_check_overall_rating: null,
      fact_check_information: null,
      gating_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: 'ACoqpKlSeXT05p7bsgKOvUnoPy9akEiMR0hDL90Ak+vSpgeMnjnBqm0pP3eAp5I7Z4oD1LsQLqGIwfT6cVJ5dSooUADoKkxVAY0coI/D+uKuRIzkemM8f57VHn5T24p8J2HcOp4H0/l+X0qbBtqRXMRVPLxzuBxVeMMmQBknGc9PpV2Z9x3E5I/oc1ESDkA8gnP+f0ppa2B9yzauWTDdRxVvFUbY43fUfyqX7Qvv+VN6AtTP35GKQzBeM/nVftVapEaqXCSfKe/r/SowArEMfx9R6/41nirCnL0m+vVDWujJoZ0VgzZzyPp+HXmr32mP+8KyQBTCKLiP/9k=',
      owner: [Object],
      is_video: false,
      accessibility_caption: 'Photo shared by Charlie Puth on February 27, 2021 tagging @adamlevine. May be an image of 2 people, people standing and indoor.',
      edge_media_to_caption: [Object],
      edge_media_to_comment: [Object],
      comments_disabled: false,
      taken_at_timestamp: 1614436234,
      edge_liked_by: [Object],
      edge_media_preview_like: [Object],
      location: null,
      thumbnail_src: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/154679991_1118401031955329_4248844336950282978_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=4KjnV-SJ8KEAX-hulEa&edm=ABfd0MgAAAAA&ccb=7-4&oh=b5d0a5f1b981a6107df74024eec30cef&oe=608AB227&_nc_sid=7bff83',
      thumbnail_resources: [Array]
    },
    {
      __typename: 'GraphSidecar',
      id: '2517670850410666148',
      shortcode: 'CLwkEycFVik',
      dimensions: [Object],
      display_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/155021505_435622610878374_2029976158483884296_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6sL8mgF9AiIAX9bGYZJ&edm=ABfd0MgAAAAA&ccb=7-4&oh=2177f8a93bf1016aad620737349e2e1e&oe=608C47CB&_nc_sid=7bff83',
      edge_media_to_tagged_user: [Object],
      fact_check_overall_rating: null,
      fact_check_information: null,
      gating_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: null,
      owner: [Object],
      is_video: false,
      accessibility_caption: 'Photo by Charlie Puth on February 26, 2021. May be an image of 1 person and outdoors.',
      edge_media_to_caption: [Object],
      edge_media_to_comment: [Object],
      comments_disabled: false,
      taken_at_timestamp: 1614349775,
      edge_liked_by: [Object],
      edge_media_preview_like: [Object],
      location: null,
      thumbnail_src: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/155021505_435622610878374_2029976158483884296_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6sL8mgF9AiIAX9bGYZJ&edm=ABfd0MgAAAAA&ccb=7-4&oh=95300fe630075e3fc2c56e510e14d25a&oe=608DD9CB&_nc_sid=7bff83',
      thumbnail_resources: [Array],
      edge_sidecar_to_children: [Object]
    },
    {
      __typename: 'GraphSidecar',
      id: '2514757238457254450',
      shortcode: 'CLmNmJ2lkIy',
      dimensions: [Object],
      display_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/152119959_895318527912584_6717880746986101756_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bRxN5Y74TAoAX-2iJVI&edm=ABfd0MgAAAAA&ccb=7-4&oh=aaeee8bcf07e5a19bb87c042e1b48b6b&oe=608D39BD&_nc_sid=7bff83',
      edge_media_to_tagged_user: [Object],
      fact_check_overall_rating: null,
      fact_check_information: null,
      gating_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: null,
      owner: [Object],
      is_video: false,
      accessibility_caption: 'Photo by Charlie Puth on February 22, 2021. May be an image of 1 person and outdoors.',
      edge_media_to_caption: [Object],
      edge_media_to_comment: [Object],
      comments_disabled: false,
      taken_at_timestamp: 1614002445,
      edge_liked_by: [Object],
      edge_media_preview_like: [Object],
      location: null,
      thumbnail_src: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/152119959_895318527912584_6717880746986101756_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bRxN5Y74TAoAX-2iJVI&edm=ABfd0MgAAAAA&ccb=7-4&oh=3042ae33ae2150be1a74a95334d62736&oe=608B32FD&_nc_sid=7bff83',
      thumbnail_resources: [Array],
      edge_sidecar_to_children: [Object]
    },
    {
      __typename: 'GraphImage',
      id: '2503915553183598096',
      shortcode: 'CK_se3nFYYQ',
      dimensions: [Object],
      display_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/147078235_238763611288602_9208195199318834618_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=5WJvcOTctTkAX8ViNNi&edm=ABfd0MgAAAAA&ccb=7-4&oh=abc979ffea8be371d7203be2b12494a6&oe=608DB0E1&_nc_sid=7bff83',
      edge_media_to_tagged_user: [Object],
      fact_check_overall_rating: null,
      fact_check_information: null,
      gating_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: 'ACEq36inmWBDI3QfqewqWopkEiFT04P5HIoAgt71Z2KFWjbGQG7j2q3VGBTJJ5vPygqM574z19MCr1C1BqzsJRRRQIUkAZPSmhwWwORjNNZfMbZngdfenCPacj/IoK2IgfkIHqf505AUyG6nnHpQUCNuzgZyc0uN7E9qSB+Q+ijZ70UyRfKXdvxz/ntTiMjHrS0UDGkYGB6YpQMDFLRQAlFLRQB//9k=',
      owner: [Object],
      is_video: false,
      accessibility_caption: 'Photo by Charlie Puth on February 07, 2021. May be an image of 1 person, standing and indoor.',
      edge_media_to_caption: [Object],
      edge_media_to_comment: [Object],
      comments_disabled: false,
      taken_at_timestamp: 1612710015,
      edge_liked_by: [Object],
      edge_media_preview_like: [Object],
      location: null,
      thumbnail_src: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/147078235_238763611288602_9208195199318834618_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=5WJvcOTctTkAX8ViNNi&edm=ABfd0MgAAAAA&ccb=7-4&oh=0cd006d32b998bf4e607b27252865aa1&oe=608CB005&_nc_sid=7bff83',
      thumbnail_resources: [Array]
    },
    {
      __typename: 'GraphSidecar',
      id: '2493775172425212924',
      shortcode: 'CKbq06GF-P8',
      dimensions: [Object],
      display_url: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/141874534_3587238408011860_4183420561722515172_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=zz9tXMhrOJgAX8SY3zK&edm=ABfd0MgAAAAA&ccb=7-4&oh=62b41e89a14e78e7d8d399db908994e6&oe=608B28FC&_nc_sid=7bff83',
      edge_media_to_tagged_user: [Object],
      fact_check_overall_rating: null,
      fact_check_information: null,
      gating_info: null,
      sharing_friction_info: [Object],
      media_overlay_info: null,
      media_preview: null,
      owner: [Object],
      is_video: false,
      accessibility_caption: 'Photo by Charlie Puth on January 24, 2021. May be an image of 1 person and food.',
      edge_media_to_caption: [Object],
      edge_media_to_comment: [Object],
      comments_disabled: false,
      taken_at_timestamp: 1611501188,
      edge_liked_by: [Object],
      edge_media_preview_like: [Object],
      location: null,
      thumbnail_src: 'https://instagram.fccu14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.179.1440.1440a/s640x640/141874534_3587238408011860_4183420561722515172_n.jpg?tp=1&_nc_ht=instagram.fccu14-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=zz9tXMhrOJgAX8SY3zK&edm=ABfd0MgAAAAA&ccb=7-4&oh=d4aa88b3ce944cc0ccd45756deff3a5c&oe=608AFE46&_nc_sid=7bff83',
      thumbnail_resources: [Array],
      edge_sidecar_to_children: [Object]
    }
  ]
}
```

## License

ISC

**Free Software, Hell Yeah!**

   [impin2rex]: <https://github.com/impin2rex>
   [git-repo-url]: <https://github.com/impin2rex/insta-scrapping>
   [cheerio]: <https://www.npmjs.com/package/cheerio>
   [request-promise]: <https://www.npmjs.com/package/request-promise>
   [nodemon]: <https://www.npmjs.com/package/nodemon>
   [node.js]: <http://nodejs.org>