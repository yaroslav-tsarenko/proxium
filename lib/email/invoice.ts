import PDFDocument from "pdfkit";
import { COMPANY } from "@/lib/company";

export interface InvoiceData {
  orderId: string;
  createdAt: Date;
  customer: { name: string; email: string; address?: string };
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  currency: string;
}

export function generateInvoicePdf(data: InvoiceData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 50 });
    const chunks: Buffer[] = [];
    doc.on("data", (c) => chunks.push(c as Buffer));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const green = "#22c55e";
    const invoiceNo = data.orderId.slice(-8).toUpperCase();

    doc.fillColor("#111111").fontSize(26).font("Helvetica-Bold").text("proxium", 50, 50);
    doc.fillColor("#555555").fontSize(10).font("Helvetica")
      .text(COMPANY.name, 400, 50, { align: "right" })
      .text(COMPANY.address, { align: "right", width: 145 })
      .text(`Reg. No.: ${COMPANY.regNumber}`, { align: "right" });
    if (COMPANY.vat) doc.text(`VAT No.: ${COMPANY.vat}`, { align: "right" });
    doc.text(COMPANY.email, { align: "right" });

    doc.moveTo(50, 130).lineTo(545, 130).strokeColor("#e5e5e5").stroke();

    doc.fillColor("#111111").fontSize(18).font("Helvetica-Bold").text("INVOICE", 50, 150);
    doc.fontSize(10).font("Helvetica").fillColor("#555555")
      .text(`Invoice #: ${invoiceNo}`, 50, 178)
      .text(`Date: ${data.createdAt.toISOString().slice(0, 10)}`, 50, 192);

    doc.fillColor("#111111").font("Helvetica-Bold").text("Bill to:", 350, 150);
    doc.font("Helvetica").fillColor("#555555")
      .text(data.customer.name, 350, 168)
      .text(data.customer.email, 350, 182);
    if (data.customer.address) doc.text(data.customer.address, 350, 196, { width: 195 });

    const tableTop = 260;
    doc.fillColor("#ffffff").rect(50, tableTop, 495, 24).fill(green);
    doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(10)
      .text("Description", 60, tableTop + 7)
      .text("Qty", 330, tableTop + 7)
      .text("Unit", 390, tableTop + 7)
      .text("Amount", 470, tableTop + 7);

    const rowY = tableTop + 34;
    doc.fillColor("#111111").font("Helvetica").fontSize(10)
      .text(data.productName, 60, rowY, { width: 260 })
      .text(String(data.quantity), 330, rowY)
      .text(`${data.currency} ${data.unitPrice.toFixed(2)}`, 390, rowY)
      .text(`${data.currency} ${data.totalPrice.toFixed(2)}`, 470, rowY);

    const totalY = rowY + 40;
    doc.moveTo(330, totalY).lineTo(545, totalY).strokeColor("#e5e5e5").stroke();
    doc.font("Helvetica-Bold").fontSize(12).fillColor("#111111")
      .text("Total", 330, totalY + 10)
      .text(`${data.currency} ${data.totalPrice.toFixed(2)}`, 470, totalY + 10);

    doc.fontSize(9).font("Helvetica").fillColor("#888888")
      .text(`Prices include VAT where applicable. Merchant of Record: ${COMPANY.name}.`, 50, totalY + 60, { width: 495 })
      .text("Thank you for your business.", 50, totalY + 76);

    doc.end();
  });
}
