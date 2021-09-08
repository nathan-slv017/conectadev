import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PostCard from "../../../components/PostCard";

// const useStyle = makeStyle((theme) => {
//   root: {
//   }
// });

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: "Lucas Nhimi",
      username: "lucasnshini",
      avatar: "/images/avatars/avatar_1.jpeg",
    },
    title: "Criando um app do zero ultilizando React.JS",
    date: "April 7, 2020",
    description: "Fala pessoal! Qual o framework favorito de vcs?",
    hashtags: "#dornet, #javascript, #reactjs, #developer",
    image: "/images/posts/post9.jpeg",
  },
  {
    id: 2,
    author: {
      id: 1,
      name: "Lucas Nhimi",
      username: "lucasnshini",
      avatar: "/images/avatars/avatar_1.jpeg",
    },
    title: "Comparativo entre React.js e Vue.js - Performace",
    date: "April 1, 2020",
    description:
      "Quero criar um bootcamp gratuito para passar um pouco da minha experiencia pra vcs, Quen topa?",
    hashtags: "#framework, #javascript, #reactjs, #vue",
    image: "/images/posts/post8.png",
  },
];

export default function Feed() {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
