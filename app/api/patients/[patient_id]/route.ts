import { patientData } from "@/data/patients";

export async function GET() {
  return Response.json({ patientData });
}
