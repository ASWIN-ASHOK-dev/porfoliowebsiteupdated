import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export async function GET() {
  const filePath = resolve(process.cwd(), "importantfiles/AswinAshokresumeupdated.pdf");
  const fileBuffer = await readFile(filePath);

  return new Response(fileBuffer, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": 'attachment; filename="AswinAshokresumeupdated.pdf"',
    },
  });
}