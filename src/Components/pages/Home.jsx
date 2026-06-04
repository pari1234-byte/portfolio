import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#f5f2eb] px-4 md:px-8 lg:px-14  pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="relative bg-[#faf8f4] border border-[#e8e2d8] rounded-[28px] shadow-[0_15px_50px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Background Blur */}
          <div className="absolute -top-20 -right-20 w-55 h-55 bg-[#dce7d7] rounded-full blur-3xl opacity-40"></div>

          <div className="grid lg:grid-cols-2 gap-8 items-center px-6 md:px-10 py-10 md:py-14 relative z-10">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#eef3ea] text-[#5b7b61] px-4 py-2 rounded-full text-xs font-medium shadow-sm mb-5">
                <GraduationCap size={16} />
                Dedicated Educator
              </div>

              {/* Heading */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1f2937] mb-5">
                Inspiring
                <span className="block text-[#5f7f65] mt-1">Young Minds</span>
              </h1>

              {/* Description */}
              <p className="text-[#5f646d] text-base leading-relaxed max-w-xl mb-8">
                Passionate teacher focused on creating engaging learning
                experiences, empowering students, and building a positive
                classroom environment for growth and creativity.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="bg-[#5f7f65] hover:bg-[#4f6f52] text-white px-6 py-3 rounded-2xl font-medium flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-105">
                  View Portfolio
                  <ArrowRight size={18} />
                </button>

                <Link to="/about">
                  <button className="bg-white border border-[#d9d4cb] hover:border-[#5f7f65] text-[#374151] hover:text-[#5f7f65] px-6 py-3 rounded-2xl font-medium shadow-sm transition-all duration-300">
                    About Me
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Card */}
                <div className="bg-white rounded-2xl p-4 shadow-md border border-[#ece7dd]">
                  <div className="w-12 h-12 rounded-xl bg-[#eef3ea] flex items-center justify-center mb-3 text-[#5f7f65]">
                    <BookOpen size={22} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1f2937]">4+</h3>

                  <p className="text-[#6b7280] text-sm mt-1">Subjects</p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-4 shadow-md border border-[#ece7dd]">
                  <div className="w-12 h-12 rounded-xl bg-[#eef3ea] flex items-center justify-center mb-3 text-[#5f7f65]">
                    <Users size={22} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1f2937]">1200+</h3>

                  <p className="text-[#6b7280] text-sm mt-1">Students</p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-4 shadow-md border border-[#ece7dd]">
                  <div className="w-12 h-12 rounded-xl bg-[#eef3ea] flex items-center justify-center mb-3 text-[#5f7f65]">
                    <Award size={22} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1f2937]">10+</h3>

                  <p className="text-[#6b7280] text-sm mt-1">Awards</p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-4 shadow-md border border-[#ece7dd]">
                  <div className="w-12 h-12 rounded-xl bg-[#eef3ea] flex items-center justify-center mb-3 text-[#5f7f65]">
                    <GraduationCap size={22} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1f2937]">8+</h3>

                  <p className="text-[#6b7280] text-sm mt-1">Years</p>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-107.5">
                {/* Floating Achievement Card */}
                <div className="absolute -top-6 -left-4 bg-white shadow-xl rounded-2xl px-5 py-4 border border-[#ece7dd] z-20 hidden md:block">
                  <p className="text-[#5f7f65] font-medium text-xs mb-1">
                    Teacher of the Year
                  </p>

                  <h4 className="text-xl font-bold text-[#1f2937]">2025</h4>
                </div>

                {/* Image Container */}
                <div className="bg-linear-to-br from-[#dfe9da] to-[#f3f0e9] rounded-[30px] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.10)] border border-[#e5e0d6] relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/40 blur-xl"></div>

                  <img
                    src={`${import.meta.env.BASE_URL}assets/Safinaaaz.png`}
                    alt="Teacher"
                    className="w-full h-105 md:h-120 object-cover rounded-3xl shadow-xl"
                  />

                  {/* Bottom Info Card */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-[#ece7dd]">
                    <h3 className="text-xl font-bold text-[#1f2937] mb-1">
                      Safinza Naz
                    </h3>

                    <p className="text-[#5f7f65] text-sm font-medium mb-3">
                      English Literature Teacher
                    </p>

                    <div className="flex items-center justify-between text-xs text-[#6b7280]">
                      <span>Creative</span>
                      <span>Leadership</span>
                      <span>Growth</span>
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
      {/* TEACHING PHILOSOPHY */}
      <div className="mt-12 bg-[#faf8f4] border border-[#e8e2d8] rounded-[28px] p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-[#1f2937] mb-4">
          Teaching Philosophy
        </h2>

        <p className="text-[#5f646d] leading-relaxed text-base">
          I believe that every learner possesses unique potential and deserves
          an engaging, inclusive, and supportive learning environment. Effective
          teaching goes beyond delivering content; it inspires curiosity,
          critical thinking, creativity, and lifelong learning. Through
          learner-centered approaches and meaningful classroom interactions, I
          strive to empower students to become confident, independent, and
          successful individuals.
        </p>
      </div>

      {/* PROFESSIONAL IDENTITY & CAREER GOALS */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white border border-[#ece7dd] rounded-3xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-[#1f2937] mb-4">
            Professional Identity
          </h3>

          <p className="text-[#5f646d] leading-relaxed">
            English Literature Teacher, lifelong learner, mentor, and
            educational leader committed to fostering academic excellence,
            personal growth, and innovative learning experiences.
          </p>
        </div>

        <div className="bg-white border border-[#ece7dd] rounded-3xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-[#1f2937] mb-4">
            Career Goals
          </h3>

          <p className="text-[#5f646d] leading-relaxed">
            To continue developing innovative teaching practices, integrate
            educational technology effectively, contribute to professional
            development initiatives, and inspire future generations of learners
            through excellence in education.
          </p>
        </div>
      </div>

      {/* ELT TRENDS */}
      <div className="mt-8 bg-white border border-[#ece7dd] rounded-3xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-[#1f2937] mb-5">
          Areas of Professional Interest
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "AI in Education",
            "Digital Learning",
            "CALL",
            "Task-Based Learning",
            "Gamification",
            "Flipped Classroom",
            "Student-Centered Learning",
            "Educational Technology",
            "Collaborative Learning",
            "Assessment for Learning",
          ].map((item) => (
            <span
              key={item}
              className="bg-[#eef3ea] text-[#5f7f65] px-4 py-2 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* PORTFOLIO PURPOSE */}
      <div className="mt-8 bg-[#faf8f4] border border-[#e8e2d8] rounded-3xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-[#1f2937] mb-4">
          Portfolio Purpose
        </h2>

        <p className="text-[#5f646d] leading-relaxed">
          This portfolio showcases my professional journey, educational
          experiences, achievements, teaching practices, webinar participation,
          symposium presentations, and continuous commitment to personal and
          professional growth. It serves as a reflection of my dedication to
          quality education and lifelong learning.
        </p>
      </div>

      {/* REFLECTIVE STATEMENT */}
      <div className="mt-8 mb-4 bg-[#eef3ea] border border-[#dce7d7] rounded-3xl p-8 text-center">
        <p className="text-xl italic text-[#4f6f52] font-medium leading-relaxed">
          "Every teaching experience is an opportunity to learn, reflect, grow,
          and inspire others to achieve their fullest potential."
        </p>
      </div>
    </section>
  );
};

export default Home;
