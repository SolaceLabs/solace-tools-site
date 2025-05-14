import { AIResponse } from '../types/ai';

export const getMockRecommendations = (query: string): AIResponse => {
  // Convert query to lowercase for easier matching
  const q = query.toLowerCase();
  
  if (q.includes('testing') || q.includes('test')) {
    return {
      recommendations: [
        {
          toolId: '2',
          explanation: 'Solace Try-Me Event Feeds provides pre-configured event streams to simulate real-world scenarios, perfect for testing your event-driven applications without setting up complex data sources.'
        },
        {
          toolId: '6',
          explanation: 'The Solace TryMe CLI enables automated testing through command-line interfaces, making it ideal for CI/CD pipelines and scripted test scenarios.'
        },
        {
          toolId: '8',
          explanation: 'SDKPerf is essential for performance testing, allowing you to benchmark throughput and latency to ensure your system meets performance requirements.'
        }
      ]
    };
  }
  
  if (q.includes('design') || q.includes('modeling')) {
    return {
      recommendations: [
        {
          toolId: '3',
          explanation: 'AsyncAPI Studio with Event Portal Import is your primary tool for designing event-driven architectures, offering visual modeling and AsyncAPI specification support.'
        },
        {
          toolId: '10',
          explanation: 'The IntelliJ Event Portal Plugin integrates directly with your IDE, streamlining the design process by bringing event modeling capabilities into your development environment.'
        },
        {
          toolId: '12',
          explanation: 'For MuleSoft users, the Anypoint/Eclipse Plugin enables seamless integration between your IDE and Solace Event Portal, making it easier to generate and maintain event models.'
        }
      ]
    };
  }
  
  if (q.includes('monitor') || q.includes('visualize')) {
    return {
      recommendations: [
        {
          toolId: '1',
          explanation: 'The Sunburst Topic Explorer provides an intuitive visualization of your topic hierarchies, essential for understanding and monitoring your event mesh structure.'
        },
        {
          toolId: '7',
          explanation: 'Pretty Dump helps you visualize and debug message payloads by formatting them into human-readable structures, making troubleshooting easier.'
        },
        {
          toolId: '13',
          explanation: 'The Slack Plugin enables real-time monitoring by sending event broker notifications directly to your Slack channels, keeping your team informed of important system events.'
        }
      ]
    };
  }

  if (q.includes('develop') || q.includes('coding')) {
    return {
      recommendations: [
        {
          toolId: '9',
          explanation: 'The VSCode Try-Me Extension brings Solace messaging capabilities directly into your IDE, perfect for testing and debugging during development.'
        },
        {
          toolId: '11',
          explanation: 'The IntelliJ Try-Me Plugin enables real-time message testing within IntelliJ, streamlining the development workflow for Java developers.'
        },
        {
          toolId: '4',
          explanation: 'The AsyncAPI Event Portal Importer CLI tool helps maintain consistency between your code and Event Portal during development.'
        }
      ]
    };
  }

  if (q.includes('document') || q.includes('documentation')) {
    return {
      recommendations: [
        {
          toolId: '14',
          explanation: 'The Confluence Plugin is essential for maintaining up-to-date documentation by embedding Event Portal assets directly in your Confluence pages.'
        },
        {
          toolId: '3',
          explanation: 'AsyncAPI Studio helps generate comprehensive API documentation from your event specifications, ensuring your documentation stays in sync with your design.'
        }
      ]
    };
  }
  
  // Default response for any other query
  return {
    recommendations: [
      {
        toolId: '3',
        explanation: 'AsyncAPI Studio is a great starting point for any event-driven project, helping you design and document your event interfaces.'
      },
      {
        toolId: '2',
        explanation: 'Solace Try-Me Event Feeds will help you get started with testing your event-driven applications using pre-configured event streams.'
      },
      {
        toolId: '9',
        explanation: 'The VSCode Try-Me Extension provides a convenient way to interact with Solace messaging directly from your development environment.'
      }
    ]
  };
};