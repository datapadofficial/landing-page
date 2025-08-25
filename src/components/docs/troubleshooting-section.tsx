interface TroubleshootingItem {
  issue: string;
  solution: string;
}

interface TroubleshootingSectionProps {
  title?: string;
  items: TroubleshootingItem[];
}

export function TroubleshootingSection({ 
  title = "Troubleshooting", 
  items 
}: TroubleshootingSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="space-y-4">
        <div className="p-4 rounded-lg border bg-muted/20">
          <h4 className="font-medium mb-2">Common Issues</h4>
          <div className="space-y-3 text-sm">
            {items.map((item, index) => (
              <div key={index}>
                <strong>{item.issue}:</strong> {item.solution}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
