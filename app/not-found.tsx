import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { FileQuestion } from "lucide-react";

const NotFound = () => (
  <main className="min-h-screen flex flex-col items-center justify-center">
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FileQuestion size={24} />
        </EmptyMedia>
        <EmptyTitle>Page Not Found</EmptyTitle>
        <EmptyDescription>
          This page doesn&apos;t exist. Or maybe it never did. Either way, not
          my problem.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <p>If you think this is wrong, you know where to find me.</p>
      </EmptyContent>
    </Empty>
  </main>
);

export default NotFound;
