import { Card, CardHeader, CardContent, CardFooter } from "../../../components/ui/Card";
import { Badge } from "../../../components/ui/Badge" ;
import type { Task } from "../../../types/task";

interface TaskCardProps {
  task: Task;
}

const priorityToVariant = {
  low: "secondary",
  medium: "default",
  high: "destructive",
} as const;

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Card className="space-y-2">
      <CardHeader>{task.title}</CardHeader>

      <CardContent>
        <p className="line-clamp-2">
          {task.description}
        </p>
      </CardContent>

      <CardFooter>
        <div className="flex gap-2 flex-wrap">
          <Badge variant={priorityToVariant[task.priority]}>
            {task.priority}
          </Badge>

          {task.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="text-xs text-gray-500">
          {task.assignee}
        </div>
      </CardFooter>
    </Card>
  );
};