import { USERS } from "./users";

export const POSTS = [
  {
    imgUrl: 'https://i.imgur.com/TjBV0cw.jpeg',
    user: USERS[0].user,
    likes: 21,
    caption: 'Building React Native application for the first time here at MetDev LLC Manhattan office',
    profile_pic: USERS[0].image,
    comments: [
      {
        user: 'jsanchez',
        comment: 'Happy for you!'
      },
      {
        user: 'dkelley86',
        comment: 'fancy lad'
      }
    ]
  },
  {
    imgUrl: 'https://i.imgur.com/FkgPC4J.jpeg',
    user: USERS[3].user,
    likes: 8,
    caption: 'Derps 4 dayzz...',
    profile_pic: USERS[3].image,
    comments: [
      {
        user: USERS[2].user,
        comment: 'dog looks amused'
      },
      {
        user: USERS[1].user,
        comment: 'Aww so cute!'
      }
    ]
  },
  {
    imgUrl: 'https://i.imgur.com/x6BHMoY.jpeg',
    user: USERS[4].user,
    likes: 700,
    caption: 'Shes the best girl',
    profile_pic: USERS[4].image,
    comments: [
      {
        user: USERS[2].user,
        comment: 'Be still my heart!'
      },
      {
        user: USERS[1].user,
        comment: 'And Jesus wept'
      }
    ]
  },
  {
    imgUrl: 'https://s.yimg.com/uu/api/res/1.2/mF1j755SXH7rk4_0wFyuvg--~B/Zmk9ZmlsbDtweW9mZj0wO3c9NjQwO2g9MzYwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en-us/video/video.littlethings.com/ab55d413c35532c422830c19beb3bbee',
    user: USERS[2].user,
    likes: 80,
    caption: 'I know horse girls get a bad rap sometimes, but this is what I have to deal with EVERYDAY when I try and wake him from his siesta',
    profile_pic: USERS[2].image,
    comments: [
      {
        user: USERS[5].user,
        comment: 'LOL! Thats too much'
      },
      {
        user: USERS[4].user,
        comment: 'The youths have no work ethic these days...haha'
      }
    ]
  },
]