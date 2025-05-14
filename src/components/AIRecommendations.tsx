import React from 'react';
import { X } from 'lucide-react';
import { AIRecommendation } from '../types/ai';
import { Tool, ToolsData } from '../data/tools';
import { ToolCard } from './ToolCard';

interface AIRecommendationsProps {
  recommendations: AIRecommendation[];
  onClose: () => void;
}

export const AIRecommendations: React.FC<AIRecommendationsProps> = ({ recommendations, onClose }) => {
  if (!recommendations.length) return null;

  const getToolById = (id: string): Tool | undefined => {
    return ToolsData.find(tool => tool.id === id);
  };

  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Solly AI thinks these tools would be useful to you
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-blue-100 rounded-full transition-colors"
            aria-label="Close recommendations"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec) => {
            const tool = getToolById(rec.toolId);
            if (!tool) return null;
            return (
              <ToolCard 
                key={rec.toolId} 
                tool={tool} 
                aiExplanation={rec.explanation}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};