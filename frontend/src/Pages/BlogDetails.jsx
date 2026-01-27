import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/footer";
import blogImg from "../assets/Blog/B1.webp";

// Blog Content Components
const BlogContent1 = () => (
  <div>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Fresh wheatgrass juice is widely used as a natural recovery and wellness supplement. When taken consistently at 30 ml per day, its benefits appear gradually in stages rather than instantly. Below is a realistic timeline of what most people experience.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Within 3–7 Days: Early Internal Effects</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      During the first week, the body begins internal adjustments. Many people notice reduced muscle heaviness and morning stiffness, improved digestion, better hydration, and a mild increase in daily energy. These changes are subtle but noticeable, especially in physically active individuals or those undergoing physiotherapy.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Within 10–14 Days: Muscle Recovery Improvements</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      By the second week, muscle-specific benefits become clearer. Recovery after workouts or therapy sessions feels faster, muscle soreness (DOMS) reduces, inflammation-related discomfort decreases, and endurance during physical activity improves. This is when most users clearly feel recovery support.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Within 3–4 Weeks: Cellular and Tissue Repair</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Consistent intake over three to four weeks supports deeper healing. Muscle tone and flexibility improve; tissue repair accelerates, cramps and fatigue reduce, and oxygen utilization becomes more efficient, making physical activity feel easier.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">6–8 Weeks: Whole-Body Benefits</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      With long-term use, wheatgrass supports immunity, hemoglobin levels, oxidative stress reduction, and overall stamina. Many users also report better sleep quality and skin health.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Factors That Affect The Speed of Results</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Results may vary depending on activity level, protein intake, hydration, sleep quality, and consistency. Active individuals and those consuming adequate protein often experience faster benefits.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Best Practices for Faster Recovery</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Take 30 ml on an empty stomach or post-workout. Avoid tea or coffee for at least 30 minutes after consumption. Combine with adequate protein intake within one hour and maintain consistency for at least 21 days.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Conclusion</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Fresh wheatgrass juice is not a replacement for protein but works as a powerful recovery support drink. With daily 30 ml intake, initial effects appear within a week, clear muscle recovery benefits in two weeks, and full benefits within one month.
    </p>
  </div>
);

const BlogContent2 = () => (
  <div>
    <p className="mb-4 text-gray-800 leading-relaxed">
      The term "superfood" is often used, but wheatgrass truly deserves this title. Let's explore what makes this green powerhouse so special.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Exceptional Nutrient Density</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Wheatgrass contains an impressive array of vitamins, minerals, and phytonutrients in a highly concentrated form. Just one ounce of wheatgrass juice provides more nutrition than many servings of vegetables.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Key Nutrients</h3>
    <ul className="list-disc list-inside mb-4 text-gray-800 space-y-2 ml-4">
      <li>Chlorophyll - Nature's blood builder</li>
      <li>70% chlorophyll content - highest of any plant</li>
      <li>Complete amino acid profile</li>
      <li>Vitamins A, C, E, K, and B-complex</li>
      <li>Essential minerals: iron, calcium, magnesium</li>
      <li>Powerful antioxidants and enzymes</li>
    </ul>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Health Benefits</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      The combination of these nutrients provides numerous health benefits including detoxification, immune support, increased energy, and overall wellness enhancement.
    </p>
  </div>
);

const BlogContent3 = () => (
  <div>
    <p className="mb-4 text-gray-800 leading-relaxed">
      There are many misconceptions about daily wheatgrass consumption. Let's clear the air and provide you with evidence-based information.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Recommended Daily Intake</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      For most adults, 30ml of fresh wheatgrass juice daily is an optimal amount. This provides significant nutritional benefits without overwhelming your system.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Common Myths Debunked</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      <strong className="text-emerald-700">Myth 1:</strong> "More is always better" - Not true. Excessive consumption can cause nausea in some individuals. Stick to recommended amounts.
    </p>
    <p className="mb-4 text-gray-800 leading-relaxed">
      <strong className="text-emerald-700">Myth 2:</strong> "It works instantly" - While some feel immediate energy, most benefits accumulate over time with consistent use.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Best Practices</h3>
    <ul className="list-disc list-inside mb-4 text-gray-800 space-y-2 ml-4">
      <li>Take on an empty stomach for better absorption</li>
      <li>Start with smaller amounts if you're new to wheatgrass</li>
      <li>Maintain consistency for best results</li>
      <li>Listen to your body and adjust as needed</li>
    </ul>
  </div>
);

