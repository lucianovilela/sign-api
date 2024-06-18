import { NextResponse, NextRequest } from "next/server";
import { pesquisa }from "../lib/pesquisa";

export  async function GET(
  _req: NextRequest
) {
  const  name  = _req.nextUrl.searchParams.get("name");
  const person:any = await pesquisa(name);
  return  Response.json(person)
  //return res.status(200).json(person);
}
