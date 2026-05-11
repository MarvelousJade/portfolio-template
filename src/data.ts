import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Shaoyu Fan",
  role: "Game Developer",
  introduction: "Game Developer | Unreal & SDL2 | Indie Game Creator",
  description:
    "Passionate game developer with a love for creating immersive experiences. Fell in love with game development after started learning coding.\n\n" +
    "Specializes in 2D game mechanics, performance optimization, and creating engaging gameplay loops. Always eager to learn new technologies and collaborate with fellow developers.\n\n" +
    "When not coding, I enjoy playing indie games, making music, and learning new technologies to challenge my creativity and technical skills.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/resume.pdf`,
  links: {
    github: "https://github.com/MarvelousJade",
    itchIO: "https://marvelousjade.itch.io",
    linkedIn: "https://linkedin.com/in/shaoyu-fan-b061772a3",
  },
};

export const games: Game[] = [
  {
    name: "BlackWood",
    description:
      "BlackWood is a first-person psychological horror game set in a small souvenir and antique shop. Built in Unreal Engine 5.6, it blends grounded retail-sim mechanics — serving customers, handling inventory, opening and closing the shop — with an unsettling narrative that unfolds across the workday. Visually it draws from the lo-fi, mundane-turned-sinister aesthetic of indie horror like Fears to Fathom.",
    genres: ["Psychological Horror", "First-Person", "Retail Sim"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [],
    media: [
      { source: "https://www.youtube.com/embed/y-OXwOIJv9I", type: MediaType.YouTube },
    ],
  },
  {
    name: "Hollow Zero",
    description:
      "A 2D action game featuring fluid combat mechanics, advanced AI behavior, and polished game feel elements.",
    genres: ["Action", "2D"],
    platforms: [Platform.Windows],
    engine: GameEngine.SDL2,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/MarvelousJade/hollow-zero" },
      { source: LinkImageSource.ItchIo, url: "https://marvelousjade.itch.io/hollow-zero" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/tLpg1GxOdm8", type: MediaType.YouTube },
      { source: "/images/games/hollow-zero/cover.png", type: MediaType.Image },
    ],
  },
  {
    name: "Chicken Defense",
    description:
      "An arcade shooter where you defend your base from waves of invading chickens.",
    genres: ["Arcade", "Shooter"],
    platforms: [Platform.Windows],
    engine: GameEngine.SDL2,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/MarvelousJade/chicken-defense-game" },
      { source: LinkImageSource.ItchIo, url: "https://marvelousjade.itch.io/chicken-defense" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/ahL7-md2M_8", type: MediaType.YouTube },
    ],
  },
  {
    name: "Souls-like",
    description:
      "A challenging action RPG inspired by Dark Souls, featuring precise combat mechanics, stamina management, and immersive world design built in Unreal Engine.",
    genres: ["Action RPG", "Souls-like"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [],
    media: [
      { source: "https://www.youtube.com/embed/UaqNMUt8g6w", type: MediaType.YouTube },
    ],
  },
];
