const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/posts", async (req, res) => {
    try {
        //const limit = parseInt(req.query.limit) || 9;
        const placeholderThumbnail = 'https://via.placeholder.com/150'; 

        const [postsResponse, photosResponse] = await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/posts"),
            axios.get("https://jsonplaceholder.typicode.com/photos"),
        ]);
/*
//  1st Version - Shuffle and pick 9 random posts
        let unshuffledPosts = postsResponse.data;
        const posts = unshuffledPosts
                        .map(value => ({ value, sort: Math.random() }))
                        .sort((a, b) => a.sort - b.sort)
                        .map(({ value }) => value)
                        .slice(0, limit);
*/
        const posts = postsResponse.data;
        const photos = photosResponse.data;
        
        const combinedData = posts.map((post) => {
          const photo = photos.find((photo) => photo.id === post.id);
    
          return {
            userId: post.userId,
            id: post.id,
            title: post.title,
            thumbnail: photo ? photo.thumbnailUrl : placeholderThumbnail,
          };
        });  
      console.log("Combined Data: ", combinedData);
      res.json(combinedData);
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({ message: 'Error fetching data from external APIs' });
    }
});
  
app.get("/post/:id", async (req, res) => {
  const { id } = req.params;

    switch (id) {
        case '0':
                var specialData = {
                    userId: 1,
                    id: 0,
                    title: "Single Post",
                    safeSubheader: "Subheading for description or instructions",
                    safeParagraph1:
                        "Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:",
                    safeParagraph2:
                        "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure.",
                    safeParagraph3:
                        "Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.",
                    photo:
                        "https://s3-alpha-sig.figma.com/img/031d/ee8a/d390261e0a59354a086f7e9a9be4cb3b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V3k9wXCLkCtTIBoabv3fDe5aKBR1ehLEZ0cs4tWF~GeI3sSdJz7g3gnvMdWFh0mQ-aH-qKR8L4d5idfSn0p1BIxO5aM6gm0HPgFHbOh7UjMAekKcb9R-BuZGBc5r4DtQr5zStSj0yHHeWH7HhSjz-6imsmhCD3EtLM-AoSNLXF6CodAq7nN-z-k5edbBDBx950g3o5VZcWvcLQc2MosoDh-tWpRkLsqRillHvf90Sn3~mR4SBqJsku0vFu9y6yGT7VUKhU9lB-bAq58kbiI8iV~QRrcdXwn6UEIpoVlKNyrnQIWtCIJGC0C6OQdwu6wbxQQrgeYu520YDurZQerjqA__"
                };
            return res.json(specialData);;
        case 'intro':
                var specialData = {
                    userId: 10,
                    id: 10,
                    title: "Posts List",
                    IntroLine1: "Subheading that sets up context, shares more info about the",
                    IntroLine2: "author, or generally gets people psyched to keep reading",
                    paragraph1:
                        "Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:",
                    paragraph2:
                        "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.",
                    paragraph3:
                        "Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.",
                    paragraph4:"Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.",
                    paragraph5:"Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.",
                    photo:
                    "https://s3-alpha-sig.figma.com/img/1481/875b/94ba2048fe9940fe0061a0819ceed048?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJFPRPDN2p~dAQpOUxl2FftECfr4puE-e9GefUQDon9PkYARtCBzOn-8XQ3sBcCejmRPp3jWHxnA9afy7Ep95gCuBIwM6BRw8NkPVDJq9EGtADGaxq4RCcWAyUoOC14ornYlVQm9qOu0hBm2QKjooPBcz5zm3pMVgJLHTK4khYHsxCGU3z6Rnd1wrXevfbKWzIZnKYxjS4~YBlK7loqoJ8fQavJ4CPWD-bR5OCnYIY4P57tCrKeo3pJHZWWwwnut84ToN~NQClI2glmS6ZnKSNAnLMDkM7Yt4NhpHRdsRa8~xh9x1HqPZL9lg7rVesLNQCnbw7NphN0drGr7t4Uw1A__",
                    photo2:
                    "https://s3-alpha-sig.figma.com/img/7e48/40b3/1c503e489a78910497ed513b9fbd8cba?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lQQAtjKIhW-3GKGGdxAV0EZqTGLdDXwUityl81fHils5v3l5z00EvMPNy47hcnW9AFha0qajFKCGi6QvRUCZ-u-VLGoxkKmYdamEhEV0xZiL2xgWiqGQ8wdjM-Vh1cntuc9ns5psvEze~7Vtd1eFoYK4xnorTHyFtNElrGGD0jkvnj~1G-~NMyuE1yWbbuC0461cGOcNrjkqTUwHAV-0pkn9PcvWdAJe-xra8jN9bOntU8RDvyxM0efCxDB8jdfU~CIserzmXA62AmCmtpVqqbAAOtSEkjb2bcBo-AjEIu1L1lywwRnAXm56npVZKiZsyanCOYjaHlnzh5DW7-DF6A__",
                    photo3:
                    "https://s3-alpha-sig.figma.com/img/fd5a/0887/5978c5ebf87cd49bf2e51ecdfcd19dc4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rru5ZM3HUAWB6XVy5msaqFj7PlsI5gjPLvPXA3t-gInDMQPmFF6Gs6ED8HLMSe9XJMR30vJFMgNTpbYguCPcvIgbpPsaNhej-hGHVdxu2HO560Q8vNE09xvBlr9UeLC~OYmVYtedFM1rs4LjYDQ2zMco~itM2BTABgpztyrewfSwvx-nx5QwS9KbpT~jz4aRza~jEsz1KZ1SSUEVcNvtTTEYfcXECuF3rsvDyzWlIlDv5Yl1yU92w6Wk5aSkUEODHigTFegefd024o3eOdj7-KwIXKVx07iAxJr9dv5BzQ3VhkK8KMYlaSQ-5t~gxpxdNF-keFCCqzPMpF4JUVDzUg__"
                };    
            return res.json(specialData);;
    }

  try {
    const [postResponse, photoResponse] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
      axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`),
    ]);

    const post = postResponse.data; console.log("post: ",post);
    const photo = photoResponse.data; console.log("photo: ",photo);

    const [subheader, paragraph1, paragraph2, paragraph3] = post.body.split("\n");

    const safeSubheader = subheader || "";
    const safeParagraph1 = paragraph1 || "";
    const safeParagraph2 = paragraph2 || "";
    const safeParagraph3 = paragraph3 || "";

    const combinedData = {
      userId: post.userId,
      id: post.id,
      title: post.title,
      safeSubheader,
      safeParagraph1,
      safeParagraph2,
      safeParagraph3,
      photo: photo.url,
    };
    console.log("Combined: ",combinedData);
    res.json(combinedData);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ message: 'Error fetching data from external APIs' });
  }
});

app.get("/todos", async (req, res) => {
  try {
      const [todoResponse] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/todos"),
      ]);

      const todos = todoResponse.data;
      
      const combinedData = todos.map((todo) => {
        return {
          userId: todo.userId,
          id: todo.id,
          title: todo.title,
          completed: todo.completed ,
        };
      });  
    console.log("Combined Data: ", combinedData);
    res.json(combinedData);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ message: 'Error fetching data from external APIs' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});