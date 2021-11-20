const UserService = require("../services/users");

const userService = new UserService();

const getAllUsers = (req, res, next) => {
  try {
    const users = userService.getUsers();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const postUser = (req, res, next) => {
  try {
    const body = req.body;
    userService.addUser(body);
    return res.status(200).json({ user: body });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getUser = (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const user = userService.getUserById(id);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const putUser = (req, res, next) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const newUser = userService.updateUser(id, body);
    return res.status(200).json({ user: newUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteUser = (req, res, next) => {
  try {
    const id = req.params.id;
    const message = userService.deleteUser(id);
    return res.status(200).json({ message });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  postUser,
  getUser,
  putUser,
  deleteUser,
};
