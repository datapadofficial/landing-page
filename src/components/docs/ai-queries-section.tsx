interface AIQuery {
  question: string;
  description: string;
}

interface AIQueryCategory {
  title: string;
  queries: AIQuery[];
}

interface AIQueriesSectionProps {
  title?: string;
  description?: string;
  categories: AIQueryCategory[];
}

export function AIQueriesSection({ 
  title = "Example AI Queries", 
  description = "Ask these types of questions to get insights from your data:",
  categories 
}: AIQueriesSectionProps) {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg border bg-muted/20">
        <h3 className="text-lg font-medium mb-4">{title}</h3>
        {description && (
          <p className="text-muted-foreground mb-4">{description}</p>
        )}
        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-3">
              <h4 className="font-medium">{category.title}</h4>
              {category.queries.map((query, queryIndex) => (
                <div key={queryIndex} className="p-4 rounded-lg border bg-background">
                  <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                  <div className="font-medium mb-2">"{query.question}"</div>
                  <div className="text-xs text-muted-foreground">{query.description}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
