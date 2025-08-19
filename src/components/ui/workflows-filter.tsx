"use client";

import { useState, useMemo } from "react";
import { workflows } from "@/data/workflow-templates/workflow-templates";
import { Team } from "@/types/team";
import { Button } from "@/components/ui/button";
import { WorkflowCard } from "@/components/ui/workflow-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, X } from "lucide-react";
import { WorkflowTemplate } from "@/types/template";

interface WorkflowsFilterProps {
  workflows: WorkflowTemplate[];
  teams: Team[];
}

export function WorkflowsFilter({ workflows, teams }: WorkflowsFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  // Filter workflows based on search query, category, and difficulty
  const filteredWorkflows = useMemo(() => {
    return workflows.filter((workflow) => {
      // Search filter - check title and description
      const matchesSearch =
        searchQuery === "" ||
        workflow.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        workflow.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === "all" || workflow.team === selectedCategory;

      // Difficulty filter
      const matchesDifficulty =
        selectedDifficulty === "all" ||
        workflow.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [workflows, searchQuery, selectedCategory, selectedDifficulty]);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedDifficulty("all");
  };

  // Check if any filters are active
  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "all" ||
    selectedDifficulty !== "all";

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search workflows..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {teams.map((team) => (
              <SelectItem key={team.slug} value={team.slug}>
                {team.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={selectedDifficulty}
          onValueChange={setSelectedDifficulty}
        >
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="All Difficulties" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={clearFilters}
            className="whitespace-nowrap"
          >
            <X className="h-4 w-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Results count and active filters */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {filteredWorkflows.length} of {workflows.length} workflows
          {hasActiveFilters && (
            <span className="ml-2">
              {searchQuery && (
                <span className="inline-flex items-center bg-primary/10 text-primary px-2 py-1 rounded-md text-xs mr-2">
                  Search: "{searchQuery}"
                </span>
              )}
              {selectedCategory !== "all" && (
                <span className="inline-flex items-center bg-primary/10 text-primary px-2 py-1 rounded-md text-xs mr-2">
                  Category:{" "}
                  {teams.find((t) => t.slug === selectedCategory)?.name}
                </span>
              )}
              {selectedDifficulty !== "all" && (
                <span className="inline-flex items-center bg-primary/10 text-primary px-2 py-1 rounded-md text-xs mr-2">
                  Difficulty: {selectedDifficulty}
                </span>
              )}
            </span>
          )}
        </p>
      </div>

      {/* Workflow Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkflows.map((workflow) => (
          <WorkflowCard key={workflow.slug} workflow={workflow} />
        ))}
      </div>

      {/* No results message */}
      {filteredWorkflows.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">No workflows found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
          {hasActiveFilters && (
            <Button variant="outline" onClick={clearFilters}>
              Clear all filters
            </Button>
          )}
        </div>
      )}
    </>
  );
}
