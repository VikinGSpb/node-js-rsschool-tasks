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

const getAllBoards = async () => [...DB[1]];

const getBoard = async id => DB[1].find(el => el.id === id);

const createBoard = async board => {
  DB[1].push(board);
  return board;
};

const updateBoard = async (id, boardFieldsForUpdate) => {
  let updatedBoard;
  DB[1].forEach((el, idx) => {
    if (el.id === id) {
      for (const key in DB[1][idx]) {
        if (Object.keys(boardFieldsForUpdate).includes(key)) {
          DB[1][idx][key] = Array.isArray(boardFieldsForUpdate[key])
            ? [...boardFieldsForUpdate[key]]
            : boardFieldsForUpdate[key];
        }
      }
      updatedBoard = { ...DB[1][idx] };
      return;
    }
  });
  return updatedBoard;
};

const deleteBoard = async id => {
  let deletedBoard;
  DB[1].forEach((el, idx) => {
    if (el.id === id) {
      deletedBoard = DB[1].splice(idx, 1);
      return;
    }
  });
  return deletedBoard[0];
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
};
