# Blog Styling Guide - Subtle Enhancements & Custom Bullets

This guide shows how to use the enhanced blog styling features that prioritize readability while adding subtle visual touches.

## ✨ Enhanced Features

### 🎨 High Contrast Brand Color Headings

- **H2 headings**: Dark slate-blue (700) with accent line for excellent readability
- **H3 headings**: Medium slate-blue (600) for clear visual hierarchy
- **Accessibility focused**: Uses darker shades for proper contrast ratios
- **Dark mode optimized**: Lighter shades (300/400) for dark backgrounds

### 🔸 Custom Bullets

#### Default Bullets (Automatic)

Regular markdown lists get beautiful icon bullets:

```markdown
- Level 1 item (gets ▸ triangle)
  - Level 2 item (gets ◆ diamond)
    - Level 3 item (gets ▪ square)
```

#### Special Icon Bullets

Use data attributes in HTML or MDX components for special icons:

```markdown
<ul>
<li data-type="feature">Advanced Analytics Dashboard</li>
<li data-type="step">Connect your data sources</li>
<li data-type="tip">Use filters for better insights</li>
<li data-type="warning">Check data quality first</li>
<li data-type="success">Setup complete!</li>
<li data-type="info">Additional information</li>
<li data-type="rocket">Launch your campaign</li>
<li data-type="chart">View your metrics</li>
</ul>
```

#### Using MDX Components (Easier)

```markdown
<ul>
<FeatureItem>Advanced Analytics Dashboard</FeatureItem>
<StepItem>Connect your data sources</StepItem>
<TipItem>Use filters for better insights</TipItem>
<WarningItem>Check data quality first</WarningItem>
<SuccessItem>Setup complete!</SuccessItem>
<InfoItem>Additional information</InfoItem>
<RocketItem>Launch your campaign</RocketItem>
<ChartItem>View your metrics</ChartItem>
</ul>
```

### Icon Reference

| Type      | Icon | Use Case                    |
| --------- | ---- | --------------------------- |
| `feature` | ✨   | Product features, benefits  |
| `step`    | ➤    | Process steps, instructions |
| `tip`     | 💡   | Tips, best practices        |
| `warning` | ⚠️   | Warnings, cautions          |
| `success` | ✅   | Success states, completions |
| `info`    | ℹ️   | Information, notes          |
| `rocket`  | 🚀   | Launch, growth, performance |
| `chart`   | 📊   | Data, analytics, metrics    |

### 🎭 Other Subtle Enhancements

- **Images**: Clean card-like appearance with subtle borders and gentle hover effects
- **Links**: Consistent primary color with refined underlines
- **Blockquotes**: Clean styling with primary color accent
- **Code**: Refined inline and block code appearance
- **Tables**: Subtle hover effects on rows
- **HR**: Gradient divider lines with gentle shine animation
- **High Contrast Colors**: Uses darker brand color variants for excellent readability

All effects work perfectly in both light and dark modes and prioritize readability! 🌙✨
