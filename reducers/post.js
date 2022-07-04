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
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
