//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = ['Darcee', 'Stephen'];

// CORE CHALLENGE 2
router.post('/addUser', (req, res, next) => {
  const temp = req.body.newUser;
  const index = users.indexOf(temp);
  if (index > -1) {
    // STRETCH CHALLENGE 02
    res.send('<script>alert("Already entered that user."); window.location.href = "/ta02"; </script>');
      console.log('already entered that user');
  }
  else {
    users.push(temp);
  res.redirect('/ta02');
}
  });

// CORE CHALLENGE 3 -
router.post('/removeUser', (req, res, next) => {
  const removeUser = req.body.removeUser;
  const index = users.indexOf(removeUser);
  // STRETCH CHALLENGE 01
    if (index === -1) {
      res.send('<script>alert("There are no users with that name."); window.location.href = "/ta02"; </script>');
      console.log('Error: No users with that name.');
    }
    if (index > -1) {
      users.splice(index, 1);
    }
    res.redirect('/ta02');
  });

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: users
  });
});

module.exports = router;
