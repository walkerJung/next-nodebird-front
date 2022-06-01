import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "WalkerJung" },
    { nickname: "걷는사람" },
    { nickname: "쨱쨱" },
  ];
  const followingList = [
    { nickname: "WalkerJung" },
    { nickname: "걷는사람" },
    { nickname: "쨱쨱" },
  ];
  return (
    <>
      <Head>
        <title>NodeBird | 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
