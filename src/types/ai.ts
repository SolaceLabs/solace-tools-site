export interface AIRecommendation {
  toolId: string;
  explanation: string;
}

export interface AIResponse {
  recommendations: AIRecommendation[];
}