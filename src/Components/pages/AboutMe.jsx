import {
  User,
  GraduationCap,
  BookOpen,
  Award,
  Lightbulb,
  Heart,
} from "lucide-react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#f5f2eb] px-4 md:px-8 lg:px-14 py-14 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="relative bg-[#faf8f4] border border-[#e8e2d8] rounded-[28px] shadow-[0_15px_50px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Background Blur */}
          <div className="absolute -top-20 -left-20 w-55 h-55 bg-[#dce7d7] rounded-full blur-3xl opacity-40"></div>

          <div className="grid lg:grid-cols-2 gap-10 items-center px-6 md:px-10 py-10 md:py-14 relative z-10">
            {/* LEFT SIDE IMAGE */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-105">
                {/* Floating Card */}
                <div className="absolute -top-5 -right-4 bg-white shadow-xl rounded-2xl px-5 py-4 border border-[#ece7dd] z-20 hidden md:block">
                  <p className="text-[#5f7f65] text-xs font-medium mb-1">
                    Passionate Educator
                  </p>

                  <h4 className="text-xl font-bold text-[#1f2937]">
                    Since 2018
                  </h4>
                </div>

                {/* Image Container */}
                <div className="bg-linear-to-br from-[#dfe9da] to-[#f3f0e9] rounded-[30px] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.10)] border border-[#e5e0d6] relative overflow-hidden">
                  <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-white/40 blur-xl"></div>

                  <img
                    src={`${import.meta.env.BASE_URL}assets/Safina.png`}
                    alt="Teacher"
                    className="w-full h-105 md:h-125 object-cover rounded-3xl shadow-xl"
                  />

                  {/* Bottom Card */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-[#ece7dd]">
                    <h3 className="text-xl font-bold text-[#1f2937] mb-1">
                      Safina Naz
                    </h3>

                    <p className="text-[#5f7f65] text-sm font-medium mb-3">
                      English Language Teacher
                    </p>

                    <div className="flex items-center justify-between text-xs text-[#6b7280]">
                      <span>Creative</span>
                      <span>Mentor</span>
                      <span>Leader</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Blur */}
                <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-full bg-[#dce7d7] blur-2xl opacity-50"></div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#eef3ea] text-[#5b7b61] px-4 py-2 rounded-full text-xs font-medium shadow-sm mb-5">
                <User size={16} />
                About Me
              </div>

              {/* Heading */}
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#1f2937] mb-5">
                Helping Students
                <span className="block text-[#5f7f65] mt-1">Learn & Grow</span>
              </h1>

              {/* Description */}
              <p className="text-[#5f646d] text-base leading-relaxed mb-8 max-w-xl">
                I am a dedicated educator focused on building meaningful
                learning experiences through creativity, communication, and
                student-centered teaching methods. My goal is to inspire
                confidence, curiosity, and lifelong learning in every student.
              </p>

              {/* Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {/* Card */}
                <div className="bg-white rounded-2xl p-5 border border-[#ece7dd] shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#eef3ea] flex items-center justify-center text-[#5f7f65] mb-4">
                    <GraduationCap size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#1f2937] mb-2">
                    Education
                  </h3>

                  <p className="text-sm text-[#6b7280] leading-relaxed">
                    Master's Degree in English Linguistics and Educational
                    Leadership.
                  </p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-5 border border-[#ece7dd] shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#eef3ea] flex items-center justify-center text-[#5f7f65] mb-4">
                    <BookOpen size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#1f2937] mb-2">
                    Teaching Style
                  </h3>

                  <p className="text-sm text-[#6b7280] leading-relaxed">
                    Interactive and engaging classroom environment focused on
                    creativity and growth.
                  </p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-5 border border-[#ece7dd] shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#eef3ea] flex items-center justify-center text-[#5f7f65] mb-4">
                    <Award size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#1f2937] mb-2">
                    Achievements
                  </h3>

                  <p className="text-sm text-[#6b7280] leading-relaxed">
                    Recognized for student mentorship and innovative classroom
                    practices.
                  </p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-5 border border-[#ece7dd] shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#eef3ea] flex items-center justify-center text-[#5f7f65] mb-4">
                    <Lightbulb size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#1f2937] mb-2">
                    Philosophy
                  </h3>

                  <p className="text-sm text-[#6b7280] leading-relaxed">
                    Every student has unique potential that deserves support,
                    encouragement, and opportunity.
                  </p>
                </div>
              </div>

              {/* Quote Box */}
              <div className="bg-[#eef3ea] border border-[#dce7d7] rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#5f7f65] shadow-sm">
                  <Heart size={22} />
                </div>

                <div>
                  <h4 className="text-[#1f2937] font-semibold mb-1">
                    My Mission
                  </h4>

                  <p className="text-sm text-[#5f646d] leading-relaxed">
                    To inspire students to become confident learners, critical
                    thinkers, and compassionate individuals prepared for the
                    future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
