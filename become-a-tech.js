export default function BecomeATech() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Become a Technician</h1>
      <form method="POST" action="https://hooks.zapier.com/hooks/catch/22745866/2pchoh2/" className="space-y-4">
        <input name="name" placeholder="Your Name" required className="w-full border p-2" />
        <input name="email" type="email" placeholder="Your Email" required className="w-full border p-2" />
        <input name="phone" placeholder="Your Phone" className="w-full border p-2" />
        <textarea name="experience" placeholder="Your Experience" required className="w-full border p-2"></textarea>
        <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </main>
  );
}
