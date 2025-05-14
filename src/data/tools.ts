import toolsData from './tools.json';

export interface Tool {
  id: string;
  name: string;
  description: string;
  logo: string;
  type: string;
  technologies: string[];
  link?: string;
  codeLink?: string;
  featured?: boolean;
  phases: ('Design' | 'Develop' | 'Test' | 'Deploy' | 'Monitor')[];
}

export const ToolsData: Tool[] = toolsData.tools.map(tool => {
  const processedTool = { ...tool };
  
  // If the link is a GitHub link, move it to codeLink
  if (tool.link?.includes('github.com')) {
    processedTool.codeLink = tool.link;
    delete processedTool.link;
  }
  
  return processedTool;
});