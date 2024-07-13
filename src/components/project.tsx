import { Card, CardContent, CardHeader } from "./ui/card";

export function Project(props: {
  name: string;
  link: string;
  bio: string;
  date: string;
}) {
  return (
    <a href={props.link} target="_blank" className="block">
      <Card className="hover:bg-muted">
        <CardHeader>
          <div className="flex justify-between">
            <h4 className="font-medium">{props.name}</h4>
            <p className="text-muted-foreground">{props.date}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{props.bio}</p>
        </CardContent>
      </Card>
    </a>
  );
}
