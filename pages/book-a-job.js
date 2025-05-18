export default function BookAJob() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book a Repair Job</h1>
      <form method="POST" action="https://hooks.zapier.com/hooks/catch/22745866/2pc6unb/" className="space-y-4">
        <input name="name" placeholder="Your Name" required className="w-full border p-2" />
        <input name="email" type="email" placeholder="Your Email" required className="w-full border p-2" />
        <input name="phone" placeholder="Your Phone" className="w-full border p-2" />
        <textarea name="issue" placeholder="Describe the issue" required className="w-full border p-2"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </main>
  );
}
