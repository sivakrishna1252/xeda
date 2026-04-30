import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/footer";
import blogImg from "../assets/Blog/B1.webp";
import blogImg2 from "../assets/Blog/Blog(2).webp";
import blogImg3 from "../assets/Blog/Blog 3.jpg";
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
    <p className="mb-4 text-gray-800 leading-relaxed font-semibold text-lg">
      It started with a simple question… "Why am I still feeling tired even after eating 'healthy'?"
    </p>

    <p className="mb-4 text-gray-800 leading-relaxed">
      That question doesn't sound dramatic, but it's surprisingly common. Between busy routines, gym sessions, skipped meals, and quick fixes, many people end up missing out on something fundamental: real nourishment. That's where something as small as wheatgrass shots quietly enters the conversation. Not as a miracle. Not as hype. Just as a simple, natural addition that people are rediscovering.
    </p>

    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">What Is Wheatgrass, Really?</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Wheatgrass is the young grass of the wheat plant, harvested early when it's still fresh and nutrient-rich. It's usually consumed as a fresh juice shot, known for its deep green colour and strong, earthy taste. Think of it less like a "drink" and more like a concentrated plant extract – one that delivers a dense mix of nutrients in a very small quantity.
    </p>

    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">What's Inside That Tiny Shot?</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      If you've ever wondered why wheatgrass is often called a "superfood", the answer lies in its composition. It's naturally rich in:
    </p>
    <ul className="list-disc list-inside mb-4 text-gray-800 space-y-2 ml-4">
      <li><strong className="text-emerald-700">Chlorophyll</strong> – often linked to detox support and oxygenation</li>
      <li><strong className="text-emerald-700">Vitamins</strong> – especially A, C, E, K and B complex (B1, B2, B3, B5, B6, B12, Folate)</li>
      <li><strong className="text-emerald-700">Minerals</strong> – including iron, magnesium, and calcium</li>
      <li><strong className="text-emerald-700">Enzymes & antioxidants</strong> – which support internal recovery</li>
    </ul>
    <p className="mb-4 text-gray-800 leading-relaxed">
      What makes it different from many packaged health drinks is that, when consumed as a fresh juice, these nutrients are still active and easily absorbed.
    </p>

    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">The Real Health Benefits</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Let's keep this honest. Wheatgrass isn't magic, but when taken consistently, it does support your body in noticeable ways.
    </p>

    <div className="space-y-4 mb-4">
      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">1. Supports Natural Detox</p>
        <p className="text-gray-800 leading-relaxed">
          Wheatgrass is often associated with detox, not because it "cleanses" instantly but because it supports your liver and digestive system—the body's natural detox mechanisms.
        </p>
      </div>

      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">2. Helps With Blood Health</p>
        <p className="text-gray-800 leading-relaxed">
          Its chlorophyll content is structurally similar to haemoglobin, which is why it's often linked to improved oxygen flow and overall vitality.
        </p>
      </div>

      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">3. Strengthens Immunity</p>
        <p className="text-gray-800 leading-relaxed">
          With its antioxidant profile, wheatgrass helps your body respond better to daily stress, pollution, and fatigue.
        </p>
      </div>

      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">4. Promotes Glowing Skin</p>
        <p className="text-gray-800 leading-relaxed">
          Many people notice gradual improvements in skin clarity and texture. This is less about external beauty and more about internal balance showing up externally.
        </p>
      </div>

      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">5. Encourages Inner Recovery</p>
        <p className="text-gray-800 leading-relaxed">
          Whether it's post-workout fatigue or general burnout, wheatgrass supports what can be called 'inner recovery' – helping your body reset and repair over time.
        </p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">How to Take Wheatgrass Shots</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      One of the biggest advantages? It's simple.
    </p>

    <div className="space-y-4 mb-4">
      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">Best Time</p>
        <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
          <li>Early morning, on an empty stomach</li>
          <li>Works well as part of a morning detox routine</li>
        </ul>
      </div>

      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">Quantity</p>
        <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
          <li>Start with 30 ml</li>
          <li>Gradually increase if your body feels comfortable</li>
        </ul>
      </div>

      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">Beginner Tips</p>
        <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
          <li>Don't expect to love the taste immediately</li>
          <li>Take it in one quick shot</li>
          <li>Avoid mixing it with sugary juices</li>
        </ul>
      </div>
    </div>

    <p className="mb-4 text-gray-800 leading-relaxed italic font-medium text-emerald-700">
      Consistency matters more than quantity. A small daily habit works better than occasional overload.
    </p>

    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Who Should Actually Consider It?</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Wheatgrass isn't limited to any one group. It fits naturally into different lifestyles:
    </p>
    <ul className="list-disc list-inside mb-4 text-gray-800 space-y-2 ml-4">
      <li><strong className="text-emerald-700">Fitness enthusiasts</strong> – for recovery and energy balance</li>
      <li><strong className="text-emerald-700">Working professionals</strong> – to support long, sedentary days</li>
      <li><strong className="text-emerald-700">Students</strong> – for mental clarity and routine building</li>
      <li><strong className="text-emerald-700">Anyone exploring natural health habits</strong> – making one better choice daily</li>
    </ul>

    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Fresh Wheatgrass vs Powdered Versions</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      This is where things get practical.
    </p>

    <div className="space-y-4 mb-4">
      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">Fresh Wheatgrass Juice</p>
        <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
          <li>Higher nutrient retention</li>
          <li>No processing</li>
          <li>Better absorption</li>
          <li>Short shelf life (which is actually a good sign)</li>
        </ul>
      </div>

      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">Powdered Wheatgrass</p>
        <ul className="list-disc list-inside text-gray-800 space-y-1 ml-4">
          <li>Convenient and portable</li>
          <li>Longer shelf life</li>
          <li>Nutrient loss due to processing</li>
        </ul>
      </div>
    </div>

    <p className="mb-4 text-gray-800 leading-relaxed">
      If your goal is maximum benefit, fresh juice tends to be the preferred option.
    </p>

    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Frequently Asked Questions</h3>
    
    <div className="space-y-4 mb-4">
      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">Can you drink wheatgrass shots daily?</p>
        <p className="text-gray-800 leading-relaxed">
          Yes, in moderate amounts. Daily consumption is generally safe for most people when taken in small quantities.
        </p>
      </div>

      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">Are there any side effects?</p>
        <p className="text-gray-800 leading-relaxed">
          Some beginners may feel mild nausea initially due to detox effects. Starting small usually helps.
        </p>
      </div>

      <div>
        <p className="text-lg font-semibold text-emerald-700 mb-2">Does it help with weight loss?</p>
        <p className="text-gray-800 leading-relaxed">
          Not directly. But it supports digestion, metabolism and reduces cravings – factors that contribute to weight management.
        </p>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">A Small Habit That Adds Up</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      Health doesn't always come from big changes. Sometimes, it comes from small, consistent actions. A daily wheatgrass shot isn't a radical transformation. It's a quiet shift towards better digestion, better energy, and a more aware lifestyle. And in a world full of complicated health advice, that simplicity matters.
    </p>

    <h3 className="text-2xl font-bold text-emerald-800 mt-8 mb-4">Ready to Experience It for Yourself?</h3>
    <p className="mb-4 text-gray-800 leading-relaxed">
      If you're curious about adding wheatgrass shots to your routine, the easiest way to start is by trying it fresh and consistently. Connect with Xeda Farms and start ordering your daily wheatgrass shots because good health begins with small, natural choices.
    </p>
  </div>
);
const BlogContent3 = () => (
  <div>

    <h2 className="text-3xl font-bold text-emerald-900 mb-6">
      Wheatgrass Shots and Immunity: Beyond the Basics
    </h2>

    <h3 className="text-2xl font-bold text-emerald-800 mt-6 mb-3">
      Wheatgrass Isn’t New – But Its Use Has Changed
    </h3>

    <p className="mb-4">
      Wheatgrass has been studied for years, not as a trend, but as a nutrient-dense plant (Triticum aestivum).
    </p>

    <p className="font-semibold">Research highlights:</p>
    <ul className="list-disc ml-6 mb-4">
      <li>High chlorophyll content</li>
      <li>Presence of essential amino acids</li>
      <li>Antioxidant compounds linked to cellular protection</li>
    </ul>

    <p className="mb-4">
      What’s changed today is not the ingredient – it's how it’s being used in real environments like gyms and wellness centres.
    </p>

    <h3 className="text-2xl font-bold text-emerald-800 mt-6 mb-3">
      What Research Actually Points Toward
    </h3>

    <p className="mb-4">
      Instead of exaggerated claims, studies consistently show wheatgrass supports the following:
    </p>

    <p className="font-semibold">1. Oxidative Stress Reduction</p>
    <p className="mb-3">
      Antioxidants in wheatgrass help reduce oxidative stress, which is linked to fatigue and slower recovery.
    </p>

    <p className="font-semibold">2. Blood Health Support</p>
    <p className="mb-3">
      Some studies indicate improved haemoglobin levels and better oxygen-carrying capacity.
    </p>

    <p className="font-semibold">3. Nutrient Absorption & Gut Support</p>
    <p className="mb-4">
      Wheatgrass contains enzymes that may support digestion and nutrient uptake.
    </p>

    <p className="mb-4">
      These are not “instant effects". They are support functions that work over time.
    </p>

    <h3 className="text-2xl font-bold text-emerald-800 mt-6 mb-3">
      Where Wheatgrass Shots Actually Add Value (Real Use Cases)
    </h3>

    <p className="mb-4">
      This is where most content fails – it doesn’t show how it’s used.
    </p>

    <p className="mb-4">
      Here’s where wheatgrass shots fit practically:
    </p>

    <p className="font-semibold">1. Post-Workout Recovery Point</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Quick intake after training</li>
      <li>Supports recovery process</li>
      <li>Doesn’t feel heavy or time-consuming</li>
    </ul>

    <p className="font-semibold">2. Morning Activation Routine</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Used at entry points in fitness spaces</li>
      <li>Creates a structured start</li>
      <li>Encourages daily consistency</li>
    </ul>

    <p className="font-semibold">3. Early Reset (Wellness Centers)</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Short sessions or morning breaks</li>
      <li>Helps maintain energy without caffeine dependency</li>
    </ul>

    <p className="font-semibold">4. Add-On to Structured Programs</p>
    <ul className="list-disc ml-6 mb-6">
      <li>Detox programs</li>
      <li>Weight management routines</li>
      <li>Lifestyle correction plans</li>
    </ul>

    {/* TABLE */}
    <h3 className="text-2xl font-bold text-emerald-800 mt-6 mb-4">
      Quick Comparison: Why Wheatgrass Shots Work in Spaces
    </h3>

    <div className="overflow-x-auto mb-6">
      <table className="w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Factor</th>
            <th className="p-3 border">Traditional Supplements</th>
            <th className="p-3 border">Wheatgrass Shots</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border">Time to consume</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border">Routine fit</td>
            <td className="p-3 border">Inconsistent</td>
            <td className="p-3 border">Easy</td>
          </tr>
          <tr>
            <td className="p-3 border">Perceived value</td>
            <td className="p-3 border">Low visibility</td>
            <td className="p-3 border">High visibility</td>
          </tr>
          <tr>
            <td className="p-3 border">Repeat usage</td>
            <td className="p-3 border">Irregular</td>
            <td className="p-3 border">Daily habit</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-emerald-800 mt-6 mb-3">
      Simple Integration Flow (For Gyms & Wellness Spaces)
    </h3>

    <p className="mb-4">
      ➡ Member walks in ➡ Session / workout ➡ Offered wheatgrass shot ➡ Completes routine ➡ Returns next day
    </p>

    <p className="mb-4">
      This is not about selling a product. It’s about creating a repeatable experience loop.
    </p>

    <h3 className="text-2xl font-bold text-emerald-800 mt-6 mb-3">
      What Makes Xeda Farms Wheatgrass Shots Different
    </h3>

    <p className="mb-4">
      This is where most brands sound the same – Xeda doesn’t.
    </p>

    <p className="font-semibold">Locally Grown, Not Mass Sourced</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Grown in controlled environments</li>
      <li>Freshly harvested</li>
      <li>Not stored or shipped long distances</li>
    </ul>

    <p className="mb-4">This directly impacts:</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Freshness</li>
      <li>Nutrient retention</li>
      <li>Taste and usability</li>
    </ul>

    <p className="font-semibold">Designed for Real Use, Not Just Claims</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Ready-to-consume format</li>
      <li>No preparation needed</li>
      <li>Built for fast-paced environments</li>
    </ul>

    <p className="font-semibold">Built for Fitness & Wellness Spaces</p>
    <ul className="list-disc ml-6 mb-4">
      <li>Daily usability</li>
      <li>Operational ease</li>
      <li>Repeat consumption</li>
    </ul>

    <h3 className="text-2xl font-bold text-emerald-800 mt-6 mb-3">
      Why This Matters for Gyms and Wellness Centers
    </h3>

    <ul className="list-disc ml-6 mb-4">
      <li>Extends the member journey</li>
      <li>Adds perceived value</li>
      <li>Encourages daily visits</li>
      <li>Differentiates the space</li>
    </ul>

    <p className="mb-4">
      This is especially relevant in high-density fitness zones where users expect more than just workouts.
    </p>

    <h3 className="text-2xl font-bold text-emerald-800 mt-6 mb-3">
      Key Takeaway
    </h3>

    <p className="mb-4">
      Wheatgrass shots are not about hype. They are about placement, usability, and consistency.
    </p>

    <ul className="list-disc ml-6 mb-4">
      <li>Backed by real research</li>
      <li>Integrated into real routines</li>
      <li>Delivered in a usable format</li>
    </ul>

    <p className="mb-4">
      They move from “health trend” to “daily habit".
    </p>

    <h3 className="text-2xl font-bold text-emerald-800 mt-6 mb-3">
      Closing
    </h3>

    <p className="mb-4">
      Xeda Farms wheatgrass shots are built around this exact idea. Fresh and locally grown in Kharadi, Pune, and designed to fit into real-world routines across gyms and wellness centres.
    </p>

  </div>
);


