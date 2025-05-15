import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Resources: React.FC = () => {

  return (
    <section id="Resources" className="resources py-12" style={{background: "linear-gradient(0deg,#37404a,#252b32)"}}>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl text-white mb-8">Resources</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-4">
        <a
          href="https://tutorials.solace.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white p-6 rounded-lg shadow transition bg-solace-resource-gray"
        >
          <div className="text-xl mb-2 text-solace-classic-green">API Tutorials</div>
          <p>Get up-to-speed in sending and receiving messages over open APIs and protocols, Solace Messaging APIs, and Pivotal Platform.</p>
        </a>
        <a
          href="https://github.com/SolaceSamples"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white p-6 rounded-lg shadow transition bg-solace-resource-gray"
        >
          <div className="text-xl mb-2 text-solace-classic-green">GitHub Samples</div>
          <p>Check out our Solace samples for Spring, JMS, MQTT, AMQP, JavaScript, and more.</p>
        </a>
        <a
          href="https://codelabs.solace.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white p-6 rounded-lg shadow transition bg-solace-resource-gray"
        >
          <div className="text-xl mb-2 text-solace-classic-green">Codelabs & Workshops</div>
          <p>Get guided, hands on coding experience with PubSub+ Codelabs.</p>
        </a>
      </div>

      <div className="space-y-4">
        <a
          href="https://training.solace.com/learn/signin"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white p-6 rounded-lg shadow transition bg-solace-resource-gray"
        >
          <div className="text-xl mb-2 text-solace-classic-green">Training & Certifications</div>
          <p>Get up to speed on our managed messaging service.</p>
        </a>
        <a
          href="https://docs.solace.com/SDKPerf/SDKPerf.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white p-6 rounded-lg shadow transition bg-solace-resource-gray"
        >
          <div className="text-xl mb-2 text-solace-classic-green">SDKPerf</div>
          <p>SDKPerf is a command line tool for validating performance, checking configuration, and exploring features associated with your PubSub+ message broker.</p>
        </a>
        <a
          href="https://solace.com/connectors/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white p-6 rounded-lg shadow transition bg-solace-resource-gray"
        >
          <div className="text-xl mb-2 text-solace-classic-green">Integrations Hub</div>
          <p>Get a jump start plugging PubSub+ into AWS, Kafka, Spark, IBM WebSphere, and much more.</p>
        </a>
      </div>

      <div className="space-y-4">
        <a
          href="https://solace.community"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white p-6 rounded-lg shadow transition bg-solace-resource-gray"
        >
          <div className="text-xl mb-2 text-solace-classic-green">Developer Community</div>
          <p>Technical community for PubSub+.</p>
        </a>
        <a
          href="https://solace.com/engage-developer-advocate/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-white p-6 rounded-lg shadow transition bg-solace-resource-gray"
        >
          <div className="text-xl mb-2 text-solace-classic-green">Engage with an Advocate</div>
          <p>Chat with a developer advocate on your schedule! We want to meet you and hear about your Solace experience.</p>
        </a>
      </div>
    </div>
  </div>
</section>

  );
};