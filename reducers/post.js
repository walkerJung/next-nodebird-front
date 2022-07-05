import shortid from "shortid";
import produce, { produceWithPatches } from "immer";

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
          id: shortid.generate(),
          src: "https://contents.lotteon.com/itemimage/_v175202/LO/15/10/38/86/83/_1/51/03/88/68/5/LO1510388683_1510388685_1.jpg/dims/optimize/dims/resizemc/360x360",
        },
        {
          id: shortid.generate(),
          src: "https://contents.lotteon.com/itemimage/_v175202/LO/15/10/38/86/83/_1/51/03/88/68/5/LO1510388683_1510388685_1.jpg/dims/optimize/dims/resizemc/360x360",
        },
        {
          id: shortid.generate(),
          src: "https://contents.lotteon.com/itemimage/_v175202/LO/15/10/38/86/83/_1/51/03/88/68/5/LO1510388683_1510388685_1.jpg/dims/optimize/dims/resizemc/360x360",
        },
      ],
      Comments: [
        {
          id: shortid.generate(),
          User: {
            nickname: "hero",
          },
          content: "아 나도 사고싶다",
        },
        {
          id: shortid.generate(),
          User: {
            nickname: "zero",
          },
          content: "홀라이꼼",
        },
        {
          id: shortid.generate(),
          User: {
            nickname: "vero",
          },
          content: "꼼쫄라이",
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

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

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "WalkerJung",
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortid.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "WalkerJung",
  },
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPosts.find((v) => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      default:
        break;
    }
  });
export default reducer;
