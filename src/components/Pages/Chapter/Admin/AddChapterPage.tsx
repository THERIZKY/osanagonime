"use client";
const AddChapterPage = () => {
  return (
    <div>
      <form
        className="flex flex-col gap-2 w-full pt-8 p-2"
        onSubmit={(e) => {
			e.preventDefault()
			console.log("TESTING")
		}}
      >
        <h1 className="text-3xl font-bold text-white">
          Add manga
        </h1>
        <label className=" flex flex-col gap-1 ">
          Judul Chapter
          <input
            type="text"
            className=" input input-bordered grow bg-transparent focus:outline-sky-500 focus:outline-2 "
            placeholder="Judul Chapter"
          />
        </label>
        <label className="flex flex-col gap-1" htmlFor="chapter">
          Chapter
          <input
            type="number"
            className="grow input bg-transparent input-bordered"
            name="chapter"
		    placeholder="1"
          />
        </label>
        <label htmlFor="" className=" flex flex-col gap-1">
          Manga
          <input
            type="text"
            list="manga"
            className="input input-bordered bg-transparent"
			placeholder="Manga"
          />
          <datalist id="manga">
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </datalist>
        </label>
        <label className="flex flex-col gap-1 h-32" htmlFor="chapter">
          Image
          <textarea
            className="grow input bg-transparent h-full p-2 input-bordered resize-none"
            name="chapter"
          />
        </label>
		<button type="submit" className="bg-sky-500 px-3 py-2 rounded-md w-full text-white font-semibold mt-2">Add Manga</button>
      </form>
    </div>
  );
};
export default AddChapterPage;
