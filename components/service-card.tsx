import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6 space-y-4">
        <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
