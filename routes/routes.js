const userModel = require('../models/userModel');
const blogPostModel = require('../models/blogPostModel');
const express = require('express');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const saltRounds = 10;

const router = express.Router();

module.exports = router;

// USER ROUTES

//Create new user
router.post('/postOne', async (req, res) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Generate a unique API key
    const apiKey = uuidv4();

    // Create a new user with the hashed password and API key
    const user = new userModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email: req.body.email,
      password: hashedPassword,
      apiKey: apiKey, // Assuming your userModel has a field for apiKey
    });

    // Save the new user
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all users
router.get('/getAll', async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get user by ID
router.get('/getOne/:id', async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update user by ID
router.patch('/updateOne/:id', async (req, res) => {
  try {
    // Authentication and authorization checks go here
    // ...

    // Find the user by ID
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields - only update fields that are provided
    if (req.body.firstName) user.firstName = req.body.firstName;
    if (req.body.lastName) user.lastName = req.body.lastName;
    if (req.body.age) user.age = req.body.age;
    if (req.body.email) user.email = req.body.email;
    if (req.body.password) {
      // Hash the new password if it's being updated
      user.password = await bcrypt.hash(req.body.password, saltRounds);
    }

    // Save the updated user
    const updatedUser = await user.save();
    // Optionally, remove sensitive data before sending the response
    updatedUser.password = undefined;
    updatedUser.apiKey = undefined;

    res.status(200).json(updatedUser);
  } catch (error) {
    // Generic error message to avoid exposing details
    res
      .status(500)
      .json({ message: 'An error occurred while updating the user' });
  }
});

//Delete user by ID
router.delete('/deleteOne/:id', (req, res) => {
  try {
    // Authentication and authorization checks go here
    // ...

    // Find the user by ID and delete them
    const user = userModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    // Generic error message to avoid exposing details
    res
      .status(500)
      .json({ message: 'An error occurred while deleting the user' });
  }
});
