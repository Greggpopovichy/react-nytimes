const axios = require("axios");
const router = require("express").Router();
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "&api-key=21b8277cdd6f472d9e08d9f9a5773292";
const articleController = "./controllers/articleController";

router.route("/")
    .get(articleController.findAll)
    .post(articleController.create);

router.get("/articles", (req, res) => {
    axios
        .get((BASEURL + APIKEY), { params: req.query })
        .then(({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
