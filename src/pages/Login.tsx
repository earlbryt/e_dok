import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { motion } from "framer-motion";
import Logo from "@/components/shared/Logo";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const returnUrl = queryParams.get('returnUrl');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Login and get user data with role
      const userData = await login(email, password);
      
      // Handle redirects based on parameters
      if (returnUrl) {
        // Generic return URL
        toast({
          title: "Login Successful",
          description: "You will now be redirected to your requested page."
        });
        navigate(decodeURIComponent(returnUrl));
      } else {
        // Regular login flow
        // Check the role from the returned user data
        if (userData && userData.role === 'admin') {
          toast({
            title: "Welcome back, Admin",
            description: "You've been redirected to the admin dashboard."
          });
          navigate('/admin');
        } else {
          // Regular users stay on the home page
          toast({
            title: "Login Successful",
            description: "Welcome back! You can now access our herbal medicine consultation."
          });
          navigate('/');
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Error is handled within the login function
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left side with image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-lens-purple/5 items-center justify-center overflow-hidden">
        <div className="relative z-10 p-12 text-center">
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            <img 
              src="/assets/login.png" 
              alt="eDok Herbal Medicine" 
              className="mx-auto w-3/4 h-auto drop-shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="mt-8 text-3xl font-bold text-lens-purple">Herbal Medicine Consultation</h2>
            <p className="mt-2 text-gray-600">Welcome back! Connect with traditional Ghanaian herbal wisdom through our AI-powered consultant.</p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-lens-purple/20 to-emerald-400/10 opacity-70 z-0"></div>
      </div>
      
      {/* Right side with login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-gray-500 hover:text-lens-purple transition-colors mb-8"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mr-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Back to Home
            </Link>
            
            <div className="text-center">
              <Logo size="lg" className="inline-block mx-auto" />
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign in to your account</h2>
              <p className="mt-2 text-sm text-gray-600 mb-2">
                Access your herbal medicine consultation{' '}
                <Link to="/signup" className="font-medium text-lens-purple hover:text-lens-purple/80">
                  or create a new account
                </Link>
              </p>
            </div>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-gray-300 focus:border-lens-purple focus:ring-lens-purple"
                    autoComplete="email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 border-gray-300 focus:border-lens-purple focus:ring-lens-purple"
                    autoComplete="current-password"
                  />
                  <button 
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-gray-400"
                    tabIndex={-1}
                  >
                    {showPassword ? 
                      <EyeOff className="h-4 w-4" /> : 
                      <Eye className="h-4 w-4" />
                    }
                  </button>
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-lens-purple hover:bg-lens-purple-light text-white py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-lens-purple hover:text-lens-purple/80">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
