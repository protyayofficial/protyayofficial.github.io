import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import SocialIcon from '../components/SocialIcon'; // Assuming SocialIcon is in a separate file
import emailjs from 'emailjs-com';

const ConnectWithMe = () => {
  const userData = {
    name: "Protyay Dey",
    title: "Computer Vision & AI Researcher",
    location: "Kolkata, India",
    imageUrl: "/diamondharbor.jpg",
    socialLinks: {
      email: "mailto:protyay.iitrpr@gmail.com",
      googleScholar: "https://scholar.google.com/citations?user=hmnHR0EAAAAJ&hl=en",
      linkedin: "https://linkedin.com/in/protyaydey",
      orcid: "https://orcid.org/0009-0002-3859-4257",
      kaggle: "https://www.kaggle.com/yaytorp",
      researchGate: "https://www.researchgate.net/profile/Protyay-Dey",
      github: "https://github.com/protyayofficial",
      leetcode: "https://leetcode.com/ace_offie",
      codeforces: "https://codeforces.com/profile/ace_offie",
      codechef: "https://www.codechef.com/users/ace_offiez",
      instagram: "https://www.instagram.com/ace_offie/"
    }
  };

  const socialCategories = [
    {
      title: "Professional",
      links: [
        { name: "Email", platform: "email", url: userData.socialLinks.email },
        { name: "LinkedIn", platform: "linkedin", url: userData.socialLinks.linkedin },
        { name: "Github", platform: "github", url: userData.socialLinks.github }
      ]
    },
    {
      title: "Research",
      links: [
        { name: "Google Scholar", platform: "googlescholar", url: userData.socialLinks.googleScholar },
        { name: "ORCID", platform: "orcid", url: userData.socialLinks.orcid },
        { name: "ResearchGate", platform: "researchgate", url: userData.socialLinks.researchGate }
      ]
    },
    {
      title: "Programming",
      links: [
        { name: "LeetCode", platform: "leetcode", url: userData.socialLinks.leetcode },
        { name: "CodeForces", platform: "codeforces", url: userData.socialLinks.codeforces },
        { name: "CodeChef", platform: "codechef", url: userData.socialLinks.codechef }
      ]
    }
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSuccessMessage("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    emailjs.send('service_43gb6dk', 'template_u82es2l', {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }, '6anFnD8hJZ6qoEYg8')
      .then(() => {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setSuccessMessage("Failed to send the message, please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse blur-lg opacity-75"></div>
            <img
              src={userData.imageUrl}
              alt={userData.name}
              className="relative w-full h-full rounded-full object-cover border-2 border-blue-400"
            />
          </div>
          <p className="text-xl text-gray-300">
            Reach out with collaboration ideas or just say hello! I'm always open to discussions that push the boundaries of AI.
          </p>
        </div>

        {/* Social Links Sections */}
        <Card className="border-gray-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">Follow me on my socials!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialCategories.map((category, index) => (
                <Card 
                  key={category.title} 
                  className={`border-gray-600 ${index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-900'}`}
                >
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">{category.title}</h3>
                    <div className="space-y-4">
                      {category.links.map((link) => (
                        <div key={link.name} className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                          <SocialIcon platform={link.platform} link={link.url} />
                          <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                            {link.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="border-gray-700">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center">Send Me a Message</h2>
            <form className="space-y-4" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-700/50 text-gray-300 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-700/50 text-gray-300 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                aria-label="Your Message"
                className="w-full p-3 rounded-lg bg-gray-700/50 text-gray-300 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting} // Disable button while submitting
                className={`w-full py-3 text-white font-semibold rounded-lg transition-all transform ${
                  isSubmitting
                    ? 'bg-gray-600'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {successMessage && (
                <p className="mt-4 text-center text-green-400">{successMessage}</p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConnectWithMe;
