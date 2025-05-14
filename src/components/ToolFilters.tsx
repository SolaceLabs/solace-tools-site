import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { FilterState } from '../types/filters';
import { getUniqueTypes, getUniqueTechnologies } from '../utils/filterUtils';
import { ToolsData } from '../data/tools';

interface ToolFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  selectedPhases: string[];
  onPhaseChange: (phases: string[]) => void;
}

const PHASES = ['Design', 'Develop', 'Test', 'Deploy', 'Monitor'] as const;

export const ToolFilters: React.FC<ToolFiltersProps> = ({ 
  filters, 
  onFilterChange,
  onClearFilters,
  selectedPhases,
  onPhaseChange
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const types = getUniqueTypes(ToolsData);
  const technologies = getUniqueTechnologies(ToolsData);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFilterToggle = (type: keyof FilterState, value: string) => {
    const currentValues = filters[type];
    let newValues;
    
    if (currentValues.includes(value)) {
      newValues = currentValues.filter(v => v !== value);
    } else {
      newValues = [...currentValues, value];
    }
    
    onFilterChange({
      ...filters,
      [type]: newValues
    });
  };

  const handlePhaseToggle = (phase: string) => {
    const newPhases = selectedPhases.includes(phase)
      ? selectedPhases.filter(p => p !== phase)
      : [...selectedPhases, phase];
    onPhaseChange(newPhases);
  };

  const isAnyFilterActive = () => {
    return filters.types.length > 0 || 
           filters.technologies.length > 0 ||
           selectedPhases.length > 0;
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const FilterDropdown = ({ 
    title, 
    options, 
    selectedValues, 
    filterKey,
    colorScheme = 'purple' 
  }: { 
    title: string;
    options: string[];
    selectedValues: string[];
    filterKey: keyof FilterState;
    colorScheme?: 'purple' | 'green';
  }) => {
    const colors = {
      purple: {
        button: 'border-purple-200 hover:border-purple-300',
        activeText: 'text-purple-600',
        dropdown: 'bg-purple-50',
        checkbox: 'text-purple-600 focus:ring-purple-500',
        selectedText: 'text-purple-600'
      },
      green: {
        button: 'border-green-200 hover:border-green-300',
        activeText: 'text-green-600',
        dropdown: 'bg-green-50',
        checkbox: 'text-green-600 focus:ring-green-500',
        selectedText: 'text-green-600'
      }
    };

    const color = colors[colorScheme];

    return (
      <div className="relative">
        <button
          onClick={() => toggleDropdown(title)}
          className={`px-4 py-2 bg-white border rounded-md flex items-center gap-2 transition-colors ${color.button}`}
        >
          <span className={selectedValues.length > 0 ? color.activeText : 'text-gray-700'}>
            {title} {selectedValues.length > 0 && `(${selectedValues.length})`}
          </span>
          <ChevronDown 
            size={16} 
            className={`transition-transform ${openDropdown === title ? 'rotate-180' : ''}`}
          />
        </button>
        
        {openDropdown === title && (
          <div className="absolute z-50 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="max-h-64 overflow-y-auto p-2">
              {options.map(option => (
                <label 
                  key={option}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer rounded"
                >
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option)}
                    onChange={() => handleFilterToggle(filterKey, option)}
                    className={`w-4 h-4 rounded border-gray-300 ${color.checkbox}`}
                  />
                  <span className={`text-sm ${selectedValues.includes(option) ? color.selectedText : 'text-gray-700'}`}>
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm" ref={dropdownRef}>
      <div className="flex items-center gap-2 mb-6">
        <Filter size={20} className="text-gray-500" />
        <h2 className="text-lg font-semibold text-gray-800">Filter Tools</h2>
      </div>
      
      <div className="flex items-center gap-6 py-6">
        <div className="flex items-center gap-2">
          {PHASES.map((phase, index) => (
            <React.Fragment key={phase}>
              <button
                onClick={() => handlePhaseToggle(phase)}
                className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all ${
                  selectedPhases.includes(phase)
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
              >
                <span className="absolute -bottom-7 whitespace-nowrap text-xs font-medium text-gray-600">
                  {phase}
                </span>
              </button>
              {index < PHASES.length - 1 && (
                <div className={`h-[2px] w-8 ${selectedPhases.includes(phase) && selectedPhases.includes(PHASES[index + 1]) ? 'bg-blue-500' : 'bg-blue-200'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="h-8 w-px bg-gray-200" />
        
        <div className="flex items-center gap-3">
          <FilterDropdown
            title="Types"
            options={types}
            selectedValues={filters.types}
            filterKey="types"
            colorScheme="purple"
          />
          
          <FilterDropdown
            title="Technologies"
            options={technologies}
            selectedValues={filters.technologies}
            filterKey="technologies"
            colorScheme="green"
          />
          
          {isAnyFilterActive() && (
            <button 
              onClick={() => {
                onClearFilters();
                onPhaseChange([]);
              }}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear all
            </button>
          )}
        </div>
      </div>
    </div>
  );
};