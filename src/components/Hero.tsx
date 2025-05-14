import React, { useState } from 'react';
import { AIResponse } from '../types/ai';
import { getMockRecommendations } from '../data/mockRecommendations';

// Define colors object for the gradient
const colors = {
  solace: {
    darkBlue: '#1B2A4E',
    deepBlue: '#0A1931',
    'cool-gray-13': '#E5E7EB',
    'cool-gray-12': '#374151',
    'classic-green': '#00C895',
    'dark-green': '#00A67E'
  }
};

interface HeroProps {
  onRecommendations: (recommendations: AIResponse['recommendations']) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRecommendations }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get mock recommendations
      const data = getMockRecommendations(query);
      onRecommendations(data.recommendations);
    } catch (error) {
      console.error('Failed to get recommendations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      className="relative text-white py-16 md:py-24 bg-cover bg-center"
      style={{ 
        backgroundImage: 'url(https://www.solace.dev/static/header-bg-photo-6f69eb1013425f7391d803738b75e441.jpg)'
      }}
    >
      <div 
        className="absolute inset-0" 
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Solace Tools</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-solace-cool-gray-13">
          Discover the perfect tools for your project's needs. Describe to Solly AI what you are doing and Solly AI will suggest which tools you should use and why.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            ✨
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tell Solly AI what you're working on..."
            className="w-full pl-12 pr-32 py-3 rounded-full bg-white text-solace-cool-gray-12 shadow-lg focus:outline-none focus:ring-2 focus:ring-solace-classic-green"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-solace-classic-green hover:bg-solace-dark-green text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Thinking...' : 'Ask Solly AI'}
          </button>
        </form>
      </div>
    </section>
  );
};