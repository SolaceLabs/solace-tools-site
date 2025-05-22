import React, { useState } from 'react';
import { AIResponse } from '../types/ai';
import { getRecommendations } from '../data/getRecommendations';

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
      
      // Get recommendations
      const data = await getRecommendations(query);
      onRecommendations(data.recommendations);
    } catch (error) {
      console.error('Failed to get recommendations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      className="relative text-white pt-16 pb-8 md:pt-24 md:pb-12 bg-cover bg-center"
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
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex pl-4 rounded-full bg-white shadow-lg items-center">
          <div className="flex-none">
            ✨
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tell Solly AI what you're working on..."
            className="grow w-full px-6 py-3 bg-white text-solace-cool-gray-12 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="whitespace-nowrap px-6 py-2 m-1 bg-solace-classic-green hover:bg-solace-dark-green text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Thinking...' : 'Ask Solly AI'}
          </button>
        </form>
        <div className="p-6 rounded-lg shadow-sm mt-4 text-solace-cool-gray-13">
          <p>
            These tools are intended to make it easier and faster to
            build event-driven applications and integrations using the
            Solace Platform. They are provided by Solace or the community
            as open source tools and we invite the community to use them,
            provide feedback and enhance them.
          </p>
        </div>
      </div>
    </section>
  );
};