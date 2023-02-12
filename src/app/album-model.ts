export interface IAlbum {
    id: number;
    title: string;
    artist: string;
    date: string;
    imageUrl: string;
    songs: ISong[];
  }
  
  export interface ISong {
    title: string;
    duration: number; // number of seconds
  }
  
  export let defaultAlbums = [
    {
      "id": 0,
      "title": "Fearless",
      "artist": "Taylor Swift",
      "date": "November 11, 2008",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/en/8/86/Taylor_Swift_-_Fearless.png",
      "songs": [
        { "title": "Fearless", "duration": 241 },
        { "title": "Love Story", "duration": 235 },
        { "title": "Hey Stephen", "duration": 254 },
        { "title": "White Horse", "duration": 234 },
        { "title": "You Belong with Me", "duration": 233 },
        { "title": "Breathe", "duration": 263 },
        { "title": "Tell Me Why", "duration": 200 },
        { "title": "You're Not Sorry", "duration": 261 },
        { "title": "The Way I Loved You", "duration": 244 },
        { "title": "Forever & Always", "duration": 225 },
        { "title": "The Best Day", "duration": 245 },
        { "title": "Change", "duration": 280 }
      ]
    },
    {
        "id": 1,
        "title": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        "artist": "David Bowie",
        "date": "June 16, 1972",
        "imageUrl": "https://hiresedition.com/images/dil/David-Bowie-Ziggy-Stardust.jpg",
        "songs": [
          { "title": "Five Years", "duration": 282 },
          { "title": "Soul Love", "duration": 214 },
          { "title": "Moonage Daydream", "duration": 280 },
          { "title": "Starman", "duration": 250 },
          { "title": "It Ain't Easy", "duration": 178 },
          { "title": "Lady Stardust", "duration": 282 },
          { "title": "Star", "duration": 167 },
          { "title": "Hang On to Yourself", "duration": 180 },
          { "title": "Ziggy Stardust", "duration": 193 },
          { "title": "Suffragette City", "duration": 205 },
          { "title": "Rock 'n' Roll Suicide", "duration": 178 }
        ]
      },
      {
        "id": 2,
        "title": "The Ghost of Tom Joad",
        "artist": "Bruce Springsteen",
        "date": "November 21, 1995",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/The_Ghost_of_Tom_Joad.jpg/220px-The_Ghost_of_Tom_Joad.jpg",
        "songs": [
          { "title": "The Ghost of Tom Joad", "duration": 263 },
          { "title": "Straight Time", "duration": 205 },
          { "title": "Highway 29", "duration": 219 },
          { "title": "Youngstown", "duration": 232 },
          { "title": "Sinaloa Cowboys", "duration": 231 },
          { "title": "The Line", "duration": 314 },
          { "title": "Balboa Park", "duration": 199 },
          { "title": "Dry Lightning", "duration": 210 },
          { "title": "The New Timer", "duration": 345 },
          { "title": "Across the Border", "duration": 324 },
          { "title": "Galveston Bay", "duration": 304 },
          { "title": "My Best Was Never Good Enough", "duration": 120 }
        ]
      },
      {
        "id": 3,
        "title": "Disintegration",
        "artist": "The Cure",
        "date": "May 2, 1989",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/CureDisintegration.jpg/220px-CureDisintegration.jpg",
        "songs": [
          { "title": "Plainsong", "duration": 312 },
          { "title": "Pictures of You", "duration": 444 },
          { "title": "Closedown", "duration": 256 },
          { "title": "Lovesong", "duration": 209 },
          { "title": "Last Dance", "duration": 282 },
          { "title": "Lullaby", "duration": 248 },
          { "title": "Fascination Street", "duration": 316 },
          { "title": "Prayers for Rain", "duration": 365 },
          { "title": "The Same Deep Water as You", "duration": 559 },
          { "title": "Disintegration", "duration": 498 },
          { "title": "Homesick", "duration": 426 },
          { "title": "Untitled", "duration": 390 }
        ]
      }
  ];