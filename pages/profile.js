import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
} from "../reducers/user";

const Profile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []);
  useEffect(() => {
    if (!me) {
      router.push("/");
      return null;
    }
  }, []);

  return (
    <>
      <Head>
        <title>NodeBird | 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me?.Followings} />
        <FollowList header="팔로워" data={me?.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
