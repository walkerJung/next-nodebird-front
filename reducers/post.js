export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "WalkerJung",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스???",
      Images: [
        {
          src: "https://contents.lotteon.com/itemimage/_v175202/LO/15/10/38/86/83/_1/51/03/88/68/5/LO1510388683_1510388685_1.jpg/dims/optimize/dims/resizemc/360x360",
        },
        {
          src: "https://contents.lotteon.com/itemimage/_v175202/LO/15/10/38/86/83/_1/51/03/88/68/5/LO1510388683_1510388685_1.jpg/dims/optimize/dims/resizemc/360x360",
        },
        {
          src: "https://contents.lotteon.com/itemimage/_v175202/LO/15/10/38/86/83/_1/51/03/88/68/5/LO1510388683_1510388685_1.jpg/dims/optimize/dims/resizemc/360x360",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "hero",
          },
          content: "아 나도 사고싶다",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";

const dummyPost = {
  id: 2,
  content: "dummy data",
  User: {
    id: 1,
    nickname: "WalkerJung",
  },
  Images: [],
  Comments: [],
};

export const addPost = {
  type: ADD_POST,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      };
    default:
      return state;
  }
};

export default reducer;
