import { patientData } from "@/data/patients";

export async function GET() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return Response.json({ patientData });
}
