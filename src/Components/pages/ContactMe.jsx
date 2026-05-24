import {
  Mail,
  Phone,
  MapPin,
  Globe,
  GraduationCap,
  BookOpen,
  Clock3,
} from "lucide-react";

const ContactMe = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      value: "safinazk41@gmail.com",
      description: "Feel free to reach out anytime via email.",
      color: "bg-[#dfe9da]",
    },

    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      value: "+92 332 5785471",
      description: "Available during working hours.",
      color: "bg-[#efe3cf]",
    },

    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Islamabad, Pakistan",
      description: "Open for educational collaborations.",
      color: "bg-[#e7e2f6]",
    },

    {
      icon: <Globe size={24} />,
      title: "Website",
      value: "N/A",
      description: "Explore my academic portfolio online.",
      color: "bg-[#dce7f3]",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f5f2eb] px-3 md:px-6 lg:px-10 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* MAIN CONTAINER */}
        <div className="relative bg-[#faf8f4] border border-[#e8e2d8] rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* BLUR EFFECT */}
          <div className="absolute -top-20 -right-20 w-45 h-45 bg-[#dce7d7] rounded-full blur-3xl opacity-40"></div>

          <div className="relative z-10 grid lg:grid-cols-[340px_1fr] gap-6 p-5 md:p-7">
            {/* LEFT SIDE */}
            <div className="space-y-5">
              {/* HERO CARD */}
              <div className="bg-white rounded-3xl border border-[#ece7dd] shadow-sm p-6">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 bg-[#eef3ea] text-[#5b7b61] px-4 py-2 rounded-full text-xs font-medium mb-5">
                  <Mail size={15} />
                  Contact Information
                </div>

                {/* HEADING */}
                <h1 className="text-3xl md:text-4xl font-bold text-[#1f2937] leading-tight mb-4">
                  Let’s
                  <span className="block text-[#5f7f65] mt-1">Connect</span>
                </h1>

                {/* DIVIDER */}
                <div className="w-16 h-0.75 bg-[#5f7f65] rounded-full mb-5"></div>

                {/* DESCRIPTION */}
                <p className="text-[#5f646d] text-sm leading-relaxed mb-8">
                  Feel free to reach out for academic discussions,
                  collaborations, educational projects, and professional
                  opportunities.
                </p>

                {/* 3D DESIGN */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    {/* SHADOW */}
                    <div className="w-44 h-6 bg-black/10 blur-xl rounded-full absolute bottom-0 left-1/2 -translate-x-1/2"></div>

                    {/* CARD STACK */}
                    <div className="relative">
                      <div className="w-32 h-24 bg-[#d7c7af] rounded-[20px] shadow-lg rotate-[-10deg]"></div>

                      <div className="w-36 h-24 bg-[#7f9a77] rounded-[20px] shadow-lg rotate-6 -mt-20 ml-4"></div>

                      {/* ICON BOX */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-[28px] bg-linear-to-br from-[#355a42] to-[#254232] shadow-2xl flex items-center justify-center text-white">
                          <Mail size={42} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* QUOTE CARD */}
                <div className="bg-linear-to-br from-[#5f7f65] to-[#6f8f75] rounded-[20px] p-5 text-white shadow-lg">
                  <p className="text-sm leading-relaxed mb-4">
                    “Communication and collaboration are the foundations of
                    meaningful learning.”
                  </p>

                  <span className="text-white/80 text-xs">
                    — Educational Philosophy
                  </span>
                </div>
              </div>

              {/* QUICK INFO */}
              <div className="bg-white rounded-3xl border border-[#ece7dd] shadow-sm p-6">
                <h3 className="text-lg font-semibold text-[#1f2937] mb-6">
                  Quick Information
                </h3>

                <div className="space-y-5">
                  {/* ITEM */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5f7f65] text-white flex items-center justify-center shadow-md">
                      <GraduationCap size={22} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1f2937] mb-1">
                        Profession
                      </h4>

                      <p className="text-sm text-[#6b7280]">
                        Educator & Researcher
                      </p>
                    </div>
                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5f7f65] text-white flex items-center justify-center shadow-md">
                      <BookOpen size={22} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1f2937] mb-1">
                        Specialization
                      </h4>

                      <p className="text-sm text-[#6b7280]">
                        English Language Teaching
                      </p>
                    </div>
                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5f7f65] text-white flex items-center justify-center shadow-md">
                      <Clock3 size={22} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1f2937] mb-1">
                        Availability
                      </h4>

                      <p className="text-sm text-[#6b7280]">Monday – Friday</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              {/* TOP CARD */}
              <div className="bg-white rounded-[22px] border border-[#ece7dd] shadow-sm p-6 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] mb-3">
                  Contact Details
                </h2>

                <p className="text-sm md:text-base text-[#6b7280] leading-relaxed max-w-2xl">
                  You can contact me for educational collaborations, research
                  opportunities, workshops, seminars, and academic discussions.
                </p>
              </div>

              {/* CONTACT GRID */}
              <div className="grid md:grid-cols-2 gap-5 mb-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[22px] border border-[#ece7dd] shadow-sm hover:shadow-xl transition-all duration-300 p-5 group"
                  >
                    {/* TOP */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-16 h-16 rounded-[20px] flex items-center justify-center shadow-lg text-[#355a42] ${item.color}`}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* CONTENT */}
                    <h3 className="text-lg font-semibold text-[#1f2937] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[#5f7f65] font-medium text-sm md:text-base break-all mb-3">
                      {item.value}
                    </p>

                    <p className="text-sm text-[#6b7280] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* BOTTOM SECTION */}
              <div className="bg-white rounded-[22px] border border-[#ece7dd] shadow-sm p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* BOX */}
                  <div className="bg-[#f8f6f1] rounded-[20px] p-5 border border-[#ece7dd]">
                    <div className="w-14 h-14 rounded-2xl bg-[#5f7f65] text-white flex items-center justify-center shadow-md mb-4">
                      <Mail size={24} />
                    </div>

                    <h4 className="text-lg font-semibold text-[#1f2937] mb-2">
                      Email Support
                    </h4>
                    <p className="text-sm text-[#6b7280] leading-relaxed">
                      Fast responses for academic and professional inquiries.
                    </p>
                  </div>

                  {/* BOX */}
                  <div className="bg-[#f8f6f1] rounded-[20px] p-5 border border-[#ece7dd]">
                    <div className="w-14 h-14 rounded-2xl bg-[#5f7f65] text-white flex items-center justify-center shadow-md mb-4">
                      <Phone size={24} />
                    </div>

                    <h4 className="text-lg font-semibold text-[#1f2937] mb-2">
                      Phone Contact
                    </h4>

                    <p className="text-sm text-[#6b7280] leading-relaxed">
                      Available for scheduled meetings and discussions.
                    </p>
                  </div>

                  {/* BOX */}
                  <div className="bg-[#f8f6f1] rounded-[20px] p-5 border border-[#ece7dd]">
                    <div className="w-14 h-14 rounded-2xl bg-[#5f7f65] text-white flex items-center justify-center shadow-md mb-4">
                      <MapPin size={24} />
                    </div>

                    <h4 className="text-lg font-semibold text-[#1f2937] mb-2">
                      Location Access
                    </h4>

                    <p className="text-sm text-[#6b7280] leading-relaxed">
                      Open for educational events and collaborations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
