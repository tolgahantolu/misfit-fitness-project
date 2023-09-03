const express = require("express");
const pageController = require("../controllers/pageController");

const router = express.Router();

router.route("/").get(pageController.getHomePage);
router.route("/about").get(pageController.getAboutPage);
router.route("/service").get(pageController.getServicePage);
router.route("/news").get(pageController.getNewsPage);
router.route("/trainer").get(pageController.getTrainerPage);
router.route("/gallery").get(pageController.getGalleryPage);
router.route("/contact").get(pageController.getContactPage);

module.exports = router;
