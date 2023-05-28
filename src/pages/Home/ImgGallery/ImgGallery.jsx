import Gallery from "react-photo-gallery";

const ImgGallery = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1558679908-541bcf1249ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      width: 4,
      height: 3,
    },
    {
      src: "https://images.unsplash.com/photo-1584994696678-3d739b5ac1bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1559535332-db9971090158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      width: 8,
      height: 4,
    },
    {
      src: "https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      width: 5,
      height: 2,
    },
    {
      src: "https://images.unsplash.com/photo-1608889825271-9696283ab804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      width: 4,
      height: 2,
    },
    {
      src: "https://images.unsplash.com/photo-1602306081673-f26c56e0c0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      width: 5,
      height: 2,
    },
  ];

  return (
    <div className="py-10">
      <h1 className="font-bold text-3xl text-center my-4">Gallery</h1>
      <div>
        <Gallery photos={photos} />
      </div>
    </div>
  );
};

export default ImgGallery;
