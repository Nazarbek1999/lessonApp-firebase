import { Tuple, configureStore, createSlice } from "@reduxjs/toolkit";
import apiMiddleware from "./apiMiddle";

const countSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    video: [],
    lessonsVideos:"",
    isOpen: false,
    isOpen2: false,
    lessonObj: {
      lessonName: "",
    },
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
   
    },
    openRodal: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    addInp: (state, action) => {
      state.video.push({
        vidName: "",
        vidLink: "",
      });
    },
    addLessonname: (state, action) => {
      state.lessonObj = { ...state.lessonObj, lessonName: action.payload };
    },
    vName:(state, action)=>{
      state.video[action.payload.index].vName=action.payload.value
    },
    vLink:(state, action)=>{
      state.video[action.payload.index].vLink=action.payload.value
    },
    deleteInp:(state, action)=>{
      state.video.splice(action.payload , 1)
    },
    view:(state, action)=>{
      state.isOpen2=!state.isOpen2
      state.lessonsVideos=action.payload

    }

  },
});

function loadUsers() {
  return {
    type: "apiCall",
    payload: {
      method: "GET",
      path: "todos",
      onSuccess: countSlice.actions.getUsers,
    },
  };
}
function saveUser(data) {
  return {
    type: "apiCall",
    payload: {
      method: "POST",
      path: "todos",
      data,
      onSuccess: loadUsers,
    },
  };
}
function deleteUser(id) {
  return {
    type: "apiCall",
    payload: {
      method: "DELETE",
      path: "todos",
      id,
      onSuccess: loadUsers,
    },
  };
}

const store = configureStore({
  reducer: countSlice.reducer,
  middleware: () => new Tuple(apiMiddleware),
});
export const action = {
  ...countSlice.actions,
  loadUsers,
  saveUser,
  deleteUser,
};
export default store;
