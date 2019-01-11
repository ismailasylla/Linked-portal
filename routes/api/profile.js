const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Profile Model
const Profile = require('../../models/Profile');

//Load User Profile
const User = require('../../models/User');

// @route   Get api/profile/test
// @desc    Test Profile Route
// @access  public Route
router.get('/test', (req, res) => {
  res.json({ msg: 'profile works ' });
});

// @route   Get api/profile
// @desc    Get Current User's Profile
// @access  private Route
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
