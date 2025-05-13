import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Briefcase, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
      bg-cover bg-center text-white py-28 md:py-36"
    >
      <div className="absolute inset-0 bg-blue-900/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Expert <span className="text-yellow-400">Financial</span>{" "}
              Solutions for Your Business
            </h1>
            <p className="text-lg text-blue-100">
              Comprehensive CA services with strategic insights to help your
              business grow while ensuring full compliance and tax efficiency.
            </p>

            <div className="space-y-4">
              {[
                "Tax Planning & Compliance",
                "Audit & Assurance Services",
                "Business Growth Consulting",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-yellow-400" size={20} />
                  <span className="text-blue-50">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-6 py-3 rounded-lg flex items-center gap-2"
              >
                Get Consultation <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2"
              >
                Our Services <Briefcase size={18} />
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BarChart2, value: "200+", label: "Clients Served" },
                  { icon: Briefcase, value: "15+", label: "Years Experience" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white/5 p-4 rounded-lg border border-white/10 text-center"
                  >
                    <item.icon
                      size={32}
                      className="mx-auto text-yellow-400 mb-2"
                    />
                    <p className="text-2xl font-bold">{item.value}</p>
                    <p className="text-sm text-blue-100">{item.label}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 bg-blue-800/50 p-4 rounded-lg">
                <p className="text-blue-100 italic">
                  "Trusted by businesses across multiple sectors for financial
                  advisory and compliance solutions."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
