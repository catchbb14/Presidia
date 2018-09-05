/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('index', {
    title: 'Presidia - Home'
  });
};

exports.about = (req, res) => {
  res.render('about', {
    title: 'Presidia - About Us'
  });
};

exports.services = (req, res) => {
  res.render('services', {
    title: 'Presidia - Services'
  });
};

exports.projects = (req, res) => {
  res.render('projects', {
    title: 'Presidia - Projects'
  });
};

exports.contact = (req, res) => {
  res.render('contact', {
    title: 'Presidia - Contact Us'
  });
};