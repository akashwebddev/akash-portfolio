export default function Skills() {
  const skills: string[] = [
    "Gaming Investment System",
    "Gaming API Integration",
    "Payment Gateway Automation",
    "Wallet & Escrow Logic",
    "Webhook Security",
    "Admin Fraud Control",
  ];

  return (
    <section className="bg-gray-950 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-purple-500">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-black border border-purple-700 rounded-lg p-4 text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
