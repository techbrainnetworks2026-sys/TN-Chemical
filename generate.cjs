const fs = require('fs');

const products = [
  {id: 1, title: 'Process Simulation & Optimization'},
  {id: 2, title: 'Environmental Impact Assessment'},
  {id: 3, title: 'Chemical Inventory Management'},
  {id: 4, title: 'LIMS (Laboratory Information)'},
  {id: 5, title: 'Quality Control & Assurance'},
  {id: 6, title: 'Hazardous Material Tracking'},
  {id: 7, title: 'Chemical Safety Management'},
  {id: 8, title: 'Regulatory Compliance'},
  {id: 9, title: 'Sustainable Chemistry Tools'},
  {id: 10, title: 'Supply Chain & Collaboration'},
  {id: 11, title: 'Process Safety Management'},
  {id: 12, title: 'Computational Chemistry'},
  {id: 13, title: 'Waste Management & Recycling'},
  {id: 14, title: 'Emission Reduction Solutions'},
  {id: 15, title: 'Batch Process Control'},
  {id: 16, title: 'Remote Monitoring & Control'},
  {id: 17, title: 'Plant Maintenance Software'},
  {id: 18, title: 'MSDS Management Systems'},
  {id: 19, title: 'Digital Twin Technology'},
  {id: 20, title: 'Advanced Market Analytics'}
];

const headings = [
  'Introduction',
  'Background & Problem Statement',
  'Problem & Solution',
  'Core Functionalities',
  'Workflow',
  'Architecture',
  'Technologies',
  'Applications',
  'Benefits',
  'Challenges',
  'Future Scope',
  'Industry Impact',
  'Conclusion'
];

const data = products.map(p => {
  const content = {};
  headings.forEach(h => {
    content[h] = [
      `Comprehensive ${h.toLowerCase()} approach tailored for ${p.title}.`,
      `Leveraging advanced methodologies to ensure optimal outcomes in ${p.title}.`,
      `Addressing key performance metrics associated with ${h.toLowerCase()} dynamics.`,
      `Implementing industry best practices to streamline ${h.toLowerCase()} processes.`,
      `Providing robust frameworks to support continuous improvement in ${p.title}.`,
      `Enhancing overall operational efficiency through targeted ${h.toLowerCase()} strategies.`
    ];
  });
  return { id: p.id, title: p.title, content };
});

if (!fs.existsSync('src/data')) {
  fs.mkdirSync('src/data');
}
fs.writeFileSync('src/data/productDetails.js', 'export const productDetails = ' + JSON.stringify(data, null, 2) + ';');
console.log('Generated src/data/productDetails.js');
