const Comment = ({ data }) => {
  return (
    <div className="flex p-2 bg-gray-100 mt-4 shadow-md shadow-gray-300">
      <div className="">
        <img
          className="h-13 w-28 border border-black rounded-full "
          src="https://imgs.search.brave.com/EUXDaA5JkBchSWkVHhkWSPihcXVc_fA_lEFzge7pyZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzg5LzU5LzU1/LzM2MF9GXzI4OTU5/NTU3M193Q0tPMW54/eHg3SEdrNjl6NXN6/anZTT3FQblpWVGZU/Ry5qcGc"
          alt="user"
        />
      </div>
      <div className="ml-4">
        <div className=" font-bold">{data.name}</div>
        <div className="text-sm">{data.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
