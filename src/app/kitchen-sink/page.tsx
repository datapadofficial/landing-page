"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Settings,
  User,
  Mail,
  Phone,
  Calendar,
  Star,
  Heart,
  Share,
  Download,
} from "lucide-react";
import { useState } from "react";

export default function KitchenSinkPage() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold tracking-tight">Kitchen Sink</h1>
          <ThemeToggle />
        </div>
        <p className="text-xl text-muted-foreground">
          A comprehensive showcase of all shadcn/ui components for Datapad's
          design system.
        </p>
      </div>

      {/* Buttons Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>Various button styles and states</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button disabled>Disabled</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              With Icon
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Form Elements */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
          <CardDescription>
            Input fields, selects, and form controls
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <Input id="phone" type="tel" placeholder="Enter your phone" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea id="message" placeholder="Enter your message" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Select Option</label>
            <Select value={selectedValue} onValueChange={setSelectedValue}>
              <SelectTrigger>
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Navigation</CardTitle>
          <CardDescription>Navigation menus and dropdowns</CardDescription>
        </CardHeader>
        <CardContent>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <div className="flex items-center gap-3 p-2">
                      <Search className="h-5 w-5" />
                      <div>
                        <div className="font-medium">AI Chat</div>
                        <div className="text-sm text-muted-foreground">
                          Ask questions in natural language
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                      <Calendar className="h-5 w-5" />
                      <div>
                        <div className="font-medium">Automated Reports</div>
                        <div className="text-sm text-muted-foreground">
                          Get insights delivered to your inbox
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:bg-accent rounded-md">
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:bg-accent rounded-md">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="mt-4 flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      {/* Badges and Avatars */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Badges & Avatars</CardTitle>
          <CardDescription>
            Status indicators and user representations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>

            <Separator />

            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dialogs and Sheets */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Dialogs & Overlays</CardTitle>
          <CardDescription>Modal dialogs and side panels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Welcome to Datapad</DialogTitle>
                  <DialogDescription>
                    This is a sample dialog showcasing how modals work in our
                    design system. You can place any content here including
                    forms, images, or other components.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>Get Started</Button>
                </div>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>
                    This is a side panel that can contain navigation, settings,
                    or other content.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  <Button className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button className="w-full justify-start" variant="ghost">
                    <Mail className="mr-2 h-4 w-4" />
                    Messages
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </CardContent>
      </Card>

      {/* Cards Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Feature Card
            </CardTitle>
            <CardDescription>
              A sample feature card with icon and description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This card demonstrates how to present features or services in a
              clean, organized way.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Customer Story
            </CardTitle>
            <CardDescription>
              Testimonial or customer success story
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              "Datapad transformed our data analysis process completely."
            </p>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-medium">John Doe</div>
                <div className="text-muted-foreground">CEO, TechCorp</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share className="h-5 w-5 text-blue-500" />
              Action Card
            </CardTitle>
            <CardDescription>Card with call-to-action buttons</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Take action with these interactive elements.
            </p>
            <div className="flex gap-2">
              <Button size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button size="sm" variant="outline">
                <Share className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Color Palette */}
      <Card>
        <CardHeader>
          <CardTitle>Color Palette</CardTitle>
          <CardDescription>Datapad's design system colors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-16 bg-primary rounded-md"></div>
              <div className="text-sm font-medium">Primary</div>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-secondary rounded-md"></div>
              <div className="text-sm font-medium">Secondary</div>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-accent rounded-md"></div>
              <div className="text-sm font-medium">Accent</div>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-muted rounded-md"></div>
              <div className="text-sm font-medium">Muted</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
