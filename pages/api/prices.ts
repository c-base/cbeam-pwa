// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = string[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    ["LezÃ¡k - heller Lagerbier", "0,5", "4,8", "1,30", "2,50"],
    ["GranÃ¡t - dunkles Lagerbier", "0,5", "4,5", "1,30", "2,50"],
    ["Boruvka - Blaubeerbier", "0,5", "4,4", "1,30", "2,50"],
    ["Kvasar - mit Honigzusatz", "0,5", "5,7", "1,30", "2,50"],
    ["Premium Bier (Biobier)", "0,33", "5,0", "1,30", "2,00"],
    ["SchÃ¶fferhofer Grapefruit", "0,33", "2,5", "1,30", "2,00"],
    ["Berliner Pilsner", "0,5", "5,0", "1,30", "2,50"],
    ["SchÃ¶fferhofer Hefe hell", "0,5", "5,0", "1,30", "2,50"],
    ["Berliner-Kindl Radler", "0,5", "2,5", "1,30", "2,50"],
    ["Sommersby Cidre", "0,33", "4,5", "1,30", "2,50"],
    ["Flora Power Mate (1,2)", "0,5", "", "1,30", "2,00"],
    ["Kolle-Mate (Bio)", "0,5", "", "1,30", "2,00"],
    ["Leet Mate (1337Mate)", "0,5", "", "1,30", "2,00"],
    ["Club Mate (1)", "0,5", "", "1,30", "2,00"],
    ["Premiun-Cola (1,2)", "0,5", "", "1,30", "2,00"],
    ["Spezi (1,2)", "0,5", "", "1,30", "2,00"],
    ["Wostok Tannenwald", "0,5", "", "1,30", "2,00"],
    ["Wostok GrÃ¼n (2,4)", "0,5", "", "1,30", "2,00"],
    ["Kraftmalz (Malzbier)", "0,5", "", "1,30", "2,00"],
    ["Holsten alkoholfrei", "0,5", "", "1,30", "2,00"],
    ["SchÃ¶fferhofer alkoholfrei", "0,5", "", "1,30", "2,00"],
    ["Rixdorfer Orange", "0,5", "", "1,30", "2,00"],
    ["Rixdorfer FaÃŸbrause", "0,5", "", "1,30", "2,00"],
    ["Bauer-Schorle Rhabarber", "0,5", "", "1,30", "2,00"],
    ["Bauer-Schorle Granatapfel", "0,5", "", "1,30", "2,00"],
    ["Wasser (mit o. ohne Sprudel)", "0,5", "", "0,70", "1,50"],
  ]);
}
