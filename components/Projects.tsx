export default function Projects() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-cyan-400">
        Featured Projects
      </h2>

      <div className="max-w-4xl mx-auto mt-10 grid gap-6">
        <div className="border border-cyan-500 p-5 rounded-lg">
          <h3 className="text-xl font-bold">Gaming Investment Platform</h3>
          <p className="text-gray-400 mt-2">
            Automated ROI, wallet system, admin fraud control.
          </p>
        </div>

        <div className="border border-cyan-500 p-5 rounded-lg">
          <h3 className="text-xl font-bold">Payment Gateway Automation</h3>
          <p className="text-gray-400 mt-2">
            bKash, Nagad, manual & API based transactions.
          </p>
        </div>
      </div>
    </section>
  );
}
