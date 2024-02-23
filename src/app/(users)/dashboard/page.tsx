import Navbar from "@/components/Layouts/Navbar";

const Dashboard = () => {
	return (
		<div className="bg-gray-100 min-h-screen">
			<Navbar />

			{/* Manga Cards */}
			<div className="container mx-auto mt-8">
				{/* Map through your manga bookmarks and render cards */}
				{/* Example card structure */}
				<div className="bg-white rounded-lg shadow-md p-4 mb-4">{/* Display manga details (title, cover image, etc.) */}</div>
			</div>

			{/* Add Bookmark Form */}
			<div className="container mx-auto mt-4">
				{/* Create a form to add new manga bookmarks */}
				{/* Input fields for title, cover image URL, etc. */}
				{/* Handle form submission */}
			</div>
		</div>
	);
};

export default Dashboard;
