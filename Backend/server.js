const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/posts", async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 9;
        const placeholderThumbnail = 'https://via.placeholder.com/150'; 

        const [postsResponse, photosResponse] = await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/posts"),
            axios.get("https://jsonplaceholder.typicode.com/photos"),
        ]);
  
        let unshuffledPosts = postsResponse.data;
        const posts = unshuffledPosts
                        .map(value => ({ value, sort: Math.random() }))
                        .sort((a, b) => a.sort - b.sort)
                        .map(({ value }) => value)
                        .slice(0, limit);
  
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
                        "https://s3-alpha-sig.figma.com/img/1481/875b/94ba2048fe9940fe0061a0819ceed048?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=giW2bwPrzu6h5RjqQ0Gds21isIGxRjdfjl86yE0505gJgPvuRfdDEDGtw9Vk9LaOozcaeX4qQb3ELbXiSH42QBH6woi0S6g-ZaWx3C1bt-l~uiybva1DT44sN9dMny7HSb4bySbnp0~dPPqz2xYKg1ltVjBdBYU~dxoUPGWXy1Y3yD443rolKTmUgdHYqMKqhTMRlKjoETFs36Zwm9~x2gVitNB7b6~np7FhlN9SlPQtS8j2PzuxManxpvtSGkODS8aoAUGPUsmtuDyCwQtvsWRC1ZUskEvPIiZaXQEzrHh1s8dW2oA3MM~pVDw57Jq3UJnfLIyATg8reZPUjWXnQw__",
                    photo2:
                        "https://s3-alpha-sig.figma.com/img/7e48/40b3/1c503e489a78910497ed513b9fbd8cba?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KBOxdMfa59LGrBIS4Zjhzp8Pt9a9pOEjoY-vtD09GG81sWpAuW1QM99H1urN-d~Pbtu9G7~aMCJ8t19swLJbZwZufenR4ThfNs7OqKryjxJwBuppvAubUuRx-3JWvW~lKDj6lLjNP4WnQHr0HjxJD9kamqQ7T4dUX1dAaUrLl5UgpFwPU1TzlVC2UVr9SkGMEHASQ6NwT9nMqIXFCoeKnnKAWWj1L5uKeSDBxgf2tFVIRMyoAZRdL1AJJ-Tb~ZB-lb14GNRzKmIZPh7tb2EOO420wHXljj2YLef2TRuhMakjAufJMjYk28XkezkqSFTSDNBWODZkfyIE6GGt8IJymQ__",
                    photo3:
                        "https://s3-alpha-sig.figma.com/img/fd5a/0887/5978c5ebf87cd49bf2e51ecdfcd19dc4?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WeDuHiO1HTrt4Ad0VHphqK7Y67l~ilEGrEWH1OLTcadbscABkOPR9yru1hk9yhvVNM4UdNf6wEHsnSTt2uUDFBjfBr4SOumwfs6-GZTE0UGsHPLasfdwOUXFOIBP-9N1UFKnTwhloChzNrQbgR9cdpR6Pd4tf9PnFJpKxuVkjiG4fUF~gSYfLwmDd33DUcgTGU2H2t09HMAeRlsvBdmQqo-PK055XGSM2mBVH7ZFI5RV8xm7qF2lYasN109ExYp~OtfrcxUB9RUv1~CJzZO0zGxLIpdqGsXSZPt1aGoIr5h9IzosND9fXLOpen4ceqzKHQzVGa31joe16~0U9vMZYQ__"
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


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});