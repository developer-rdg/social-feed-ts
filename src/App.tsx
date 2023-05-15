import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rodrigo-devv.png",
      name: "Rodrigo Oliveira",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz com React 🚀💻",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-01-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/john-doe.png",
      name: "John Doe",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Hey everyone! 👋" },
      {
        type: "paragraph",
        content: "I just finished working on a new project using Vue.js 🚀💻",
      },
      { type: "link", content: "johndoe.com/my-vue-project" },
    ],
    publishedAt: new Date("2023-02-12 10:30:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/sarah-dev.png",
      name: "Sarah Johnson",
      role: "Frontend Developer",
    },
    content: [
      { type: "paragraph", content: "Hello everyone! 👋" },
      {
        type: "paragraph",
        content: "Excited to share my latest React Native project with you all! 🚀💻",
      },
      { type: "link", content: "sarahcodes.com/react-native-app" },
    ],
    publishedAt: new Date("2023-03-20 15:45:00"),
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/emma-dev.png",
      name: "Emma Thompson",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Hey there! 👋" },
      {
        type: "paragraph",
        content: "Just launched my new website built with Angular. Check it out! 🚀💻",
      },
      { type: "link", content: "emma.dev/my-angular-website" },
    ],
    publishedAt: new Date("2023-04-08 09:15:00"),
  },
  {
    id: 5,
    author: {
      avatarUrl: "https://github.com/mike-dev.png",
      name: "Mike Anderson",
      role: "UI/UX Designer",
    },
    content: [
      { type: "paragraph", content: "Hello friends! 👋" },
      {
        type: "paragraph",
        content:
          "I'm excited to showcase my latest design project using Figma. Take a look! 🚀💻",
      },
      { type: "link", content: "mikedesigns.com/my-figma-project" },
    ],
    publishedAt: new Date("2023-05-01 14:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
