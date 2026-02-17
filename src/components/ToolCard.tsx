import React from 'react';
import { Tool } from '../data/tools';
import { ExternalLink, Github } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  aiExplanation?: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, aiExplanation }) => {
  const renderTag = (value: string, type: 'type' | 'technology' | 'phase') => {
    const styles = {
      type: 'bg-purple-50 text-purple-600',
      technology: 'bg-green-50 text-green-600',
      phase: 'bg-blue-50 text-blue-600'
    };

    return (
      <span 
        key={`${type}-${value}`}
        className={`text-xs px-2 py-1 rounded-full ${styles[type]} flex items-center gap-1`}
      >
        <span className="w-2 h-2 rounded-full bg-current opacity-60" />
        {value}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col transform hover:-translate-y-1">
      <div style={{background: "#00c895"}} className="h-16 bg-gray-50 flex items-center justify-center p-3">
        <img
          src={tool.logo}
          alt={`${tool.name} logo`}
          className="h-full max-h-10 object-contain"
          onError={(e) => {
            e.currentTarget.src = '/android-chrome-512x512.png'; // Fallback image
          }}
        />
      </div>
      
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{tool.name}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {tool.description}
          {tool.learnLink && (
            <>
              {' '}
              <a 
                href={tool.learnLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline underline"
              >
                Learn more
              </a>
            </>
          )}
        </p>
        
        {aiExplanation && (
          <div className="mb-4 p-3 bg-blue-50 rounded-md border border-blue-100">
            <p className="text-sm text-gray-700">{aiExplanation}</p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.phases.map(phase => renderTag(phase, 'phase'))}
          {renderTag(tool.type, 'type')}
          {tool.technologies.map(tech => renderTag(tech, 'technology'))}
        </div>
      </div>
      
      <div className="px-4 pb-4 mt-auto space-y-2">
        {tool.link && (
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-1 px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-md transition-colors"
          >
            <ExternalLink size={16} />
            <span>Visit</span>
          </a>
        )}
        {tool.codeLink && (
          <a
            href={tool.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-1 px-4 py-2 bg-purple-50 text-purple-600 hover:bg-purple-100 rounded-md transition-colors"
          >
            <Github size={16} />
            <span>View Code</span>
          </a>
        )}
      </div>
    </div>
  );
};