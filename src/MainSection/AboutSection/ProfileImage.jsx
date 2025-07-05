const ProfileImage = ({ Profileimg }) => {
  return (
    <div className="w-1/4  ">
      <img
        src={Profileimg}
        alt="image"
        className="rounded-lg shadow-2xl  mx-auto w-full hover:scale-105 duration-300 ease-in-out transition-all"
      />
    </div>
  );
};

export default ProfileImage;
