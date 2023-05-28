const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('assets/banner/banner.webp')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="lg:grid grid-cols-2 gap-6 justify-around bg-gradient-to-l from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="hidden lg:block carousel carousel-vertical" style={{ maxHeight: "500px" }}>
          <div className="carousel-item h-full">
            <img src="assets/toy_4.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="assets/toy_1.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="assets/toy_3.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="assets/toy_2.jpg" />
          </div>
        </div>
        <div className="text-white space-y-8 py-10 px-4 lg:px-0">
          <h1 className="lg:text-6xl text-xl font-bold">
            Welcome to Figure Universe - Where Imagination Comes to Life!
          </h1>
          <p>
            Introducing Figure Universe, your ultimate destination for action
            figures. Immerse yourself in a realm of heroes, villains, and epic
            battles. Discover a vast universe of collectibles and ignite your
            imagination. Unleash your inner hero at Figure Universe!
          </p>
          <button className="btn active border-none btn-outline btn-xl">Subtribe</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