// Blog data - in a real app, this would come from an API
const blogData = {
  1: {
    id: 1,
    slug: "wheatgrass-for-muscle-recovery",
    title: "How Soon Can You See Muscle Recovery Benefits from 30 ml Fresh Wheatgrass Juice?",
    excerpt: "Learn how 30 ml fresh wheatgrass juice supports muscle recovery, energy, and strength over time.",
    image: blogImg,
    author: "Xeda Farm Team",
    date: "January 15, 2026",
    content: <BlogContent1 />,
  },
  2: {
    id: 2,
    slug: "wheatgrass-juice-benefits-for-gym-muscle-recovery",
    title: "Wheatgrass Shots Explained: Benefits, Usage & What You Should Know",
    excerpt: "Discover what wheatgrass really is, its powerful health benefits, and how to incorporate it into your daily routine.",
    image: blogImg2,
    author: "Xeda Farm Team",
    date: "January 20, 2026",
    content: <BlogContent2 />,
  },
  3: {
    id: 3,
    slug: "wheatgrass-shots-immunity-real-use-in-fitness-spaces",
    title: "Wheatgrass Shots for Immunity | Use Cases, Research & Why Fitness Spaces Use them. ",
    excerpt:
      "Explore real use cases of wheatgrass shots, research-backed insights, and why gyms and wellness centres are adding them as part of daily routines. ",
    image: blogImg3,
    author: "Xeda Farm Team",
    date: "April 29, 2026",
    content: <BlogContent3 />,
  },
};

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = Object.values(blogData).find((item) => item.slug === id);

  if (!blog) {
    return (
      <>
        <Header />
        <div className="bg-background text-gray-800 pt-24 px-4 flex items-center justify-center">
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
      <div className="bg-background text-gray-800 pt-24">
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
            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl bg-white">
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
