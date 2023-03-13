import Card from "./Card";
function Profile() {
  return (
    <>
      <div>
        <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Image Url"
          width={70}
          height={70}
        />
        </Card>
        <Card>
        <h1>About</h1>
        <p>Hey! ABdurraheman, What's going on.</p>
        </Card>
      </div>
    </>
  );
}

export default Profile;