const BlogContent4 = () => (
  <div>
    <p className="mb-4 text-gray-800 leading-relaxed">
      A strong immune system is your body's first line of defense against illness. Wheatgrass offers natural support to help keep your immune system functioning at its best.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Immune-Boosting Nutrients</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Wheatgrass is rich in vitamins and minerals that are essential for immune function, including vitamin C, vitamin A, and zinc.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">How It Works</h3>
    <ul className="list-disc list-inside mb-4 text-gray-800 space-y-2 ml-4">
      <li>Supports white blood cell production</li>
      <li>Enhances antioxidant activity</li>
      <li>Reduces inflammation</li>
      <li>Promotes overall cellular health</li>
    </ul>
  </div>
);

const BlogContent5 = () => (
  <div>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Detoxification is a natural process that your body performs daily. Wheatgrass can enhance this process, helping your body eliminate toxins more effectively.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Natural Detoxification</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      The high chlorophyll content in wheatgrass helps cleanse the blood and support liver function, your body's primary detox organ.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Benefits</h3>
    <ul className="list-disc list-inside mb-4 text-gray-800 space-y-2 ml-4">
      <li>Supports liver health</li>
      <li>Cleanses the bloodstream</li>
      <li>Removes heavy metals</li>
      <li>Improves skin clarity</li>
    </ul>
  </div>
);

const BlogContent6 = () => (
  <div>
    <p className="mb-4 text-gray-800 leading-relaxed">
      A healthy digestive system is crucial for overall wellness. Wheatgrass can play a significant role in supporting digestive health.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Digestive Support</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Wheatgrass contains enzymes that aid digestion and fiber that supports healthy gut bacteria.
    </p>
    
    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Key Benefits</h3>
    <ul className="list-disc list-inside mb-4 text-gray-800 space-y-2 ml-4">
      <li>Improves nutrient absorption</li>
      <li>Supports healthy gut flora</li>
      <li>Reduces bloating</li>
      <li>Promotes regular digestion</li>
    </ul>
  </div>
);

// Blog data - in a real app, this would come from an API
const blogData = {
  1: {
    id: 1,
    title: "How Soon Can You See Muscle Recovery Benefits from 30 ml Fresh Wheatgrass Juice?",
    excerpt: "Learn how 30 ml fresh wheatgrass juice supports muscle recovery, energy, and strength over time.",
    image: blogImg,
    author: "Xeda Farm Team",
    date: "January 15, 2026",
    content: <BlogContent1 />,
  },
  
};

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData[parseInt(id)];

  if (!blog) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100 text-gray-800 pt-24 px-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-emerald-900">Blog Not Found</h1>
            <button
              onClick={() => navigate("/blogs")}
              className="text-emerald-700 hover:text-emerald-800 underline"
            >
              Back to Blogs
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-lime-100 text-gray-800 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => navigate("/blogs")}
            className="flex items-center gap-2 text-gray-700 hover:text-emerald-700 transition-colors mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blogs</span>
          </button>

          {/* Featured Image */}
          {blog.image && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-3xl font-extrabold mb-6 text-emerald-900 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700 mb-6">
              <div className="flex items-center gap-2">
                <FaUser className="text-emerald-700" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-emerald-700" />
                <span>{blog.date}</span>
              </div>
            </div>

            {/* Excerpt */}
            {blog.excerpt && (
              <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-emerald-600 pl-6">
                {blog.excerpt}
              </p>
            )}
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none text-gray-800">
            {blog.content}
          </article>

          {/* Share Section */}
          {/* <div className="mt-12 pt-8 border-t border-emerald-200">
            <p className="text-gray-700 mb-4">Share this article:</p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                Share on Facebook
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Share on Twitter
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
