# AI Blog Post Update Instructions

## Overview

These instructions guide the AI assistant through updating blog posts to ensure they contain current information about Datapad's features, accurate competitor data, and optimized content for 2025.

## Prerequisites

Before starting, ensure you have access to:

- The blog post file to be updated
- `/src/data/features/features.ts` - Contains current Datapad feature descriptions
- Web search capabilities for competitor research
- Target keywords list (if provided by user)

## Update Process

### Step 1: Read and Analyze the Current Post

1. **Read the entire blog post** to understand:

   - Main topic and target audience
   - Current Datapad product descriptions
   - Competitor information mentioned
   - Date references that need updating
   - Overall structure and flow

2. **Identify sections that need updates**:
   - Datapad feature descriptions
   - Competitor pricing/features
   - Date references (especially 2023/2024)
   - Outdated statistics or claims

### Step 2: Update Datapad's Product Information

#### Reference the Latest Features

Use the data from `/src/data/features/features.ts` to update Datapad descriptions. The file contains 13 core features:

**Core Features to Highlight:**

1. **AI Data Agent** - Natural language data queries with instant statistical analysis
2. **Dashboards** - AI-generated custom dashboards tailored to business needs
3. **Text2SQL & Python** - Convert natural language to executable code and queries
4. **50+ Integrations** - Seamless connections across marketing, sales, and database platforms
5. **Data Blending** - Combine multiple data sources for comprehensive analysis
6. **Shareable Reports** - Professional, branded reports with executive summaries
7. **Slack Bot** - Data insights and alerts directly in team communication
8. **Voice Mode** - Voice-powered presentations with real-time narration
9. **AI Workflows** - 50+ ready-to-use workflows creating actionable deliverables
10. **Multi-Model AI** - Leverage Claude, ChatGPT, and other models for optimal results
11. **Learning Layer** - Personalized AI that learns from users and context
12. **Web Access** - Real-time web data integration for market analysis

#### Update Guidelines:

- Replace outdated feature descriptions with current `longDescription` from features.ts
- Include specific benefits from the `benefits` array
- Add relevant use cases from `useCases` array
- Reference available video assets from `videoUrl` fields when appropriate
- Use the feature `steps` to explain how features work

#### Writing Style:

- Language should be direct, simplistic, bold, and challenging
- Avoid jargon - make it accessible
- Focus on business outcomes, not just technical capabilities
- Emphasize the "no-code" and "instant" aspects

### Step 3: Update All Date References

#### Date Update Rules:

- **Update to 2025**: Replace all instances of "2024" or "2023" in content
- **Metadata dates**: Update `updated` or `lastModified` dates to current 2025 date
- **DO NOT change**: Original `created` or `published` dates
- **Future references**: Update "in the coming year" to reference 2025
- **Statistics**: If mentioning "recent studies" or "latest data" ensure they reference 2025 or late 2024

#### Common Patterns to Find and Replace:

```
"in 2024" → "in 2025"
"by 2024" → "by 2025"
"2024 trends" → "2025 trends"
"the year 2024" → "the year 2025"
"as of 2024" → "as of 2025"
```

### Step 4: Research and Update Competitor Information

#### Research Process:

1. **Identify competitors mentioned** in the post
2. **Web search for each competitor** to find:
   - Current pricing (especially if pricing tables exist)
   - New features launched in late 2024/early 2025
   - Recent funding or company changes
   - Updated positioning or messaging

#### What to Update:

- **Pricing information**: Get latest pricing tiers and costs
- **Feature comparisons**: Add new features, remove discontinued ones
- **Company status**: Recent acquisitions, funding, or major changes
- **Market positioning**: How they're currently positioning themselves

#### Verification Guidelines:

- Prioritize official company websites and press releases
- Cross-reference pricing information from multiple sources
- Look for recent (within 6 months) announcements
- Be conservative - if uncertain, use more general language

### Step 5: Implement Target Keywords (If Provided)

#### Keyword Integration Strategy:

1. **Natural placement**: Integrate keywords organically into existing content
2. **Header optimization**: Include primary keywords in H2/H3 headers where relevant
3. **First paragraph**: Try to include main keyword in opening paragraph
4. **Throughout content**: Distribute keywords naturally, avoid keyword stuffing

#### Best Practices:

- Maintain readability and natural flow
- Use keyword variations and synonyms
- Include keywords in image alt text when relevant
- Don't force keywords where they don't fit naturally

### Step 6: Final Polishes

#### Content Quality Review:

1. **Readability check**:

   - Short, punchy sentences
   - Clear paragraph breaks
   - Logical flow between sections
   - Strong calls-to-action

2. **Accuracy verification**:

   - All claims can be substantiated
   - Links are working and relevant
   - Statistics are current and sourced
   - No contradictory information

3. **SEO optimization**:

   - Meta description updated if needed
   - Headers use proper hierarchy (H1, H2, H3)
   - Internal links to relevant Datapad pages
   - External links open in new tabs

4. **Brand consistency**:
   - Datapad spelled correctly throughout
   - Consistent tone and voice
   - Proper capitalization of product names
   - CTA buttons point to https://app.datapad.io

#### Final Checklist:

- [ ] All dates updated to 2025 (except created dates)
- [ ] Datapad features reflect current capabilities from features.ts
- [ ] Competitor information researched and updated
- [ ] Target keywords naturally integrated (if provided)
- [ ] Links tested and working
- [ ] Content flows naturally and maintains readability
- [ ] Strong call-to-action included
- [ ] Meta information updated appropriately

## Quality Standards

### Content Requirements:

- **Direct and Bold**: Don't hedge with "may" or "might" - be confident
- **Outcome-focused**: Emphasize business results, not just features
- **Accessible**: Avoid technical jargon, explain complex concepts simply
- **Actionable**: Give readers clear next steps

### Technical Requirements:

- Maintain proper markdown formatting
- Preserve existing URL structure and internal links
- Keep any existing schema markup intact
- Maintain responsive image references

## Common Mistakes to Avoid:

1. **Don't** change created/published dates
2. **Don't** make claims about competitors without current research
3. **Don't** stuff keywords unnaturally
4. **Don't** remove important context while updating
5. **Don't** change the core message or positioning of the post
6. **Don't** add features that aren't actually available in Datapad

## Success Metrics:

A successfully updated post should:

- Feel current and relevant to 2025
- Accurately represent Datapad's current capabilities
- Provide up-to-date competitor comparisons
- Rank well for target keywords (if provided)
- Maintain the original post's value while improving accuracy

## Media Assets Reference:

When updating posts, you can reference these video assets available in the public folder:

- `/videos/features/ai-data-agent.mp4`
- `/videos/features/dashboards.mp4`
- `/videos/features/integrations.mp4`
- `/videos/features/shareable-reports.mp4`
- `/videos/features/text-to-sql-python.mp4`
- `/videos/features/voice-mode.mp4`

---

## Implementation Notes:

- Always start with reading the entire post before making changes
- Make changes systematically, section by section
- If unsure about competitor claims, err on the side of caution
- Test all links before finalizing updates
- Maintain the post's original personality and tone while updating facts

