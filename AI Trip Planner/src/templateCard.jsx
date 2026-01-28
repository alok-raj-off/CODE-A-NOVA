export default function MakeCards({ data }) {
  // If data is missing, don't show an empty card
  if (!data) return null;

   let asset = {
      fakeplace : './default.png'
   }

  return (
    <div className="border rounded-lg p-6 shadow-sm mb-6 bg-white max-w-4xl mx-auto">
      <h2 className="text-xl font-bold flex items-center gap-2 text-blue-600">
        ✈️ Trip to: {data.destination_name}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm">
        <p><strong>📍 Location:</strong> {data.destination_location}</p>
        <p><strong>💰 Budget:</strong> {data.destination_approx_budget}</p>
        <p><strong>⭐ Rating:</strong> {data.star_reviews}</p>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded-md border-l-4 border-blue-500">
        <h4 className="font-bold text-sm mb-2">📝 The Plan</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          {data.exact_environment_and_description}
        </p>
      </div>

      {data.image_url && (
       <div className="mt-4">
  <img 
    src={data.image_url} 
    alt={data.destination_name} // alt should be text, not a path
    className="rounded-lg w-full h-48 object-cover" 
    // ✅ This is the magic part that fixes the broken image:
    onError={(e) => {
      e.target.onerror = null; // Prevents infinite loops if default.png is also missing
      e.target.src = asset.fakeplace;
    }}
  />
</div>
      )}
    </div>
  );
}