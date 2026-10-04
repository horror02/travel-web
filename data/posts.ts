export interface Post {
  id: string;
  title: string;
  location: string;
  country: string;
  date: string;
  description: string;
  content: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: "campo-quino-sunset",
    title: "Sunset in CampoQuino Beach Resort",
    location: "Sipalay City",
    country: "Philippines",
    date: "2026-06-12",
    description: "300 steps later, standing on top of CampoQuino with Sipalay's best view.",
    content: `The climb was tiring, but somehow, the moment I reached the top, every step felt worth it. From there, the view opened up to a quiet stretch of sea, with the sun slowly making its way toward the horizon. The sound of the waves below and the gentle breeze made everything feel a little slower.

    There was something peaceful about standing there and simply looking at the ocean. No rush, no plans, and nothing that needed my attention for a while. Just the warm light of the setting sun reflecting across the water and the coastline stretching into the distance.

    Sometimes, the best parts of a trip aren't the places you planned to see, but the moments that make you stop and appreciate where you are. CampoQuino was one of those moments for me—a little climb, a beautiful sunset, and a view of Sipalay that I won't easily forget.

    Maybe 300 steps wasn't that many after all.`,
    image: "/sunset.svg",
    tags: ["Philippines", "Beach", "Sipalay City"],
    featured: true,
  },
  {
    id: "Ilaya-escape",
    title: "A Quick Escape to Ilaya",
    location: "Silay City",
    country: "Philippines",
    date: "2026-03-29",
    description: "A quiet escape above the trees, where the view is just as refreshing as the water.",
    content: `Tucked away in the mountains, Ilaya offers a peaceful break from the usual noise and busy pace of everyday life. Surrounded by lush greenery and overlooking the landscape below, it feels like the kind of place where you can slow down, breathe, and simply enjoy the moment.

    The infinity pool makes the experience even better. With the mountains and distant horizon stretching out in front of you, taking a swim here feels less like being in a resort and more like being surrounded by nature.

    What I enjoyed most was the atmosphere. There was no need to rush from one place to another or fill the day with activities. Sometimes, having a good view, a quiet afternoon, and somewhere comfortable to relax is more than enough.

    Ilaya is one of those places that reminds you that you don't always have to go far to find a little peace.`,
    image: "/ilaya.svg",
    tags: ["Philippines", "Mountain", "Silay City"],
    featured: true,
  },
  {
    id: "barracuda",
    title: "Sunlight and Mountains in Barracuda",
    location: "Silay City",
    country: "Philippines",
    date: "2026-08-22",
    description: "Blue water, green mountains, and a sky worth stopping for at Barracuda in Silay City.",
    content: `The pool caught my eye first, a bright patch of blue at the bottom of the steps. Then I looked past it. Beyond the palms and rooftops, the mountains rose into a sky filled with clouds, and suddenly the water was only a small part of the view.

    From the white railing, there was so much to take in: red flowers beside the steps, sunlight across the garden, and slopes that grew softer and bluer in the distance. I liked how everything seemed to fit into the same frame, from the little details nearby to the mountains far beyond the resort.

    It was the kind of view that made me pause before heading down. A swim could wait a moment. With the sun breaking through on one side and clouds gathering around the peaks on the other, there was already plenty happening above the trees.

    This is the part of Barracuda I wanted to keep: the brightness of the day, the layers of green, and that brief pause on the stairs when I realized how much there was to look at.`,
    image: "/barracuda.svg",
    tags: ["Philippines","Mountains","Silay City"],
    featured: true,
  },
  {
    id: "giannas",
    title: "The Field of Green below the Grey Clouds",
    location: "Bago City",
    country: "Philippines",
    date: "2026-04-04",
    description: "Garden steps, layers of green hills, and clouds casting shadows over the view at Gianna's.",
    content: `The steps at Gianna's disappear between plants before the view opens out over the hills. Red leaves stand out against the green beside the railing, while farther away, the landscape fades into a soft blue haze. My eyes kept following it toward the horizon.

    Above the slopes, the clouds were just as interesting as the land. Their grey undersides gave the hills patches of shade, but there was still plenty of blue sky. The sunlight caught the leaves nearest to me, making them seem even brighter against the distance.

    I liked being able to see both scales at once. Right beside the path were individual leaves and the rough edges of the steps. Beyond them were whole hillsides, with little roads and clearings tucked among the trees.

    Looking back at this photo, it is that depth I notice most. There is always another ridge behind the one I am looking at, another shade of green, another reason to let my eyes wander a little farther.`,
    image: "/giannas.svg",
    tags: ["Philippines","Nature","Bago City"],
  },
  {
    id: "vista-villa",
    title: "A Red Sunset over Vista Villa",
    location: "Don Salvador Benedicto",
    country: "Philippines",
    date: "2026-09-20",
    description: "An orange sun, mist along the hills, and a quiet evening view at Vista Villa.",
    content: `At Vista Villa, the sunset appeared between the buildings and the trees. The sun sat low over the distant ridges, turning the opening in the clouds orange while the mountain beside it stayed in shadow. It was a small, bright point in a much larger view.

    Pine branches crossed the sky above the path, and a thin layer of mist rested against the hillside. The glass railing caught a little of the evening light. Even with the buildings close by, my attention kept returning to the valley beyond them.

    What I like about this moment is how much of the place remains in the photograph. The steps, the plants, and the roof overhead frame the sunset exactly as it appeared from that spot. They give the view a sense of being somewhere, of standing on a particular path at the right time.

    The warm color would only last for a little while. This photo holds on to it: the sun above the ridge, the darkening trees, and the last light finding its way through the clouds.`,
    image: "/vista-villa.svg",
    tags: ["Philippines","Sunset","Don Salvador Benedicto"],
    featured: true,
  },
  {
    id: "cloud-9",
    title: "Walking in the Clouds at Cloud 9",
    location: "Antipolo City",
    country: "Philippines",
    date: "2024-12-20",
    description: "A narrow hanging bridge above the trees, with the Cloud 9 viewing deck waiting at the far end.",
    content: `From the entrance, the hanging bridge at Cloud 9 seems to lead straight into the sky. Its narrow walkway rises toward the viewing deck, with cables and netting tracing the way on either side. Trees fill the space below, and the people at the far end look surprisingly small.

    I found myself studying the bridge before anything else. The repeating metal steps, the ropes along the edges, and the climb toward the building make the distance feel longer than it first appears. There is something about seeing the whole crossing at once that makes you imagine every step.

    The photograph catches that feeling just before an adventure begins. The destination is right there, easy to see, but there is still a stretch of open space between here and there. Around it all are palms, leafy branches, and a bright sky full of clouds.

    For me, this is the memorable view of Cloud 9: looking along the bridge toward the deck, with a little excitement and a healthy respect for the height. Sometimes the way to a viewpoint becomes a view of its own.`,
    image: "/cloud-9.svg",
    tags: ["Philippines","Adventure","Antipolo City"],
  },
  {
    id: "baluarte",
    title: "A Quiet Escape to Baluarte",
    location: "Murcia",
    country: "Philippines",
    date: "2026-05-03",
    description:
      "Tall trees, white chairs, and a quiet clearing in Murcia where there is every reason to stay a little longer.",
    content: `At Baluarte in Murcia, my attention went straight to the trees. Their trunks stretched high above the clearing, with branches overlapping until only small patches of sky remained. Beneath them, a few white chairs sat around a stone fire pit. It looked like a good place to spend an afternoon without watching the time.

    What I liked was how much of the forest remained part of the space. Roots crossed the ground between patches of grass, fallen leaves added bits of orange and brown, and vines climbed the trunks. Even the chairs seemed small under all that green.

    The fire pit held darkened pieces of wood, waiting for another gathering. I could imagine the chairs pulled closer in the evening, with a fire in the middle and a conversation carrying on after dark. In this moment, though, the empty seats and the daylight through the leaves were enough.

    Looking at the photo now, I keep noticing something different: the broad roots in the foreground, a little building tucked behind the trees, the spaces between the branches. That is what I want to remember about Baluarte. There was room to pause, look around, and enjoy being somewhere with very little to hurry for.`,
    image: "/baluarte.svg",
    tags: ["Philippines", "Nature", "Relaxation"],
  },
  {
    id: "plain",
    title: "Above the City Lights of Manila",
    location: "Manila",
    country: "Philippines",
    date: "2026-05-03",
    description: "Manila after dark through an airplane window, its roads and neighborhoods traced in gold and white.",
    content: `Through the airplane window, Manila spread out in thousands of lights. Bright roads curved between darker patches, and clusters of buildings stretched toward the horizon. Above the city, a few clouds caught the glow beneath a deep blue night sky.

    I kept trying to follow the roads with my eyes. Some ran in long, clear lines; others bent out of sight between neighborhoods. From this height, the city felt almost quiet, even though all those lights belonged to places where ordinary evenings were still unfolding.

    That is what I like about a window seat at night. For a few minutes, you can see how much lies beyond the streets you know. Somewhere below are people heading home, shops still open, and rooms where someone has just switched on a light.

    The edge of the window stays in the corner of this photo, a small reminder of where I was watching from. I wanted to remember this part of the journey, too: looking out into the dark and finding the city shining back.`,
    image: "/plane.svg",
    tags: ["Philippines","City","Night","Flying"],
  },
  {
    id: "campuestohan",
    title: "A Poolside View at Campuestohan",
    location: "Talisay City",
    country: "Philippines",
    date: "2023-05-07",
    description: "Bright blue water, colorful poolside details, and a wide horizon beneath the clouds at Campuestohan.",
    content: `From above the pool at Campuestohan, the view seemed to stretch far beyond the resort. Green rooftops and palms filled the foreground, while the land behind them faded into the distance. Overhead, thick clouds covered most of the sky, with small breaks letting the light through.

    The pool brought color to the scene. Its turquoise water stood out beside the warm paving, and the spotted mushroom decorations made the whole area feel playful. People were already enjoying the water, small figures in a view that had so much happening around it.

    I liked taking a moment to see everything together before focusing on the details. There were paths between the cottages, gardens along the edges, and places to sit beneath the green roofs. My eyes kept moving from the pool to the horizon and back again.

    Looking at this photo brings back the easy appeal of a resort day: somewhere to swim, somewhere to rest, and a view to enjoy in between. At Campuestohan, even a pause above the pool gave me something worth remembering.`,
    image: "/campuestohan.svg",
    tags: ["Philippines", "Resort", "View"],
  },
  {
    id: "hiyang-hiyang",
    title: "Beneath the Mountains at Hiyang-Hiyang",
    location: "Talisay City",
    country: "Philippines",
    date: "2025-05-19",
    description: "Thatched cottages, sunny lawns, and green mountain ridges framing a relaxed day at Hiyang-Hiyang.",
    content: `The mountains were the first thing I noticed beyond the cottages at Hiyang-Hiyang. Their uneven ridgeline stretched across the view, with sunlight on some slopes and deep shadows on others. Above them, large white clouds opened around a patch of blue sky.

    From beneath the thatched roof, I could see paths crossing the lawn and people gathered in the cottages. Bags and towels rested beside the seats, and the pool area was just beyond the grass. It had the comfortable look of a day already underway, with everyone finding their own place to settle in.

    What I liked most was having the mountains so clearly in view. Even with the activity around the cottages, there was always somewhere farther away to look. The palms and rooftops sat below the ridges, giving the whole place a backdrop that held my attention.

    This is the moment I wanted to keep from Hiyang-Hiyang: a little shade overhead, sunlight across the lawn, and green hills filling the distance. A simple view from a cottage, but one that made staying a little longer feel like an easy decision.`,
    image: "/hiyang-hiyang.svg",
    tags: ["Philippines", "Mountain", "Relaxation"],
  },
];

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((post) => post.featured);
}
