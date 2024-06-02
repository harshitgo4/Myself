import React from 'react';

const FAQ = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-[50vh]">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">
          Work
        </h2>
        <p className="text-neutral-500 text-xl mt-3">
          Responsibilities and Participation
        </p>
      </div>
      <div className="grid gap-8 max-w-5xl mx-auto mt-8">
        {faqItems.map((item, index) => (
          <div className="py-5" key={index}>
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>{item.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                <div className="max-w-xs sm:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-4">
                  <div className="flex justify-center items-center">
                    <img className="w-max h-max scale-75" src={item.image} alt="Company logo" />
                  </div>
                  <div className="p-8">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                      {item.role} at {item.company}
                    </h2>
                    <p className="mt-2 text-gray-500"><strong>Type:</strong> {item.type}</p>
                    <p className="mt-2 text-gray-500">
                      <strong>Duration:</strong> {item.duration.start} to {item.duration.end} ({item.duration.length})
                    </p>
                    <p className="mt-2 text-gray-500"><strong>Location:</strong> {item.location.country} ({item.location.type})</p>
                    <div className="mt-4">
                      <strong>Responsibilities:</strong>
                      <ul className="list-disc list-inside mt-2 text-gray-500">
                        {item.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        ))}
        {faqex.a.map((item, index) => (
          <div className="py-5" key={index}>
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>{faqex.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                <div className="max-w-xs sm:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-4">
                  <div className="flex justify-center items-center">
                    <img className="w-max h-max scale-75" src={item.image} alt="Company logo" />
                  </div>
                  <div className="p-8">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                      {item.role} at {item.company}
                    </h2>
                    <p className="mt-2 text-gray-500"><strong>Type:</strong> {item.type}</p>
                    <p className="mt-2 text-gray-500">
                      <strong>Skills:</strong> {item.Skills.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

const faqItems = [
  {
    question: 'Internship',
    company: "Coding Ninjas",
    role: "Teaching Assistant in C++, DSA",
    type: "Internship",
    duration: {
      start: "Oct 2022",
      end: "Feb 2023",
      length: "5 months"
    },
    location: {
      country: "India",
      type: "Remote"
    },
    responsibilities: [
      "Mentoring",
      "Debugging",
      "C++",
      "Object-Oriented Programming (OOP)",
      "Data Structures"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRWFMWR0ZVJByGadksSMu-4evEfgQfORMEg&s"
  }
];

const faqex = {
  question: 'Participation',
  a: [
    {
      company: "Smart India Hackathon ",
      role: "Developer",
      type: "Tech",
      Skills: [
        "Frontend",
        "Debugging",
        "C++",
        "React",
        "Data Structures"
      ],
      image: "https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?fit=327%2C345&ssl=1"
    },
    {
      company: "HackByte Hackathon ",
      role: "Developer",
      type: "Tech",
      Skills: [
        "FullStack",
        "Debugging",
        "JavaScript",
        "React",
        "Data Structures"
      ],
      image: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/65d61a0621324_hackbyte-20.jpeg?d=700x400"
    }
  ]
};

export default FAQ;
