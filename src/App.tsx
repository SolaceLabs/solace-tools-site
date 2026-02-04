import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { AIRecommendations } from './components/AIRecommendations';
import { ToolsCatalog } from './components/ToolsCatalog';
import { Resources } from './components/Resources';
import { Footer } from './components/Footer';
import { AIRecommendation } from './types/ai';

function App() {
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);

  const handleCloseRecommendations = () => {
    setRecommendations([]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero onRecommendations={setRecommendations} />
        {recommendations.length > 0 && (
          <AIRecommendations 
            recommendations={recommendations} 
            onClose={handleCloseRecommendations}
          />
        )}
        <ToolsCatalog />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;