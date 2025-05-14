import { Tool } from '../data/tools';

export const getUniqueTypes = (tools: Tool[]): string[] => {
  const types = new Set<string>();
  
  tools.forEach(tool => {
    types.add(tool.type);
  });
  
  return Array.from(types).sort();
};

export const getUniqueTechnologies = (tools: Tool[]): string[] => {
  const technologies = new Set<string>();
  
  tools.forEach(tool => {
    tool.technologies.forEach(tech => {
      technologies.add(tech);
    });
  });
  
  return Array.from(technologies).sort();
};