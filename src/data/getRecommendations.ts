import { AIResponse } from '../types/ai';
import { ToolsData } from '../data/tools'

export const getRecommendations = async (query: string): AIResponse => {
  
  try {
    const response = await fetch('https://tools-ai-suggestions.azurewebsites.net/api/getSuggestions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description: query, tools: ToolsData })
    })

    const responseBody = await response.json()

    return responseBody
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return { recommendations: [] }; // Return an empty array in case of error
  }
};