import { useState } from "react";
import {
  Search,
  BookOpen,
  Trophy,
  Target,
  FileText,
  GraduationCap,
  Lightbulb,
  Star,
  ArrowRight,
  X,
} from "lucide-react";

const Research = () => {
  /* ----------------------------- STATES ----------------------------- */

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPublication, setSelectedPublication] = useState(null);

  /* -------------------------- PUBLICATIONS -------------------------- */

  const publications = [
    {
      type: "Conference Paper",
      title:
        "A Critical Study of Morality Discourse and National Identity in the Federal Board English Textbook (HSSC II)",
      journal: "",
      year: "",
      volume: "",
      icon: <BookOpen size={24} />,
      color: "bg-[#dfe9da]",
    },

    {
      type: "Conference Paper",
      title:
        "A Corpus-based Study of Language Structures and Presentation of Gender in Federal Board English Textbooks (HSSC-I & HSSC-II)",
      journal: "",
      year: "",
      volume: "",
      icon: <GraduationCap size={24} />,
      color: "bg-[#efe3cf]",
    },

    {
      type: "Journal Article",
      title:
        "Exploring English Language Teachers' Experiences of Using Artificial Intelligence in Technology-Enhanced Classrooms: A Case Study of HSSC English Classes at KIPS College",
      journal: "",
      year: "",
      volume: "",
      icon: <Star size={24} />,
      color: "bg-[#dfe9da]",
    },

    {
      type: "Research Paper",
      title: " How Dawn Newspaper Frames Language and Values in the AI Era ",
      journal: "",
      year: "",
      volume: "",
      icon: <FileText size={24} />,
      color: "bg-[#e7e2f6]",
    },

    {
      type: "Research Paper",
      title:
        "The Affective Power of Memes: Patriotism and Emotional Relief in Online Communities During Indo-Pak War 2025",
      journal: "",
      year: "",
      volume: "",
      icon: <Lightbulb size={24} />,
      color: "bg-[#efe3cf]",
    },

    {
      type: "Journal Article",
      title:
        "Saving Species Through Words A Positive Discourse Analysis of Wildlife Conservation Language in Pakistani Print Media The Dawn",
      journal: "",
      year: "",
      volume: "",
      icon: <Trophy size={24} />,
      color: "bg-[#dfe9da]",
    },
  ];

  const totalPublications = publications.length;

  const totalJournals = publications.filter(
    (item) => item.type === "Journal Article",
  ).length;

  const totalConferences = publications.filter(
    (item) => item.type === "Conference Paper",
  ).length;

  const researchAreas = [
    ...new Set(
      publications.map((item) => {
        if (item.type === "Journal Article") return "Educational Research";

        if (item.type === "Conference Paper") return "Teaching Innovation";

        if (item.type === "Research Paper") return "Learning Assessment";

        return "Education";
      }),
    ),
  ].length;

  /* ----------------------------- FILTER ----------------------------- */

  const filteredPublications = publications.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.journal.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || item.type === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-[#f5f2eb] px-3 md:px-6 lg:px-10 py-10 overflow-hidden">
      {/* ---------------- PUBLICATION MODAL ---------------- */}

      {selectedPublication && (
        <div className="fixed inset-0 z-999999 bg-black/70 flex items-center justify-center p-4">
          <div className="relative bg-white max-w-2xl w-full rounded-[28px] p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedPublication(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center hover:bg-[#e5e7eb] transition"
            >
              <X size={18} />
            </button>

            {/* TYPE */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#eef3ea] text-[#5f7f65] text-xs font-medium mb-5">
              {selectedPublication.type}
            </div>

            {/* TITLE */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] leading-relaxed mb-5">
              {selectedPublication.title}
            </h2>

            {/* META */}
            <div className="space-y-3 mb-6">
              <div>
                <span className="font-semibold text-[#374151]">Journal:</span>

                <p className="text-[#6b7280] mt-1">
                  {selectedPublication.journal || "Not Added"}
                </p>
              </div>

              <div>
                <span className="font-semibold text-[#374151]">Year:</span>

                <p className="text-[#6b7280] mt-1">
                  {selectedPublication.year || "Not Added"}
                </p>
              </div>

              <div>
                <span className="font-semibold text-[#374151]">Volume:</span>

                <p className="text-[#6b7280] mt-1">
                  {selectedPublication.volume || "Not Added"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto">
        {/* MAIN CONTAINER */}
        <div className="relative bg-[#faf8f4] border border-[#e8e2d8] rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* BACKGROUND BLUR */}
          <div className="absolute -top-20 -right-20 w-45 h-45 bg-[#dce7d7] rounded-full blur-3xl opacity-40"></div>

          <div className="relative z-10 grid lg:grid-cols-[320px_1fr] gap-6 p-5 md:p-7">
            {/* ---------------- LEFT SIDEBAR ---------------- */}

            <div className="space-y-5">
              {/* HERO CARD */}
              <div className="bg-white rounded-3xl border border-[#ece7dd] shadow-sm p-6">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 bg-[#eef3ea] text-[#5b7b61] px-4 py-2 rounded-full text-xs font-medium mb-5">
                  <BookOpen size={15} />
                  Research & Academia
                </div>

                {/* HEADING */}
                <h1 className="text-3xl md:text-4xl font-bold text-[#1f2937] leading-tight mb-4">
                  Research
                  <span className="block text-[#5f7f65] mt-1">
                    Publications
                  </span>
                </h1>

                {/* DIVIDER */}
                <div className="w-16 h-0.75 bg-[#5f7f65] rounded-full mb-5"></div>

                {/* DESCRIPTION */}
                <p className="text-[#5f646d] text-sm leading-relaxed mb-8">
                  A collection of my research work and academic publications in
                  the field of education and teaching.
                </p>

                {/* 3D DESIGN */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    {/* SHADOW */}
                    <div className="w-44 h-6 bg-black/10 blur-xl rounded-full absolute bottom-0 left-1/2 -translate-x-1/2"></div>

                    {/* BOOKS */}
                    <div className="relative">
                      <div className="w-32 h-8 bg-[#d7c7af] rounded-xl shadow-md rotate-[-8deg]"></div>

                      <div className="w-36 h-8 bg-[#7f9a77] rounded-xl shadow-md rotate-[4deg] -mt-4 ml-2"></div>

                      {/* CAP */}
                      <div className="relative mx-auto -mt-4.5 w-24 h-14 bg-linear-to-b from-[#355a42] to-[#254232] rounded-t-[10px] rounded-b-[30px] shadow-xl">
                        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#355a42] rounded-md -rotate-6"></div>

                        <div className="absolute -right-2.5 top-3 w-0.5 h-10 bg-[#d8c27d]"></div>

                        <div className="absolute -right-3.5 top-11 w-3 h-3 bg-[#d8c27d] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* QUOTE */}
                <div className="bg-linear-to-br from-[#5f7f65] to-[#6f8f75] rounded-[20px] p-5 text-white shadow-lg">
                  <p className="text-sm leading-relaxed mb-4">
                    “Research is to see what everybody else has seen, and to
                    think what nobody else has thought.”
                  </p>

                  <span className="text-white/80 text-xs">
                    — Albert Szent-Györgyi
                  </span>
                </div>
              </div>

              {/* STATS */}
              <div className="bg-white rounded-3xl border border-[#ece7dd] shadow-sm p-6">
                <h3 className="text-lg font-semibold text-[#1f2937] mb-6">
                  Research Overview
                </h3>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <h2 className="text-4xl font-bold text-[#5f7f65]">
                      {totalPublications}
                    </h2>

                    <p className="text-sm text-[#6b7280] mt-1">Publications</p>
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold text-[#5f7f65]">
                      {totalJournals}
                    </h2>

                    <p className="text-sm text-[#6b7280] mt-1">Journals</p>
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold text-[#5f7f65]">
                      {totalConferences}
                    </h2>

                    <p className="text-sm text-[#6b7280] mt-1">Conferences</p>
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold text-[#5f7f65]">
                      {researchAreas}
                    </h2>

                    <p className="text-sm text-[#6b7280] mt-1">
                      Research Areas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------- RIGHT CONTENT ---------------- */}

            <div>
              {/* TOP BAR */}
              <div className="bg-white rounded-[22px] border border-[#ece7dd] shadow-sm p-4 mb-6 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                {/* SEARCH */}
                <div className="relative w-full lg:max-w-md">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]"
                  />

                  <input
                    type="text"
                    placeholder="Search publications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#f7f5f0] border border-[#ece7dd] rounded-2xl py-3 pl-12 pr-4 outline-none focus:border-[#5f7f65] transition text-sm"
                  />
                </div>

                {/* FILTER */}
                <div className="flex items-center gap-3">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-[#f7f5f0] border border-[#ece7dd] rounded-2xl px-4 py-3 text-sm outline-none focus:border-[#5f7f65]"
                  >
                    <option value="All">All Categories</option>

                    <option value="Journal Article">Journal Articles</option>

                    <option value="Conference Paper">Conference Papers</option>

                    <option value="Research Paper">Research Papers</option>
                  </select>
                </div>
              </div>

              {/* PUBLICATIONS GRID */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-6">
                {filteredPublications.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[22px] border border-[#ece7dd] shadow-sm hover:shadow-xl transition-all duration-300 p-5 group"
                  >
                    {/* TYPE */}
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#eef3ea] text-[#5f7f65] text-[11px] font-medium mb-5">
                      {item.type}
                    </div>

                    {/* CONTENT */}
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3
                          className="
    text-[15px] md:text-base
    font-semibold
    text-[#1f2937]
    leading-relaxed
    mb-3
    line-clamp-4
    min-h-27.5
  "
                        >
                          {item.title}
                        </h3>

                        <p className="text-sm text-[#6b7280] mb-2">
                          {item.journal}
                        </p>

                        <p className="text-xs text-[#9ca3af] mb-5">
                          {item.year} • {item.volume}
                        </p>

                        <button
                          onClick={() => setSelectedPublication(item)}
                          className="text-[#5f7f65] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all"
                        >
                          View Details
                          <ArrowRight size={15} />
                        </button>
                      </div>

                      {/* ICON CARD */}
                      <div
                        className={`min-w-21.25 h-30 rounded-[18px] shadow-lg flex items-center justify-center text-[#4f6f52] ${item.color}`}
                      >
                        {item.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* BOTTOM INFO */}
              <div className="bg-white rounded-[22px] border border-[#ece7dd] shadow-sm p-5">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* ITEM */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#5f7f65] text-white flex items-center justify-center shadow-md">
                      <BookOpen size={24} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1f2937] mb-2">
                        Focus Areas
                      </h4>

                      <p className="text-sm text-[#6b7280] leading-relaxed">
                        Education, Teaching Methods, Technology in Education
                      </p>
                    </div>
                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#5f7f65] text-white flex items-center justify-center shadow-md">
                      <Trophy size={24} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1f2937] mb-2">
                        Research Goal
                      </h4>

                      <p className="text-sm text-[#6b7280] leading-relaxed">
                        Contributing to meaningful learning and academic growth
                      </p>
                    </div>
                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#5f7f65] text-white flex items-center justify-center shadow-md">
                      <Target size={24} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1f2937] mb-2">
                        Impact
                      </h4>

                      <p className="text-sm text-[#6b7280] leading-relaxed">
                        Improving education through evidence-based practices
                      </p>
                    </div>
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

export default Research;
