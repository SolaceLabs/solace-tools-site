import React, { useState, useEffect } from 'react';
import { ToolFilters } from './ToolFilters';
import { ToolGrid } from './ToolGrid';
import { ToolList } from './ToolList';
import { LayoutGrid, List } from 'lucide-react';
import { ToolsData, Tool } from '../data/tools';
import { FilterState } from '../types/filters';

export const ToolsCatalog: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [tools, setTools] = useState<Tool[]>(ToolsData);
  const [filteredTools, setFilteredTools] = useState<Tool[]>(ToolsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhases, setSelectedPhases] = useState<string[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    types: [],
    technologies: []
  });

  useEffect(() => {
    let result = [...ToolsData];
    
    if (selectedPhases.length > 0) {
      result = result.filter(tool => 
        tool.phases.some(phase => selectedPhases.includes(phase))
      );
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(tool => 
        tool.name.toLowerCase().includes(query) || 
        tool.description.toLowerCase().includes(query) ||
        tool.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }
    
    if (filters.types.length > 0) {
      result = result.filter(tool => filters.types.includes(tool.type));
    }
    
    if (filters.technologies.length > 0) {
      result = result.filter(tool => 
        tool.technologies.some(tech => filters.technologies.includes(tech))
      );
    }
    
    setFilteredTools(result);
  }, [searchQuery, filters, selectedPhases]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({
      types: [],
      technologies: []
    });
    setSearchQuery('');
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          <ToolFilters 
            filters={filters} 
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
            selectedPhases={selectedPhases}
            onPhaseChange={setSelectedPhases}
          />
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex flex-row items-center gap-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {filteredTools.length} {filteredTools.length === 1 ? 'Tool' : 'Tools'}
                  </h2>
                  <a href="https://github.com/SolaceLabs/solace-tools-site/issues/new?template=missing-tool.md" target="_blank" className="text-sm text-blue-600 hover:text-blue-800 hover:underline underline">Are we missing a tool?</a>
                </div>
                {(filters.types.length > 0 || filters.technologies.length > 0 || searchQuery || selectedPhases.length > 0) && (
                  <p className="text-sm text-gray-500">Filtered results</p>
                )}
              </div>
              
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative flex-grow sm:flex-grow-0">
                  <input
                    type="text"
                    placeholder="Search tools..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex items-center gap-2 border border-gray-300 rounded-md p-1">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-1 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                  >
                    <LayoutGrid size={20} />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-1 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {filteredTools.length === 0 && (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-2">No matching tools found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria.</p>
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
          
          {viewMode === 'grid' ? (
            <ToolGrid tools={filteredTools} />
          ) : (
            <ToolList tools={filteredTools} />
          )}
        </div>
      </div>
    </section>
  );
};