export default function AdminAnime() {
	return (
		<>
			<div className="w-screen min-h-screen bg-slate-600">
				<div className="flex flex-col items-center">
					<h1 className="p-5 text-3xl text-white font-bold">
						List Anime
					</h1>
					<table className="border-y-2 w-3/4 text-center text-white">
						<thead>
							<tr>
								<th>No</th>
								<th>Cover</th>
								<th>Judul</th>
								<th>Deskripsi</th>
								<th>Aksi</th>
							</tr>
						</thead>
						<tbody>
							<tr></tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
