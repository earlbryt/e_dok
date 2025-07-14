import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Star, ArrowRight, Flower } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const CTA: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleHerbalConsultationClick = () => {
    navigate('/herbal-medicine');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-lens-purple/90 to-emerald-600/90 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-6">Ready to Explore Traditional Herbal Medicine?</h2>
          <p className="text-xl mb-10 text-white/90">
            Connect with centuries of Ghanaian herbal wisdom through our AI-powered platform. Get personalized guidance on natural remedies and traditional healing practices.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {!isAuthenticated && (
              <Link to="/signup">
                <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-white text-lens-purple hover:bg-gray-100">
                  Start Your Herbal Journey
                </Button>
              </Link>
            )}
            <Button 
              size="lg" 
              onClick={handleHerbalConsultationClick}
              variant={isAuthenticated ? "default" : "outline"} 
              className={`rounded-full px-8 py-6 text-lg ${isAuthenticated 
                ? "bg-white text-lens-purple hover:bg-gray-100" 
                : "border-white text-white bg-lens-purple/20 hover:bg-lens-purple/30"}`}
            >
              Start Herbal Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
