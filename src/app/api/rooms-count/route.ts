// api/rooms-count/route.ts

import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { RowDataPacket } from "mysql2/promise";

interface SettingsRow extends RowDataPacket {
  value: string;
}

export async function GET() {
  try {
    const [rows] = await pool.query<SettingsRow[]>("SELECT value FROM settings WHERE `key` = 'rooms_count5'");
    const count = rows[0]?.value ? Number(rows[0].value) : 0;
    return NextResponse.json({ count });
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { count } = await req.json();
    if (typeof count !== "number" || count < 0) {
      return NextResponse.json({ error: "count должен быть неотрицательным числом" }, { status: 400 });
    }
    await pool.query(
      "INSERT INTO settings (`key`, `value`) VALUES ('rooms_count5', ?) ON DUPLICATE KEY UPDATE `value` = ?",
      [count, count]
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}