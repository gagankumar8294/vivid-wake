import fs from "fs";
import path from "path";

export async function GET() {
  const apkPath = path.join(process.cwd(), "public", "vividwake.apk");

  if (!fs.existsSync(apkPath)) {
    return new Response("APK not found", { status: 404 });
  }

  const stat = fs.statSync(apkPath);
  const fileStream = fs.createReadStream(apkPath);

  const stream = new ReadableStream({
    start(controller) {
      fileStream.on("data", (chunk) => controller.enqueue(chunk));
      fileStream.on("end", () => controller.close());
      fileStream.on("error", (err) => controller.error(err));
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="VividWake-v1.0.apk"',
      "Content-Length": stat.size.toString(),
      "Cache-Control": "public, max-age=3600",
    },
  });
}
