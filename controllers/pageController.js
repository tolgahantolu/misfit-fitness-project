exports.getHomePage = async (req, res) => {
  res.status(200).render("index", {
    page_name: "home",
  });
};

exports.getAboutPage = async (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};

exports.getServicePage = async (req, res) => {
  res.status(200).render("service", {
    page_name: "service",
  });
};

exports.getNewsPage = async (req, res) => {
  res.status(200).render("news", {
    page_name: "news",
  });
};

exports.getTrainerPage = async (req, res) => {
  res.status(200).render("trainer", {
    page_name: "trainer",
  });
};

exports.getGalleryPage = async (req, res) => {
  res.status(200).render("gallery", {
    page_name: "gallery",
  });
};

exports.getContactPage = async (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
};
