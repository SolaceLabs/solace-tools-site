import React from 'react';
import { Tool } from '../data/tools';
import { ExternalLink, Download, Code } from 'lucide-react';

interface ToolListProps {
  tools: Tool[];
}

export const ToolList: React.FC<ToolListProps> = ({ tools }) => {
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
    <div className="space-y-4">
      {tools.map(tool => (
        <div 
          key={tool.id} 
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-24 sm:h-auto p-4 flex items-center justify-center bg-gray-50">
              <img 
                src={tool.logo} 
                alt={`${tool.name} logo`}
                className="w-16 h-16 object-contain"
              />
            </div>
            
            <div className="flex-1 p-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{tool.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {tool.phases.map(phase => renderTag(phase, 'phase'))}
                    {renderTag(tool.type, 'type')}
                    {tool.technologies.map(tech => renderTag(tech, 'technology'))}
                  </div>
                </div>
                
                <div className="flex gap-2 shrink-0">
                  {tool.link && (
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-md text-sm transition-colors"
                    >
                      {tool.linkType === 'download' ? <Download size={16} /> : <ExternalLink size={16} />}
                      <span>{tool.linkType === 'download' ? 'Download' : 'Visit'}</span>
                    </a>
                  )}
                  {tool.codeLink && (
                    <a
                      href={tool.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-50 text-purple-600 hover:bg-purple-100 rounded-md text-sm transition-colors"
                    >
                      <Code size={16} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};