import {
  Briefcase,
  GraduationCap,
  CalendarDays,
  School,
  Award,
  Users,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "English Lecturer",
      school: "Kips College ",
      year: "2020 - Present",
      description:
        "Leading advanced English literature classes while mentoring students in creative writing and public speaking.",
    },

    {
      title: "IELTS Trainer ",
      school: "Kips Preprations ",
      year: "2023 - 2025",
      description:
        "Training students in spoken English, IELTS prepration for academic and professional success.",
    },

    {
      title: "Federal Board Examiner",
      school: "Federal Board ",
      year: "2023 - Present",
      description:
        "Conducting fair and accurate assessment of students’ academic performance under Federal Board examination standards.",
    },
    {
      title: "Maths Teacher",
      school: "Sideeq Public School",
      year: "2018 - 2020",
      description:
        "Developed engaging classroom activities and interactive learning experiences for middle school students.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#f5f2eb] px-4 md:px-8 lg:px-14 py-14 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="relative bg-[#faf8f4] border border-[#e8e2d8] rounded-[28px] shadow-[0_15px_50px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Background Blur */}
          <div className="absolute -top-20 -right-20 w-55 h-55 bg-[#dce7d7] rounded-full blur-3xl opacity-40"></div>

          <div className="grid lg:grid-cols-2 gap-10 items-center px-6 md:px-10 py-10 md:py-14 relative z-10">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#eef3ea] text-[#5b7b61] px-4 py-2 rounded-full text-xs font-medium shadow-sm mb-5">
                <Briefcase size={16} />
                My Experience
              </div>

              {/* Heading */}
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#1f2937] mb-5">
                Building Strong
                <span className="block text-[#5f7f65] mt-1">
                  Educational Journeys
                </span>
              </h1>

              {/* Description */}
              <p className="text-[#5f646d] text-base leading-relaxed mb-8 max-w-xl">
                Over the years, I have worked with students from different
                educational backgrounds, helping them develop confidence,
                creativity, and academic excellence through modern teaching
                strategies.
              </p>

              {/* Timeline */}
              <div className="space-y-5">
                {experiences.map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-2xl border border-[#ece7dd] shadow-md p-5 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-2.5 top-8 w-5 h-5 bg-[#5f7f65] rounded-full border-4 border-[#f5f2eb]"></div>

                    <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-[#1f2937]">
                          {item.title}
                        </h3>

                        <div className="flex items-center gap-2 text-[#5f7f65] text-sm mt-1">
                          <School size={15} />
                          {item.school}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-[#eef3ea] text-[#5f7f65] px-3 py-2 rounded-xl text-sm font-medium">
                        <CalendarDays size={15} />
                        {item.year}
                      </div>
                    </div>

                    <p className="text-sm text-[#6b7280] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-107.5">
                {/* Floating Achievement Card */}
                <div className="absolute -top-5 -left-4 bg-white shadow-xl rounded-2xl px-5 py-4 border border-[#ece7dd] z-20 hidden md:block">
                  <p className="text-[#5f7f65] text-xs font-medium mb-1">
                    Professional Journey
                  </p>

                  <h4 className="text-xl font-bold text-[#1f2937]">8+ Years</h4>
                </div>

                {/* Main Image Card */}
                <div className="bg-linear-to-br from-[#dfe9da] to-[#f3f0e9] rounded-[30px] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.10)] border border-[#e5e0d6] relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/40 blur-xl"></div>
                  <img
                    src={`${import.meta.env.BASE_URL}assets/s3.png`}
                    alt="Experience"
                    className="w-full h-105 md:h-125 object-cover rounded-3xl shadow-xl"
                  />
                  s{/* Bottom Info Card */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-[#ece7dd]">
                    <h3 className="text-xl font-bold text-[#1f2937] mb-1">
                      Teaching Excellence
                    </h3>

                    <p className="text-[#5f7f65] text-sm font-medium mb-3">
                      Inspiring students through innovation
                    </p>

                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-[#eef3ea] rounded-xl py-3">
                        <div className="flex justify-center mb-1 text-[#5f7f65]">
                          <GraduationCap size={18} />
                        </div>

                        <p className="text-sm font-semibold text-[#1f2937]">
                          1200+
                        </p>

                        <span className="text-xs text-[#6b7280]">Students</span>
                      </div>

                      <div className="bg-[#eef3ea] rounded-xl py-3">
                        <div className="flex justify-center mb-1 text-[#5f7f65]">
                          <Award size={18} />
                        </div>

                        <p className="text-sm font-semibold text-[#1f2937]">
                          10+
                        </p>

                        <span className="text-xs text-[#6b7280]">Awards</span>
                      </div>

                      <div className="bg-[#eef3ea] rounded-xl py-3">
                        <div className="flex justify-center mb-1 text-[#5f7f65]">
                          <Users size={18} />
                        </div>

                        <p className="text-sm font-semibold text-[#1f2937]">
                          8+
                        </p>

                        <span className="text-xs text-[#6b7280]">Years</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Blur */}
                <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-full bg-[#dce7d7] blur-2xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
