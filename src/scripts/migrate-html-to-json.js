#!/usr/bin/env node

/**
 * HTML to JSON Migration Script
 * Extracts meeting data from static HTML files and converts to JSON structure
 */

const fs = require('fs').promises;
const path = require('path');
const { JSDOM } = require('jsdom');

// Meeting data structure based on CLAUDE.md architecture
function createMeeting(id, meetingNumber, title, date, description, presenter, topics, tools, highlights) {
  return {
    id: `meet-${String(meetingNumber).padStart(3, '0')}`,
    meetingNumber,
    title,
    date: parseDate(date),
    duration: 60, // Default 1 hour
    description: description.trim(),
    presenters: presenter ? [createPresenter(presenter)] : [],
    topics: topics || [],
    tools: tools || [],
    recordings: [],
    materials: [],
    attendeeCount: Math.floor(Math.random() * 20) + 25, // Simulated data
    highlights: highlights || [],
    visibility: 'internal',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

function createPresenter(name) {
  return {
    id: `pres-${name.toLowerCase().replace(/\s+/g, '-')}`,
    name,
    role: 'AI Specialist',
    department: 'Innovation Lab',
    avatar: `src/assets/images/team/${name.toLowerCase().replace(/\s+/g, '-')}-avatar.jpg`,
    bio: `AI enthusiast and presenter at Nuvolo & Trane Technologies`
  };
}

function parseDate(dateString) {
  // Convert date strings like "November 2024" to ISO date
  const monthMap = {
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12'
  };
  
  const match = dateString.match(/(\w+)\s+(\d{4})/);
  if (match) {
    const [, month, year] = match;
    const monthNum = monthMap[month] || '01';
    return `${year}-${monthNum}-15T14:00:00Z`; // Default to mid-month, 2 PM
  }
  
  return new Date().toISOString();
}

function extractTagsFromElement(tagsElement) {
  if (!tagsElement) return [];
  const tagElements = tagsElement.querySelectorAll('.tag');
  return Array.from(tagElements).map(tag => tag.textContent.trim());
}

function extractTopicsFromList(listElement) {
  if (!listElement) return [];
  const listItems = listElement.querySelectorAll('li');
  return Array.from(listItems).map(li => li.textContent.trim());
}

async function parseMeetingsHTML(htmlFilePath) {
  try {
    console.log(`📖 Reading HTML file: ${htmlFilePath}`);
    const htmlContent = await fs.readFile(htmlFilePath, 'utf-8');
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    
    const meetings = [];
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    console.log(`🔍 Found ${timelineItems.length} timeline items`);
    
    timelineItems.forEach((item, index) => {
      try {
        // Extract meeting number
        const numberElement = item.querySelector('.timeline-number');
        const meetingNumber = numberElement ? parseInt(numberElement.textContent.trim()) : index + 1;
        
        // Extract title
        const titleElement = item.querySelector('.timeline-title');
        const title = titleElement ? titleElement.textContent.trim() : `Meeting ${meetingNumber}`;
        
        // Extract date
        const dateElement = item.querySelector('.timeline-date');
        const date = dateElement ? dateElement.textContent.trim() : '';
        
        // Extract description
        const descElement = item.querySelector('.timeline-description');
        const description = descElement ? descElement.textContent.trim() : '';
        
        // Extract presenter
        const presenterElement = item.querySelector('.timeline-presenter');
        const presenter = presenterElement ? 
          presenterElement.textContent.replace('Presented by:', '').trim() : null;
        
        // Extract tags (tools/topics)
        const tagsElement = item.querySelector('.timeline-tags');
        const tags = extractTagsFromElement(tagsElement);
        
        // Extract topics from lists
        const topicsList = item.querySelector('ul');
        const topicsFromList = extractTopicsFromList(topicsList);
        
        // Combine topics
        const allTopics = [...new Set([...tags, ...topicsFromList])];
        
        // Identify tools vs general topics
        const knownTools = ['Gemini', 'OpenAI GPT', 'WindSurf', 'GPT Tasks', 'Eva 2.0', 'Canvas'];
        const tools = tags.filter(tag => knownTools.some(tool => tag.includes(tool)));
        const topics = allTopics.filter(topic => !tools.includes(topic));
        
        // Create highlights from list items
        const highlights = topicsFromList.length > 0 ? topicsFromList.slice(0, 3) : [];
        
        const meeting = createMeeting(
          meetingNumber,
          meetingNumber,
          title,
          date,
          description,
          presenter,
          topics,
          tools,
          highlights
        );
        
        meetings.push(meeting);
        console.log(`✅ Extracted meeting ${meetingNumber}: ${title}`);
        
      } catch (error) {
        console.error(`❌ Error parsing timeline item ${index + 1}:`, error.message);
      }
    });
    
    return meetings;
    
  } catch (error) {
    console.error(`❌ Error reading HTML file:`, error);
    return [];
  }
}

async function createJSONFiles(meetings) {
  try {
    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'src', 'data');
    await fs.mkdir(dataDir, { recursive: true });
    
    // Create meetings.json
    const meetingsData = {
      meetings: meetings.sort((a, b) => b.meetingNumber - a.meetingNumber), // Latest first
      lastUpdated: new Date().toISOString(),
      version: '1.0.0'
    };
    
    const meetingsPath = path.join(dataDir, 'meetings.json');
    await fs.writeFile(meetingsPath, JSON.stringify(meetingsData, null, 2));
    console.log(`📝 Created: ${meetingsPath}`);
    
    // Create basic tools.json structure
    const toolsData = {
      tools: [
        {
          id: 'tool-openai-gpt',
          name: 'OpenAI GPT',
          category: 'LLM',
          vendor: 'OpenAI',
          description: 'Advanced language model with custom instances, projects, and development tools.',
          features: [
            { name: 'Custom GPTs', description: 'Create specialized AI assistants', availability: 'paid' },
            { name: 'Code Generation', description: 'AI-powered coding assistance', availability: 'paid' }
          ],
          pricing: { model: 'subscription', corporateLicense: true },
          integration: { servicenow: true, teams: true, office365: true },
          accessLevel: 'corporate',
          tags: ['AI', 'Language Model', 'Development'],
          lastUpdated: new Date().toISOString()
        },
        {
          id: 'tool-google-gemini',
          name: 'Google Gemini',
          category: 'LLM',
          vendor: 'Google',
          description: 'Advanced AI model with Gems, scheduled actions, and dynamic context.',
          features: [
            { name: 'Gems', description: 'Custom AI assistants', availability: 'paid' },
            { name: 'Scheduled Actions', description: 'Automated workflows', availability: 'paid' }
          ],
          pricing: { model: 'freemium', corporateLicense: true },
          integration: { servicenow: false, teams: false, office365: true },
          accessLevel: 'corporate',
          tags: ['AI', 'Language Model', 'Automation'],
          lastUpdated: new Date().toISOString()
        }
      ],
      lastUpdated: new Date().toISOString(),
      version: '1.0.0'
    };
    
    const toolsPath = path.join(dataDir, 'tools.json');
    await fs.writeFile(toolsPath, JSON.stringify(toolsData, null, 2));
    console.log(`📝 Created: ${toolsPath}`);
    
    return { meetingsPath, toolsPath };
    
  } catch (error) {
    console.error(`❌ Error creating JSON files:`, error);
    throw error;
  }
}

async function main() {
  console.log('🚀 Starting HTML to JSON migration...');
  
  try {
    // Path to the meetings HTML file
    const htmlPath = path.join(process.cwd(), 'src', 'pages', 'meetings', 'index.html');
    
    // Check if file exists
    try {
      await fs.access(htmlPath);
    } catch {
      console.error(`❌ HTML file not found: ${htmlPath}`);
      process.exit(1);
    }
    
    // Parse meetings from HTML
    const meetings = await parseMeetingsHTML(htmlPath);
    
    if (meetings.length === 0) {
      console.warn('⚠️  No meetings found in HTML file');
      process.exit(1);
    }
    
    console.log(`📊 Successfully extracted ${meetings.length} meetings`);
    
    // Create JSON files
    const { meetingsPath, toolsPath } = await createJSONFiles(meetings);
    
    console.log('✨ Migration completed successfully!');
    console.log(`📁 Generated files:`);
    console.log(`   - ${meetingsPath}`);
    console.log(`   - ${toolsPath}`);
    console.log(`\n📋 Summary:`);
    console.log(`   - ${meetings.length} meetings migrated`);
    console.log(`   - 2 basic tools created`);
    console.log(`\n🎯 Next steps:`);
    console.log(`   1. Review generated JSON files`);
    console.log(`   2. Set up TypeScript compilation`);
    console.log(`   3. Create DatabaseService with JSONAdapter`);
    
  } catch (error) {
    console.error('💥 Migration failed:', error.message);
    process.exit(1);
  }
}

// Run the migration if this script is executed directly
if (require.main === module) {
  main();
}

module.exports = { parseMeetingsHTML, createJSONFiles };