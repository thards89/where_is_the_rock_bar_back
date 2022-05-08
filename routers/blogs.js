const { Router } = require("express");
const auth = require("../auth/middleware");
const router = new Router();
const Blog = require("../models").blog;
const MoreImage = require("../models").moreImage;
const User = require("../models").user;

router.post("/createblog", async (req, res) => {
  console.log(req.body);
  const { title, description, urls, location, place, visitedOn, userId } =
    req.body;

  //console.log(urls);
  const firstImage = urls.shift();

  // urls now has 1 less element because we took it out to firstImage

  const blog = await Blog.create({
    title,
    description,
    mainImageUrl: firstImage,
    name_of_place: place,
    location,
    visitedOn,
    userId,
  });

  // an array of urls

  // const promises = urls.map(async url => await MoreImage.create({ ImageUrl: url, blogId: blog.id }))

  // await Promise.all(promises);

  const toInsert = urls.map((url) => ({ ImageUrl: url, blogId: blog.id }));
  console.log(MoreImage);
  const inserted = await MoreImage.bulkCreate(toInsert);

  const wholeBlog = await Blog.findByPk(blog.id, { include: [MoreImage] });

  return res.status(201).send({ message: "Blog created", blog: wholeBlog });
});
router.get("/viewblog", async (req, res) => {
  try {
    const getblog = await Blog.findAll({
      include: MoreImage,
    });
    res.send(getblog);
  } catch (e) {
    console.log(e);
  }
});

router.get("/viewblogwithusername", async (req, res) => {
  try {
    const getBlogWithUserName = await Blog.findAll({
      include: {
        model: User,
        attributes: ["name"],
      },
    });
    res.send(getBlogWithUserName);
  } catch (e) {
    console.log(e);
  }
});

router.delete("/delete/:blogId", async (req, res) => {
  try {
    const blogToBeDeleted = await Blog.findByPk(req.params.blogId);
    if (!blogToBeDeleted) {
      res.status(400).send("Blog does not exist");
    } else {
      await blogToBeDeleted.destroy();
      res.send("Blog deleted");
    }
}
catch (e) {
  console.log(e);
}
});

router.get("/viewblog/:id",async(req,res)=>{
  try{
   
     const { id } = req.params;
      const getblogbyid = await Blog.findByPk(id,{include:MoreImage}); 
      console.log("getblogbyId",getblogbyid);                      
      res.send(getblogbyid);
  } catch (error) {
    res.send("Something went wrong");
  }
});
module.exports = router;
