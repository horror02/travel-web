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
    id: "paris-golden-hour",
    title: "Sunset in CampoQuino Beach Resort",
    location: "Sipalay",
    country: "Philippines",
    date: "2026-06-12",
    description:
      "300 steps later, standing on top of CampoQuino with Sipalay's best view.",
    content: `There's a moment just before sunset in Paris when the whole city seems to hold its breath. I had walked along the Seine for nearly an hour, watching the light shift from harsh afternoon white to something warmer, more forgiving. By the time I reached the Champ de Mars, the Eiffel Tower was already glowing amber.

I found a quiet patch of grass away from the selfie sticks and tour groups. A couple nearby shared a baguette and a bottle of wine without saying much. A child chased pigeons until they exploded upward in a gray flutter. The tower itself seemed almost surprised by how beautiful it was.

What strikes me most about Paris isn't any single monument — it's the way the architecture conspires with the light. Haussmann's boulevards were designed with that in mind, wide enough to let the sun rake across stone facades at a low angle. Every evening the city performs this trick, and every evening people stop and stare as if seeing it for the first time.

I stayed until the tower sparkled its hourly light show at 9 PM, then walked back along the river in the dark, already planning the next morning.`,
    image: "/sunset.jpg",
    tags: ["Philippines", "Beach", "Sipalay City"],
    featured: true,
  },
  {
    id: "tokyo-shinjuku-nights",
    title: "Lost in Shinjuku at Midnight",
    location: "Tokyo",
    country: "Japan",
    date: "2024-05-22",
    description:
      "Neon signs, ramen steam, and the electric hum of ten thousand people going somewhere — Tokyo at night is a city that never quite lets you sleep.",
    content: `I arrived in Shinjuku at eleven o'clock on a Tuesday night and immediately understood why people lose weeks in Tokyo without meaning to. The streets outside the east exit were so densely layered with light — red lanterns competing with LED billboards, pachinko parlors spilling their mechanical roar onto the sidewalk — that I simply stopped and stood there for five minutes, trying to take it all in.

A salary man in a rumpled suit bumped into me without looking up from his phone. A group of young women in coordinated pastel outfits disappeared around a corner. Somewhere nearby someone was grilling yakitori and the smoke drifted sweet and charred over everything.

I found a tiny ramen counter with eight seats and a menu entirely in kanji. I pointed at something and was rewarded with a bowl of tonkotsu so rich it felt almost like a meal I'd remember for years — which I will.

The thing about Tokyo nightlife is that it keeps revealing new layers. What looks like a dead alley turns out to contain three hidden bars. What looks like a bar turns out to also serve as someone's record shop. I walked until 3 AM and still felt like I'd only scratched the surface.`,
    image: "/patag.jpg",
    tags: ["Asia", "City", "Nightlife"],
    featured: true,
  },
  {
    id: "santorini-caldera",
    title: "Blue Domes Over the Aegean",
    location: "Santorini",
    country: "Greece",
    date: "2024-07-08",
    description:
      "Oia's white-washed streets and impossibly blue domes perched above the caldera — the most beautiful village I've ever been dropped into.",
    content: `Every photograph of Santorini tells the truth, which is unusual. Most famous places disappoint slightly — smaller than imagined, more crowded, the light not quite right. Santorini, somehow, delivers exactly what the photographs promise and then gives you something extra that no photograph can capture: the smell of jasmine mixing with sea salt, the sound of church bells carrying across the caldera, the way the white reflects heat back at you from every direction.

I stayed in a small guesthouse in Oia, carved into the cliff like everything else on the island. My terrace looked directly out over the caldera, where the blue-black water filled what was once the hollow of a volcanic eruption. The scale of it is staggering — you're essentially looking at the inside of an ancient catastrophe.

Sunset in Oia is a communal event. People gather on every terrace and rooftop and staircase facing west, and when the sun finally touches the water there's an audible murmur, sometimes applause. It feels slightly absurd and entirely human.

I hired a small boat one morning and sailed around the caldera, stopping at the hot springs near the old volcano. The water there is sulfur-warm and rust-colored. I floated on my back and looked up at the cliffs and tried to understand that I was inside something geological rather than architectural.`,
    image: "https://picsum.photos/seed/santorini-blue/1200/800",
    tags: ["Europe", "Islands", "Mediterranean"],
    featured: true,
  },
  {
    id: "bali-rice-terraces",
    title: "Dawn Over the Tegalalang Rice Terraces",
    location: "Ubud, Bali",
    country: "Indonesia",
    date: "2023-11-03",
    description:
      "Waking at 4 AM to beat the crowds to Tegalalang and watching the mist lift off emerald rice paddies as the jungle woke up around me.",
    content: `My guesthouse owner in Ubud told me to arrive at Tegalalang before six if I wanted to see it without the Instagram crowds. I set my alarm for 4:30 and walked through the dark on roads that smelled of incense and wet earth.

By the time light started, I was the only tourist standing at the valley's edge watching the mist burn off in slow curls from the rice terraces below. The paddies descend in step after step down the hillside, each one a slightly different shade of green depending on where in the growing cycle the rice sits. Some are flooded mirror-flat, reflecting sky. Others are dense and ready, the stalks swaying in early morning breeze.

The subak irrigation system that feeds these terraces is centuries old and has been designated UNESCO World Heritage. Water is distributed according to a cooperative managed by the water temples — the spiritual and the practical entirely intertwined in a way that feels like it should be a metaphor for something.

By eight o'clock the vendors had appeared and the tour buses were pulling up and the terrace cafés were setting out their swing chairs for the photographers. I had already had three cups of Kopi Luwak coffee and a conversation with an old farmer about the changing climate, and felt I'd gotten the best of the day.`,
    image: "https://picsum.photos/seed/bali-rice/1200/800",
    tags: ["Asia", "Nature", "Culture"],
  },
  {
    id: "machu-picchu-clouds",
    title: "The Lost City Above the Clouds",
    location: "Machu Picchu",
    country: "Peru",
    date: "2023-09-14",
    description:
      "Hiking the Inca Trail for four days to arrive at the Sun Gate at dawn and see Machu Picchu emerge from morning clouds — the journey made the destination.",
    content: `On the fourth morning of the Inca Trail I woke at three, ate cold porridge in the dark, and began the final climb to the Sun Gate in a line of headlamps snaking up through cloud forest. The altitude had been working on me for days — a low headache, legs heavier than they should be, lungs that seemed smaller.

The Sun Gate appears without warning. You crest a final staircase and suddenly the whole valley opens before you, and if the clouds cooperate — which on this morning they did, just barely — you see Machu Picchu below, the stone terraces and temples still in early shadow.

I sat on a wall and watched for an hour as the light shifted and the clouds moved across the ruins in waves, sometimes obscuring the whole city, sometimes revealing it all at once. Other hikers arrived and some cried. One man sat down beside me and said nothing for twenty minutes, which seemed like the right response.

The ruins themselves reward slow attention. The masonry is extraordinary — stones fitted without mortar so precisely that you can't slide a piece of paper between them. The Inca built for earthquakes, designing stones that would rock and resettle rather than crack. Most of what you see has survived five hundred years and several major seismic events intact.

I stayed until the first tour buses arrived by train and cable car. Then I found a terrace with llamas grazing and ate lunch looking out over the cloud forest while a condor rode thermals above the valley.`,
    image: "https://picsum.photos/seed/machu-picchu/1200/800",
    tags: ["South America", "Hiking", "History"],
    featured: true,
  },
  {
    id: "serengeti-migration",
    title: "The Great Migration on the Serengeti",
    location: "Serengeti",
    country: "Tanzania",
    date: "2023-08-01",
    description:
      "Two million wildebeest and zebra moving in an endless column across the golden plains — the greatest wildlife spectacle on earth, exactly as wild as advertised.",
    content: `The crossing happened without warning. We had been sitting at the Mara River for three hours, watching a herd of perhaps ten thousand wildebeest pacing the opposite bank, working themselves up to something. Our guide, Emmanuel, had seen this hundreds of times and was completely calm. Then one animal stepped in and the rest simply went.

What followed was controlled chaos. Wildebeest plunged down the bank and into the crocodile-brown water in a heaving mass. Zebra wove between them. Crocodiles that had been invisible logs suddenly became precise and terrible. Some animals turned back. Most crossed. The noise — the grunting, the splashing, the distant bellowing — was astonishing.

It lasted maybe twenty minutes. Afterwards the plain was quiet again except for vultures settling in the acacias.

The Serengeti itself is a place that recalibrates scale. The sky here is enormous. In the mornings a long cloud of dust follows the migrating column across the horizon. At night the Milky Way is so dense it creates visible shadows.

I woke early most mornings to watch elephants move through the golden light before breakfast, and stayed out past sunset watching lions on kopjes — granite outcroppings that rise like islands from the grass — surveying something only they could see.`,
    image: "https://picsum.photos/seed/serengeti-safari/1200/800",
    tags: ["Africa", "Wildlife", "Safari"],
  },
  {
    id: "iceland-aurora",
    title: "Chasing the Northern Lights in Iceland",
    location: "Þórsmörk Valley",
    country: "Iceland",
    date: "2023-02-17",
    description:
      "Three nights of cloud cover and one perfect night — the aurora borealis dancing green and violet over a black lava field while the world stayed silent.",
    content: `I had been told not to count on seeing the northern lights. The forecast apps assign a KP number, the brightness of the aurora on a scale of one to nine, and the clouds are often uncooperative regardless of what the aurora is doing. I spent three nights in Vík and saw nothing but low overcast.

On the fourth night the sky cleared. I drove east along the ring road into a lava field, turned off the engine, and walked away from the car until the headlights no longer reached me. The cold was absolute — minus fifteen, still air, no wind. The stars were extraordinary. Then, to the north, a green smear appeared low on the horizon and began to move.

What surprised me was the speed. I had expected something slow and painterly, but the aurora moves — pulses, ripples, shoots curtains of light upward. For about forty minutes it was intensely active, filling a third of the sky with green and, on the brightest pulses, violet at the fringes.

Then it faded to a diffuse glow and stayed that way. I stood in the cold for another hour hoping it would return, which it didn't. I drove back to Vík with the heater on full and arrived at my guesthouse at 3 AM, too awake to sleep.

Iceland in February is a place of strong contrasts. The waterfalls freeze at their edges but still flow. The black sand beaches are dramatic under any light. The geothermal pools are the warmest places in the cold country.`,
    image: "https://picsum.photos/seed/iceland-aurora/1200/800",
    tags: ["Europe", "Nature", "Adventure"],
  },
  {
    id: "venice-grand-canal",
    title: "A Morning on the Grand Canal",
    location: "Venice",
    country: "Italy",
    date: "2024-01-20",
    description:
      "Early morning on the Grand Canal before the tourist boats arrive — Venice in winter fog is a different city entirely, quiet and slightly haunted.",
    content: `Everyone told me to visit Venice in winter. They were right. I arrived in January to find the city almost empty of tourists — the vaporetti had space to sit down, the restaurants had no queues, and the morning fog sat on the Grand Canal in thick layers that muffled everything and turned the palazzos into watercolor approximations of themselves.

I took the number 1 vaporetto from Santa Lucia station to San Marco every morning, not because I needed to go anywhere but because the canal shows you the whole of the city's architectural history in forty minutes. Gothic, Byzantine, Renaissance, Baroque — the facades are layered centuries, some crumbling, some restored, all improbable.

Venice shouldn't exist and knows it. The whole city floats on wooden pilings driven into the lagoon mud, and the rising sea is slowly swallowing it. Acqua alta, the seasonal flooding, had left watermarks on some buildings at shoulder height. The shopkeepers kept rubber boots by the door. In the morning the streets that flood overnight are still damp.

I hired a gondolier named Marco for an hour — not through the tourist stations but through a resident who knew him. He took me through the back canals where the light comes in long and low and the washing hangs between buildings and the cats watch from every windowsill. He didn't sing. He told me about his children and complained about the cruise ships and recited a Venetian dialect poem his grandmother had taught him.`,
    image: "https://picsum.photos/seed/venice-canal/1200/800",
    tags: ["Europe", "City", "History"],
  },
  {
    id: "kyoto-cherry-blossoms",
    title: "Cherry Blossoms at Maruyama Park",
    location: "Kyoto",
    country: "Japan",
    date: "2024-04-05",
    description:
      "The weeping cherry tree at the center of Maruyama Park lit up at night, its blossoms so dense the branches disappear — spring in Kyoto is a brief and perfect thing.",
    content: `Hanami — flower viewing — is practiced in Japan with a seriousness that borders on liturgical. People take time off work. Families claim spots under specific trees weeks in advance with tape and plastic tarps. The Japan Meteorological Corporation issues forecasts tracking the sakura front as it moves north from Kyushu through the islands.

I arrived in Kyoto on the fourth day of peak bloom, which the locals seemed to regard as neither early nor late but exactly right. Maruyama Park was already full by eight in the morning — families spreading blue tarps, elderly couples walking slowly under the pale canopy, university students still there from the night before.

At the center of the park stands a weeping cherry called the Gion Shidare-zakura, an enormous tree that is lit from below after dark. Surrounded by the nighttime crowd, its cascading branches loaded with blossoms, it looked like something from a dream of Japan rather than Japan itself.

What moved me was the explicit awareness of transience. The blossoms last a week, two weeks if the weather is cool. Everyone there knew they were watching something ending. The whole celebration is built around that knowledge — mono no aware, the Japanese call it, the pathos of things.

I bought a box of sakura mochi from a woman with a cart and ate it on the steps of the Chion-in temple while the petals fell in slow drifts around me. A crow landed nearby and stole half my mochi without apology.`,
    image: "https://picsum.photos/seed/kyoto-cherry/1200/800",
    tags: ["Asia", "Nature", "Culture"],
  },
  {
    id: "rio-christ-redeemer",
    title: "Sunrise with Christ the Redeemer",
    location: "Rio de Janeiro",
    country: "Brazil",
    date: "2023-06-12",
    description:
      "Taking the first cog train up Corcovado at dawn to have the statue almost entirely to myself, the city below still in shadow, Guanabara Bay lit gold.",
    content: `The cog railway runs its first ascent at six in the morning, and if you're on it you'll have perhaps thirty minutes before the second and third trains arrive. I was first in line at the station and reached the top of Corcovado as the sun was still clearing the Atlantic horizon.

Christ the Redeemer at dawn, with the city still in blue shadow below, is something I wasn't prepared for. The statue is larger than photographs suggest — thirty meters of soapstone and concrete on a nine-meter pedestal, arms spanning twenty-eight meters. At close range it's severe and geometric, the face stylized almost to abstraction. But seen from the viewing platform as the first light catches the city, with the Sugarloaf across the bay and the favelas on the hillsides and the beaches curving white to the south, the figure has a quality of watching that I found difficult to shake for the rest of the day.

By the time I descended the first cable car of tourism was beginning its work. I walked through Lapa in the late morning, where the colonial aqueduct still stands and the Saturday street market was setting up. I ate pastéis and drank caldo de cana and watched a game of futevôlei on the beach until the afternoon heat became insistent.

Rio is a city of such concentrated beauty and such concentrated difficulty that it sits in the mind differently from other places — not as a postcard but as something more complicated, more honest.`,
    image: "https://picsum.photos/seed/rio-christ/1200/800",
    tags: ["South America", "City", "Culture"],
  },
];

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((post) => post.featured);
}
