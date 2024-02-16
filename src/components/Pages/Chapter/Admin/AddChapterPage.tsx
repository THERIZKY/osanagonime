const AddChapterPage = () => {
	return (
		<div>
			<div>
				<label className="input input-bordered flex items-center gap-2">
					Name
					<input type="text" className="grow" placeholder="Daisy" />
				</label>
				<label className="input input-bordered flex items-center gap-2">
					Email
					<input type="text" className="grow" placeholder="daisy@site.com" />
				</label>
			</div>
			<div>
				<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
			</div>
		</div>
	);
};
export default AddChapterPage;
