const DB = [[], [], []];

const getAllUsers = async () => [...DB[0]];

const getUser = async id => DB[0].find(el => el.id === id);

const createUser = async user => {
  DB[0].push(user);
  return user;
};

const updateUser = async (id, userFieldsForUpdate) => {
  let updatedUser;
  DB[0].forEach((el, idx) => {
    if (el.id === id) {
      for (const key in DB[0][idx]) {
        if (Object.keys(userFieldsForUpdate).includes(key)) {
          DB[0][idx][key] = userFieldsForUpdate[key];
        }
      }
      updatedUser = { ...DB[0][idx] };
      return;
    }
  });
  return updatedUser;
};

const deleteUser = async id => {
  let deletedUser;
  DB[0].forEach((el, idx) => {
    if (el.id === id) {
      deletedUser = DB[0].splice(idx, 1);
      return;
    }
  });
  return deletedUser[0];
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
